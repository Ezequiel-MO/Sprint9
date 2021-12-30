import { useState } from "react";
import { SET_UserIsSearchingProject } from "../../features/UserIsSearchingProjectSlice.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useProjectModal = () => {
  const [project, setProject] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProject("");
  };

  const handleNewProjectClick = () => {
    dispatch(SET_UserIsSearchingProject(false));
    history.push("/project-log");
  };

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  const handleCancelClick = () => {
    dispatch(SET_UserIsSearchingProject(false));
  };
  return {
    handleNewProjectClick,
    handleChange,
    handleSubmit,
    handleCancelClick,
    project,
  };
};

export default useProjectModal;
