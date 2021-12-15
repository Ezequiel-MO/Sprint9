import { Icon } from "@iconify/react";
import { Table } from "../../../generalStyles";
import Button from "../../../uicomponents/Button/Button";
import PMProjectListLogic from "./PMProjectListLogic";
import { PMFilters } from "./styles";

const PMProjectList = ({ project: searchWord }) => {
  const { projects, getDate } = PMProjectListLogic();

  const findSearchTerm = (string1, string2) => {
    return string1.toLowerCase().includes(string2.toLowerCase());
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
          ?.filter((project) => {
            return (
              project.code.toLowerCase().includes(searchWord.toLowerCase()) ||
              project.accountManager
                .toLowerCase()
                .includes(searchWord.toLowerCase())
            );
          })
          .slice(0, 5)
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
