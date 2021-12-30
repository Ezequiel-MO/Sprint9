import useGetProjects from "../../../hooks/useGetProjects";
import { useState, useEffect } from "react";

const usePMProjectList = () => {
  const { projects } = useGetProjects();
  const [sortedProjects, setSortedProjects] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setSortedProjects(projects);
  }, [projects]);

  useEffect(() => {
    if (sortOrder === "asc") {
      const AscProjectsArr = [...projects].sort((a, b) => {
        let c = new Date(a.createdAt);
        let d = new Date(b.createdAt);
        return c - d;
      });

      setSortedProjects(AscProjectsArr);
    } else if (sortOrder === "desc") {
      const DescProjectsArr = [...projects].sort((a, b) => {
        let c = new Date(a.createdAt);
        let d = new Date(b.createdAt);
        return d - c;
      });

      setSortedProjects(DescProjectsArr);
    }
  }, [sortOrder]);

  const getDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.toLocaleString("default", { month: "short" });
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return {
    sortedProjects,
    getDate,
    setSortOrder,
  };
};

export default usePMProjectList;
