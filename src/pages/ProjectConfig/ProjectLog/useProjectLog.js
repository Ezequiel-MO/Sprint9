import { useState } from "react";
import { baseAPI, baseURL } from "../../../api/axios";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { checkForDuplicates } from "../utils/utils";
import { useDispatch } from "react-redux";
import { SET_ActiveCode } from "../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";

const useProjectLog = () => {
  const [dialogMessage, setDialogMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    data: { projects },
    fetchError,
  } = useAxiosFetch(`${baseURL}/projects`);

  const postData = (values) => {
    if (fetchError) {
      setDialogMessage(fetchError);
      setTimeout(() => history.push("/"), 500);
    }
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
    const postProjectData = () => {
      baseAPI
        .post("/projects", formData)
        .then((res) => console.log("res=>", res))
        .catch((err) => console.log(err));
    };
    dispatch(SET_ActiveCode(values["code"]));
    postProjectData();
    setTimeout(() => history.push("/hotel-project-form"), 500);
  };

  const checkCodeIsUnique = (code) => {
    const codeArr = projects?.map((project) => project.code);
    const codeIsUnique = !checkForDuplicates(code, codeArr);
    return codeIsUnique;
  };

  return { dialogMessage, postData, checkCodeIsUnique };
};

export default useProjectLog;
