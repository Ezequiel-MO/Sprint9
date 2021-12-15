import { Icon } from "@iconify/react";
import { Table } from "../../../generalStyles";
import PMProjectListLogic from "./PMProjectListLogic";
import { ScTh } from "./styles";

const PMProjectList = ({ project: searchWord }) => {
  const { sortedProjects, getDate, setSortOrder } = PMProjectListLogic();

  return (
    <Table>
      <tbody>
        <tr>
          <th align='left'>Code</th>
          <th align='left'>User</th>
          <th align='left'>Client</th>
          <ScTh align='left'>
            Date{" "}
            <span>
              <Icon icon='akar-icons:chevron-down' />
            </span>
            <div>
              <p>ORDER</p>
              <p onClick={() => setSortOrder("asc")}>Ascending</p>
              <p onClick={() => setSortOrder("desc")}>Descending</p>
            </div>
          </ScTh>
        </tr>
        {sortedProjects
          ?.filter((project) => {
            return (
              project.code.toLowerCase().includes(searchWord.toLowerCase()) ||
              project.accountManager
                .toLowerCase()
                .includes(searchWord.toLowerCase()) ||
              project.clientCo.toLowerCase().includes(searchWord.toLowerCase())
            );
          })
          .slice(0, 6)
          .map(({ code, accountManager, createdAt, clientCo, _id }) => (
            <tr key={_id}>
              <td>{code}</td>
              <td>{accountManager}</td>
              <td>{clientCo}</td>
              <td>{getDate(createdAt)}</td>
              <td>"+"</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default PMProjectList;
