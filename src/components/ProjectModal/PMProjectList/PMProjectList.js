import { projectData } from "../../../data/projects-data";

const PMProjectList = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Project</th>
          <th>User</th>
          <th>Date</th>
        </tr>
        {projectData.map(({ code, user, date }) => (
          <tr key={code}>
            <td>{code}</td>
            <td>{user}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PMProjectList;
