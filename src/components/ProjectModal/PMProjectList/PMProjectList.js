import { Icon } from "@iconify/react";
import { projectData } from "../../../data/projects-data";
import { Table } from "../../../generalStyles";
import Button from "../../../uicomponents/Button/Button";
import { PMFilters } from "./styles";

const PMProjectList = () => {
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
        {projectData.map(({ code, user, date }) => (
          <tr key={code}>
            <td>{code}</td>
            <td>{user}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PMProjectList;
