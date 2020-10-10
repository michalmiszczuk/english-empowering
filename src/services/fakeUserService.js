const users = [
  {
    _id: "1",
    name: "John",
    surname: "Smith",
    password: "fdf4f4ffsfsad",
    email: "jsmith@domain.com",
    reservedLessons: [{_id: "1"}, {_id: "4"}, {_id: "8"}],
    progress: [
      {title: "Tenses", currentLevel: 0},
      {title: "Articles", currentLevel: 0},
      {title: "Questions", currentLevel: 0},
      {title: "Adj ING vs ED", currentLevel: 0},
      {title: "Adj GET vs BE", currentLevel: 0},
      {title: "Passive voice", currentLevel: 0},
      {title: "Infinitive", currentLevel: 0},
      {title: "Modal verbs", currentLevel: 0},
      {title: "Modal verbs (PAST)", currentLevel: 0},
      {title: "Prefer / Rather", currentLevel: 0},
      {title: "Used to", currentLevel: 0},
      {title: "Reported Speech", currentLevel: 0},
      {title: "Contrast Clauses", currentLevel: 0},
      {title: "Time Clauses", currentLevel: 0},
      {title: "Purpose Clauses", currentLevel: 0},
      {title: "Reason Clauses", currentLevel: 0},
      {title: "Defining / Non-def", currentLevel: 0},
      {title: "Impersonal Passive", currentLevel: 0},
      {title: "Participles", currentLevel: 0},
      {title: "Inversion", currentLevel: 0},
    ],
  },
  {
    _id: "2",
    name: "Mike",
    surname: "Portnoy",
    password: "mssdsdsd3434343",
    email: "mportnoy@domain.com",
    reservedLessons: [{_id: "2"}, {_id: "6"}],
    progress: [
      {title: "Tenses", currentLevel: 2},
      {title: "Articles", currentLevel: 1},
      {title: "Questions", currentLevel: 3},
      {title: "Adj ING vs ED", currentLevel: 2},
      {title: "Adj GET vs BE", currentLevel: 1},
      {title: "Passive voice", currentLevel: 3},
      {title: "Infinitive", currentLevel: 2},
      {title: "Modal verbs", currentLevel: 4},
      {title: "Modal verbs (PAST)", currentLevel: 2},
      {title: "Prefer / Rather", currentLevel: 3},
      {title: "Used to", currentLevel: 2},
      {title: "Reported Speech", currentLevel: 1},
      {title: "Contrast Clauses", currentLevel: 1},
      {title: "Time Clauses", currentLevel: 1},
      {title: "Purpose Clauses", currentLevel: 1},
      {title: "Reason Clauses", currentLevel: 1},
      {title: "Defining / Non-def", currentLevel: 2},
      {title: "Impersonal Passive", currentLevel: 2},
      {title: "Participles", currentLevel: 1},
      {title: "Inversion", currentLevel: 1},
    ],
  },
  {
    _id: "3",
    name: "Mary",
    surname: "Hans",
    password: "mssdf4f4fdfd4343",
    email: "mhnas@domain.com",
    reservedLessons: [{_id: "7"}, {_id: "3"}],
    progress: [
      {title: "Tenses", currentLevel: 2},
      {title: "Articles", currentLevel: 1},
      {title: "Questions", currentLevel: 1},
      {title: "Adj ING vs ED", currentLevel: 1},
      {title: "Adj GET vs BE", currentLevel: 1},
      {title: "Passive voice", currentLevel: 1},
      {title: "Infinitive", currentLevel: 1},
      {title: "Modal verbs", currentLevel: 1},
      {title: "Modal verbs (PAST)", currentLevel: 1},
      {title: "Prefer / Rather", currentLevel: 1},
      {title: "Used to", currentLevel: 0},
      {title: "Reported Speech", currentLevel: 0},
      {title: "Contrast Clauses", currentLevel: 0},
      {title: "Time Clauses", currentLevel: 0},
      {title: "Purpose Clauses", currentLevel: 0},
      {title: "Reason Clauses", currentLevel: 0},
      {title: "Defining / Non-def", currentLevel: 0},
      {title: "Impersonal Passive", currentLevel: 0},
      {title: "Participles", currentLevel: 0},
      {title: "Inversion", currentLevel: 0},
    ],
  },
];

function getUsers() {
  return users;
}

export default getUsers;
