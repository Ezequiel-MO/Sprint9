import { rest } from "msw";

export const handlers = [
  rest.get("https://cutt-events.herokuapp.com/projects", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: "6194d4652d4aec746e4d89c2",
          code: "BEM20210022",
          accountManager: "Ezequiel Martinez",
          groupName: "Generali",
          groupLocation: "Barcelona",
          arrivalDay: "2021-11-24",
          departureDay: "2021-11-25",
          nrPax: 100,
          clientCo: "World Event Mngmt",
          clientAccManager: "Jonas Smith",
          hotels: [],
          schedule: [],
          createdAt: "2020-11-24T17:00:00.000Z",
          updatedAt: "2020-11-24T17:00:00.000Z",
          _v: 2,
        },
        {
          _id: "619c0d1da6bafd37329be722",
          code: "BEM20210024",
          accountManager: "Ezequiel Martinez",
          groupName: "Generali",
          groupLocation: "Barcelona",
          arrivalDay: "2021-11-24",
          departureDay: "2021-11-25",
          nrPax: 100,
          clientCo: "World Event Mngmt",
          clientAccManager: "Jonas Smith",
          hotels: [],
          schedule: [],
          createdAt: "2020-11-24T17:00:00.000Z",
          updatedAt: "2020-11-24T17:00:00.000Z",
          _v: 3,
        },
      ])
    );
  }),
];
