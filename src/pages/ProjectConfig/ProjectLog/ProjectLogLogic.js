import { useState, useEffect } from "react";
import { baseAPI, baseURL } from "../../../api/axios";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { checkForDuplicates } from "../utils/utils";
import { useDispatch } from "react-redux";
import { SET_ActiveCode } from "../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";

const ProjectLogLogic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    data: { projects },
  } = useAxiosFetch(`${baseURL}/projects`);
  const [projectFormIsValid, setProjectFormIsValid] = useState(false);
  const [projectInputData, setProjectInputData] = useState({
    code: "",
    accountManager: "",
    groupName: "",
    groupLocation: "",
    arrivalDay: "",
    departureDay: "",
    nrPax: null,
    clientCo: "",
    clientAccManager: "",
    hotels: [],
    schedule: [],
  });

  useEffect(() => {
    if (projectFormIsValid) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(projectInputData)) {
        formData.append(key, value);
      }
      const postProjectData = () => {
        baseAPI
          .post("/projects", formData)
          .then((res) => console.log("res=>", res))
          .catch((err) => console.log(err));
      };
      dispatch(SET_ActiveCode(projectInputData["code"]));
      postProjectData();
      setTimeout(() => history.push("/hotel-project-form"), 500);
    } else {
      alert("please fill in all data");
    }
  }, [projectFormIsValid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInputData({ ...projectInputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = false;
    const allInputsAreNonEmpty = !Object.values(projectInputData).some(
      (value) => value === null || value === ""
    );
    if (allInputsAreNonEmpty) {
      const codeArr = projects?.map((project) => project.code);
      const { codeIsNew } = checkForDuplicates(
        projectInputData["code"],
        codeArr
      );

      setProjectFormIsValid(codeIsNew);
    }
  };
  return {
    projectInputData,
    handleChange,
    handleSubmit,
    projectFormIsValid,
  };
};

export default ProjectLogLogic;
