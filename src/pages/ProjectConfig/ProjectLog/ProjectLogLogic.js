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

  const checkAllInputsAreNonEmpty = (arr) => {
    const allInputsAreNonEmpty = !Object.values(arr).some(
      (value) => value === null || value === ""
    );
    return allInputsAreNonEmpty;
  };

  const checkCodeIsUnique = (code) => {
    const codeArr = projects?.map((project) => project.code);
    const codeIsUnique = !checkForDuplicates(code, codeArr);
    return codeIsUnique;
  };

  const checkDatesAreValid = (arrivalDay, departureDay) => {
    const arrivalDayIsAfterToday = new Date(arrivalDay) > new Date();
    const departureDayIsAfterArrivalDayOrSameAsArrivalDay =
      //departure day is after arrival day or same as arrival day
      new Date(departureDay) > new Date(arrivalDay) ||
      arrivalDay === departureDay;

    return (
      arrivalDayIsAfterToday && departureDayIsAfterArrivalDayOrSameAsArrivalDay
    );
  };

  const showErrorMessages = (bool1, bool2, bool3) => {
    if (bool1 && bool2 && bool3) {
      setDialogMessage("");
      setProjectFormIsValid(true);
    } else if (!bool1) {
      setDialogMessage("Please fill in all the inputs");
      setProjectFormIsValid(false);
    } else if (!bool2) {
      setDialogMessage("This code is already in the DB");
      setProjectFormIsValid(false);
    } else if (!bool3) {
      setDialogMessage("The Dates are not valid");
      setProjectFormIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInputsNonEmpty = checkAllInputsAreNonEmpty(projectInputData);
    const noDupes = checkCodeIsUnique(projectInputData["code"]);
    const datesAreValid = checkDatesAreValid(
      projectInputData["arrivalDay"],
      projectInputData["departureDay"]
    );
    setDialogMessage("");
    setTimeout(
      () => showErrorMessages(allInputsNonEmpty, noDupes, datesAreValid),
      500
    );
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
