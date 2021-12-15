import useGetProjects from "../../../hooks/useGetProjects";
import { useEffect } from "react";

const PMProjectListLogic = () => {
  const { projects } = useGetProjects();

  useEffect(() => {
    console.log("projects", projects);
  }, [projects]);

  const getDate = (date) => {
    //transform date 2021-11-17T10:07:33.952Z to 17/Nov/2021
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.toLocaleString("default", { month: "short" });
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return {
    projects,
    getDate,
  };
};

export default PMProjectListLogic;
