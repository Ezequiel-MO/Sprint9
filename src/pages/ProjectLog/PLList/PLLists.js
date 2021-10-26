import { Table } from "../../../generalStyles";

const PLList = ({
  data: {
    code,
    accountManager,
    groupName,
    groupLocation,
    arrivalDay,
    departureDay,
    nrPax,
    clientCo,
    clientAccManager,
  },
}) => {
  const tableData = [
    {
      id: 1,
      tableElements: [
        {
          header: "Project Code",
          data: code,
        },
        {
          header: "Account Manager",
          data: accountManager,
        },
        {
          header: "Event Location",
          data: groupLocation,
        },
      ],
    },
    {
      id: 2,
      tableElements: [
        {
          header: "Arrival Day",
          data: arrivalDay,
        },
        {
          header: "Departure Day",
          data: departureDay,
        },
        {
          header: "Number of Pax",
          data: nrPax,
        },
      ],
    },
    {
      id: 3,
      tableElements: [
        {
          header: "Group Name",
          data: groupName,
        },
        {
          header: "Company Client",
          data: clientCo,
        },
        {
          header: "Client Account Mngr",
          data: clientAccManager,
        },
      ],
    },
  ];

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