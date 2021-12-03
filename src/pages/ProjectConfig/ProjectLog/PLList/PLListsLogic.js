const PLListsLogic = (data) => {
  const {
    code,
    accountManager,
    groupName,
    groupLocation,
    arrivalDay,
    departureDay,
    nrPax,
    clientCo,
    clientAccManager,
  } = data;

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
  return { tableData };
};

export default PLListsLogic;
