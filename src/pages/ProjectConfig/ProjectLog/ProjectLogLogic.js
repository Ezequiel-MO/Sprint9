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
    fetchError,
  } = useAxiosFetch(`${baseURL}/projects`);
  const [dialogMessage, setDialogMessage] = useState("");
  const [projectFormIsValid, setProjectFormIsValid] = useState(false);
  const [projectInputData, setProjectInputData] = useState({
    code: "ex BEM20210023",
    accountManager: "John Doe",
    groupName: "Ciscalis",
    groupLocation: "Barcelona",
    arrivalDay: "20-10-2022",
    departureDay: "22-10-2022",
    nrPax: 100,
    clientCo: "The Ev Mng co",
    clientAccManager: "Jonas Smith",
    hotels: [],
    schedule: [],
  });

  useEffect(() => {
    if (fetchError) {
      alert(fetchError);
      history.push("/");
    }
  }, [fetchError, history]);

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
    }
  }, [projectFormIsValid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInputData({ ...projectInputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInputsAreNonEmpty = !Object.values(projectInputData).some(
      (value) => value === null || value === ""
    );
    if (allInputsAreNonEmpty) {
      const codeArr = projects?.map((project) => project.code);
      const codeIsDuplicated = checkForDuplicates(
        projectInputData["code"],
        codeArr
      );
      setDialogMessage("");
      setProjectFormIsValid(!codeIsDuplicated);
    } else {
      setDialogMessage("Gaps found - please fill in all data");
    }
  };
  return {
    projectInputData,
    handleChange,
    handleSubmit,
    dialogMessage,
    projectFormIsValid,
  };
};

export default ProjectLogLogic;
