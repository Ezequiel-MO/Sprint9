import { Icon } from "@iconify/react";
import { projectData } from "../../../data/projects-data";
import { Table } from "../../../generalStyles";
import Button from "../../../uicomponents/Button/Button";
import { PMFilters } from "./styles";
import useGetProjects from "../../../hooks/useGetProjects";
import { useEffect } from "react";

const PMProjectList = () => {
  const { projects } = useGetProjects();

  useEffect(() => {
    console.log("projects", projects);
  }, [projects]);

  const getDate = (date) => {
    //transfor date 2021-11-17T10:07:33.952Z to 17/Nov/2021
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.toLocaleString("default", { month: "short" });
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Table>
      <caption>
        <PMFilters>
          <Button>
            <span>
              <Icon
                icon='mdi:sort-calendar-ascending'
                color='black'
                width='24'
                inline={true}
              />
            </span>
            Sort by Date
          </Button>
          <Button>
            <span>
              <Icon
                icon='ant-design:sort-ascending-outlined'
                color='#000'
                width='24'
                inline={true}
              />
            </span>
            Sort by User
          </Button>
        </PMFilters>
      </caption>
      <tbody>
        <tr>
          <th align='left'>Project</th>
          <th align='left'>User</th>
          <th align='left'>Date</th>
        </tr>
        {projects
          ?.slice(0, 5)
          .map(({ code, accountManager, createdAt, _id }) => (
            <tr key={_id}>
              <td>{code}</td>
              <td>{accountManager}</td>
              <td>{getDate(createdAt)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default PMProjectList;
