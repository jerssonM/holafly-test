export const countries = [
  {
    name: "Colombia",
    flagUrl:
      "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",
  },
  {
    name: "España",
    flagUrl:
      "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",
  },
  {
    name: "Peru",
    flagUrl:
      "https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png",
  },
  {
    name: "Alemania",
    flagUrl:
      "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
  },
];

export const plans = [
  { name: "4 dias, 3GB" },
  { name: "30 dias, 25GB" },
  { name: "1 dia, 1.4GB" },
  { name: "10 dias, 12GB" },
];

export const users = [
  {
    email: "jersson@test.com",
    name: "Jersson",
    password: "$2b$04$Vmh/Yq3OhQPJxfUZy0U87Oa/C12ysZfJU929kEZRMNBMcZomVhaOO",
  },
  {
    email: "carlos@test.com",
    name: "Carlos",
    password: "$2b$04$ZB5l3al2Bs1uvtJwKkpeJ.8p0n7wVlbvci/S147k20oeTu0RP1JmK",
  },
];

export const usersPlans = [
  {
    planId: 1,
    dateStart: "2023-09-03T20:49:32Z",
    dateEnd: "2024-09-20T23:32:01Z",
    countryId: 4,
    status: "Expired",
    userId: 2,
  },
  {
    planId: 1,
    dateStart: "2023-11-03T15:05:00Z",
    dateEnd: "2024-07-09T14:41:18Z",
    countryId: 3,
    status: "Pending",
    consumption: { totalConsumption: 80 },
    userId: 2,
  },
  {
    planId: 2,
    dateStart: "2023-07-08T15:04:33Z",
    dateEnd: "2024-06-03T02:45:42Z",
    countryId: 2,
    status: "Expired",
    userId: 1,
  },
  {
    planId: 1,
    dateStart: "2023-11-02T14:35:07Z",
    dateEnd: "2024-04-30T22:15:55Z",
    countryId: 4,
    status: "Active",
    consumption: { totalConsumption: 60 },
    userId: 2,
  },
  {
    planId: 2,
    dateStart: "2023-08-04T02:14:08Z",
    dateEnd: "2024-12-08T03:15:14Z",
    countryId: 1,
    status: "Expired",
    userId: 1,
  },
  {
    planId: 3,
    dateStart: "2023-07-25T09:29:58Z",
    dateEnd: "2024-01-29T15:34:55Z",
    countryId: 1,
    status: "Active",
    consumption: { totalConsumption: 40 },
    userId: 1,
  },
  {
    planId: 1,
    dateStart: "2023-05-06T13:52:43Z",
    dateEnd: "2024-04-11T02:50:06Z",
    countryId: 2,
    status: "Active",
    consumption: { totalConsumption: 100 },
    userId: 1,
  },
  {
    planId: 1,
    dateStart: "2023-08-22T06:04:34Z",
    dateEnd: "2024-01-15T14:00:41Z",
    countryId: 4,
    status: "Expired",
    userId: 1,
  },
  {
    planId: 3,
    dateStart: "2023-12-19T15:32:35Z",
    dateEnd: "2024-11-23T23:46:52Z",
    countryId: 3,
    status: "Expired",
    userId: 2,
  },
  {
    planId: 1,
    dateStart: "2023-12-14T23:58:29Z",
    dateEnd: "2024-10-18T21:24:12Z",
    countryId: 1,
    status: "Pending",
    consumption: { totalConsumption: 10 },
    userId: 1,
  },
  {
    planId: 3,
    dateStart: "2023-10-14T13:32:47Z",
    dateEnd: "2024-05-28T18:20:42Z",
    countryId: 3,
    status: "Active",
    consumption: { totalConsumption: 42 },
    userId: 2,
  },
  {
    planId: 1,
    dateStart: "2023-07-24T04:53:30Z",
    dateEnd: "2024-07-06T20:03:47Z",
    countryId: 1,
    status: "Active",
    consumption: { totalConsumption: 40 },
    userId: 2,
  },
  {
    planId: 3,
    dateStart: "2023-04-22T17:20:11Z",
    dateEnd: "2024-10-21T09:28:23Z",
    countryId: 4,
    status: "Expired",
    userId: 2,
  },
  {
    planId: 2,
    dateStart: "2023-04-20T12:54:11Z",
    dateEnd: "2024-09-08T04:23:23Z",
    countryId: 3,
    status: "Active",
    consumption: { totalConsumption: 22 },
    userId: 1,
  },
  {
    planId: 3,
    dateStart: "2023-08-26T09:09:28Z",
    dateEnd: "2024-09-19T03:55:19Z",
    countryId: 1,
    status: "Pending",
    consumption: { totalConsumption: 0 },
    userId: 1,
  },
  {
    planId: 2,
    dateStart: "2023-08-24T22:39:48Z",
    dateEnd: "2024-01-30T05:57:48Z",
    countryId: 2,
    status: "Active",
    consumption: { totalConsumption: 65 },
    userId: 2,
  },
  {
    planId: 2,
    dateStart: "2023-10-17T08:32:56Z",
    dateEnd: "2024-06-17T20:25:06Z",
    countryId: 1,
    status: "Pending",
    consumption: { totalConsumption: 5 },
    userId: 1,
  },
  {
    planId: 4,
    dateStart: "2023-01-24T05:51:26Z",
    dateEnd: "2024-09-03T04:19:42Z",
    countryId: 4,
    status: "Expired",
    userId: 1,
  },
  {
    planId: 2,
    dateStart: "2023-07-20T05:13:59Z",
    dateEnd: "2024-12-01T11:33:16Z",
    countryId: 2,
    status: "Expired",
    userId: 1,
  },
  {
    planId: 2,
    dateStart: "2023-12-06T01:26:51Z",
    dateEnd: "2024-06-23T04:31:07Z",
    countryId: 4,
    status: "Pending",
    consumption: { totalConsumption: 51 },
    userId: 1,
  },
];
