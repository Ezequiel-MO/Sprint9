import { Table } from "../../../../generalStyles";
import PLListsLogic from "./PLListsLogic";

const PLList = ({ data }) => {
  const { tableData } = PLListsLogic(data);
  return (
    <Table>
      {tableData.map((unit) => (
        <tbody key={unit.id}>
          <tr>
            {unit.tableElements.map((tableElement) => (
              <th key={tableElement.header} align='left'>
                {tableElement.header}
              </th>
            ))}
          </tr>
          <tr>
            {unit.tableElements.map((tableElement) => (
              <td key={tableElement.header}>{tableElement.data} </td>
            ))}
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default PLList;
