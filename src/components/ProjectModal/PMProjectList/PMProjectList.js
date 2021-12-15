import { Icon } from "@iconify/react";
import { Table } from "../../../generalStyles";
import Button from "../../../uicomponents/Button/Button";
import PMProjectListLogic from "./PMProjectListLogic";
import { PMFilters } from "./styles";

const PMProjectList = ({ project: searchWord }) => {
  const { projects, getDate } = PMProjectListLogic();

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
        </PMFilters>
      </caption>
      <tbody>
        <tr>
          <th align='left'>Code</th>
          <th align='left'>User</th>
          <th align='left'>Client</th>
          <th align='left'>Date</th>
        </tr>
        {projects
          ?.filter((project) => {
            return (
              project.code.toLowerCase().includes(searchWord.toLowerCase()) ||
              project.accountManager
                .toLowerCase()
                .includes(searchWord.toLowerCase()) ||
              project.clientCo.toLowerCase().includes(searchWord.toLowerCase())
            );
          })
          .slice(0, 5)
          .map(({ code, accountManager, createdAt, clientCo, _id }) => (
            <tr key={_id}>
              <td>{code}</td>
              <td>{accountManager}</td>
              <td>{clientCo}</td>
              <td>{getDate(createdAt)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default PMProjectList;
