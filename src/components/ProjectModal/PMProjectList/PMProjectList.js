import { projectData } from "../../../data/projects-data";
import { Table } from "./styles.js";

const PMProjectList = () => {
  return (
    <Table>
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
