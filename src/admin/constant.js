export const participantsFields = [
  { name: 'first_name', label: 'First name' },
  { name: 'last_name', label: 'Last name' },
  { name: 'phone_number', label: 'Phone number' }
];

export const mockTeamData = [
  {
    id: 1,
    name: 'Team A',
    subcategory: 'Subcategory A',
    participant: 'Participant A',
    school: 'School A'
  },
  {
    id: 2,
    name: 'Team B',
    subcategory: 'Subcategory B',
    participant: 'Participant B',
    school: 'School B'
  },
  {
    id: 3,
    name: 'Team C',
    subcategory: 'Subcategory C',
    participant: 'Participant C',
    school: 'School C'
  },
  {
    id: 4,
    name: 'Team D',
    subcategory: 'Subcategory D',
    participant: 'Participant D',
    school: 'School D'
  },
  {
    id: 5,
    name: 'Team E',
    subcategory: 'Subcategory E',
    participant: 'Participant E',
    school: 'School E'
  }
];

export const participantsTableHead = [
  '№',
  'Команда',
  'Школа',
  'Присутствует',
  'Попытка 1',
  'Попытка 2',
  'Попытка 3',
  'Итог'
];

export const participantsTableBody = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    phone_number: '1234567890'
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Smith',
    phone_number: '9876543210'
  },
  {
    id: 3,
    first_name: 'Michael',
    last_name: 'Johnson',
    phone_number: '5556667777'
  }
];

export const teamTableHead = [
  { id: 'name', title: 'Name' },
  { id: 'participants', title: 'Participants' },
  { id: 'school', title: 'School' },
  { id: 'subcategory', title: 'Subcategory' }
];

// export const categoriesListHead = [
//   {
//     id: 0,
//     photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
//     name: ''
//   },
//   {
//     id: 1,
//     photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
//     name: 'Team Phoenix'
//   },
//   {
//     id: 2,
//     photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
//     name: 'Artistic Innovators'
//   },
//   {
//     id: 3,
//     photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
//     name: 'Math Masters'
//   },
//   {
//     id: 4,
//     photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
//     name: 'Math Masters'
//   }
// ];

export const categoriesListHead = [
  {
    id: 0,
    photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
    name: ''
  },
  {
    id: 1,
    team1: {
      id: 1,
      name: 'Team Phoenix',
      school: 'sdfs',
      subcategory: {
        coordinator: 0,
        name: 'string',
        description: 'string',
        category: 0
      },
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    team2: {
      id: 1,
      name: 'Artistic Innovators',
      school: 'sdfs',
      subcategory: 0,
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    score_team1: 2,
    score_team2: 3
  },
  {
    id: 2,
    team1: {
      id: 1,
      name: 'Math Masters',
      school: 'sdfs',
      subcategory: {
        coordinator: 0,
        name: 'string',
        description: 'string',
        category: 0
      },
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    team2: {
      id: 1,
      name: 'Physic Masters',
      school: 'sdfs',
      subcategory: 0,
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    score_team1: 2,
    score_team2: 3
  },
  {
    id: 3,
    team1: {
      id: 1,
      name: 'Sport Masters',
      school: 'sdfs',
      subcategory: {
        coordinator: 0,
        name: 'string',
        description: 'string',
        category: 0
      },
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    team2: {
      id: 1,
      name: 'Lab Masters',
      school: 'sdfs',
      subcategory: 0,
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    score_team1: 2,
    score_team2: 3
  },
  {
    id: 4,
    team1: {
      id: 1,
      name: 'Physic Masters',
      school: 'sdfs',
      subcategory: {
        coordinator: 0,
        name: 'string',
        description: 'string',
        category: 0
      },
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    team2: {
      id: 1,
      name: 'dsdf',
      school: 'sdfs',
      subcategory: 0,
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    score_team1: 2,
    score_team2: 3
  },
  {
    id: 5,
    team1: {
      id: 1,
      name: 'Lab Masters',
      school: 'sdfs',
      subcategory: {
        coordinator: 0,
        name: 'string',
        description: 'string',
        category: 0
      },
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    team2: {
      id: 1,
      name: 'dsdf',
      school: 'sdfs',
      subcategory: 0,
      participants: [],
      is_arrived: true,
      is_active: true,
      round_robin_total: 0
    },
    score_team1: 2,
    score_team2: 3
  }
];
// export const categoriesList = [
//   {
//     id: 1,
//     team1: {
//       id: 1,
//       name: 'Team Phoenix',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 25
//     },
//     team2: {
//       id: 1,
//       name: 'Artistic Innovators',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 0
//     },
//     score_team1: 1,
//     score_team2: 1
//   },
//   {
//     id: 2,
//     team1: {
//       id: 1,
//       name: 'Math Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 9
//     },
//     team2: {
//       id: 1,
//       name: 'Physic Masters',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 0
//     },
//     score_team1: 2,
//     score_team2: 5
//   },
//   {
//     id: 3,
//     team1: {
//       id: 1,
//       name: 'Sport Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 17
//     },
//     team2: {
//       id: 1,
//       name: 'Lab Masters',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 89
//     },
//     score_team1: 3,
//     score_team2: 2
//   },
//   {
//     id: 4,
//     team1: {
//       id: 1,
//       name: 'Physic Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 12
//     },
//     team2: {
//       id: 1,
//       name: 'dsdf',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 45
//     },
//     score_team1: 4,
//     score_team2: 8
//   },
//   {
//     id: 5,
//     team1: {
//       id: 1,
//       name: 'Lab Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 67
//     },
//     team2: {
//       id: 1,
//       name: 'dsdf',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 28
//     },
//     score_team1: 6,
//     score_team2: 5
//   },
//   {
//     id: 6,
//     team1: {
//       id: 1,
//       name: 'Dungeon Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 67
//     },
//     team2: {
//       id: 1,
//       name: 'Game Masters',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 28
//     },
//     score_team1: 12,
//     score_team2: 5
//   },
//   {
//     id: 6,
//     team1: {
//       id: 1,
//       name: 'Dungeon Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 67
//     },
//     team2: {
//       id: 1,
//       name: 'Game Masters',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 28
//     },
//     score_team1: 12,
//     score_team2: 5
//   },
//   {
//     id: 6,
//     team1: {
//       id: 1,
//       name: 'Dungeon Masters',
//       school: 'sdfs',
//       subcategory: {
//         coordinator: 0,
//         name: 'string',
//         description: 'string',
//         category: 0
//       },
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 67
//     },
//     team2: {
//       id: 1,
//       name: 'Game Masters',
//       school: 'sdfs',
//       subcategory: 0,
//       participants: [],
//       is_arrived: true,
//       is_active: true,
//       round_robin_total: 28
//     },
//     score_team1: 12,
//     score_team2: 5
//   }
// ];

const MATH_MAGICIANS = {
  id: 28,
  name: 'Math Magicians',
  school: 'ABC School',
  subcategory: {
    coordinator: 0,
    name: 'Mathematics Competition',
    description: 'Test your math skills',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 15
};
const ROBOTIC_RULERS = {
  id: 19,
  name: 'Robotics Rulers',
  school: 'XYZ School',
  subcategory: {
    coordinator: 0,
    name: 'Robotics Challenge',
    description: 'Build and program robots',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 10
};
const DEBATE_DEFENDERS = {
  id: 21,
  name: 'Debate Defenders',
  school: 'LMN School',
  subcategory: {
    coordinator: 0,
    name: 'Debate Competition',
    description: 'Argue your way to victory',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 12
};
const MUSICAL_MAESTROS = {
  id: 23,
  name: 'Musical Maestros',
  school: 'UVW School',
  subcategory: {
    coordinator: 0,
    name: 'Music Competition',
    description: 'Showcase musical talent',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 18
};
const DANCE_DYNAMOS = {
  id: 25,
  name: 'Dance Dynamos',
  school: 'OPQ School',
  subcategory: {
    coordinator: 0,
    name: 'Dance Competition',
    description: 'Show off your dance moves',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 16
};
const GEOGRAPHY_GURUS = {
  id: 27,
  name: 'Geography Gurus',
  school: 'ABC School',
  subcategory: {
    coordinator: 0,
    name: 'Geography Bee',
    description: 'Explore the world',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 9
};
const SCIENCE_STARS = {
  id: 29,
  name: 'Science Stars',
  school: 'XYZ School',
  subcategory: {
    coordinator: 0,
    name: 'Science Fair',
    description: 'Exhibit scientific projects',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 21
};
const HISTORY_HEROES = {
  id: 31,
  name: 'History Heroes',
  school: 'LMN School',
  subcategory: {
    coordinator: 0,
    name: 'History Quiz',
    description: 'Test your knowledge of history',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 14
};
const ART_AVENGERS = {
  id: 33,
  name: 'Art Avengers',
  school: 'OPQ School',
  subcategory: {
    coordinator: 0,
    name: 'Art Contest',
    description: 'Unleash your creativity',
    category: 0
  },
  participants: [],
  is_arrived: true,
  is_active: true,
  round_robin_total: 18
};

export const categoriesList = [
  {
    id: 13,
    team1: MATH_MAGICIANS,
    team2: ROBOTIC_RULERS,
    score_team1: 2,
    score_team2: 3
  },
  {
    id: 14,
    team1: MATH_MAGICIANS,
    team2: DEBATE_DEFENDERS,
    score_team1: 1,
    score_team2: 2
  },
  {
    id: 15,
    team1: MATH_MAGICIANS,
    team2: MUSICAL_MAESTROS,
    score_team1: 3,
    score_team2: 1
  },
  {
    id: 16,
    team1: MATH_MAGICIANS,
    team2: DANCE_DYNAMOS,
    score_team1: 2,
    score_team2: 2
  },
  {
    id: 17,
    team1: MATH_MAGICIANS,
    team2: GEOGRAPHY_GURUS,
    score_team1: 2,
    score_team2: 1
  },
  {
    id: 18,
    team1: MATH_MAGICIANS,
    team2: SCIENCE_STARS,
    score_team1: 4,
    score_team2: 3
  },
  {
    id: 19,
    team1: MATH_MAGICIANS,
    team2: HISTORY_HEROES,
    score_team1: 3,
    score_team2: 2
  },
  {
    id: 20,
    team1: MATH_MAGICIANS,
    team2: ART_AVENGERS,
    score_team1: 3,
    score_team2: 1
  },
  {
    id: 21,
    team1: ROBOTIC_RULERS,
    team2: DEBATE_DEFENDERS,
    score_team1: 3,
    score_team2: 6
  },
  {
    id: 22,
    team1: ROBOTIC_RULERS,
    team2: MUSICAL_MAESTROS,
    score_team1: 7,
    score_team2: 4
  },
  {
    id: 23,
    team1: ROBOTIC_RULERS,
    team2: DANCE_DYNAMOS,
    score_team1: 10,
    score_team2: 5
  },
  {
    id: 24,
    team1: ROBOTIC_RULERS,
    team2: GEOGRAPHY_GURUS,
    score_team1: 4,
    score_team2: 1
  },
  {
    id: 25,
    team1: ROBOTIC_RULERS,
    team2: SCIENCE_STARS,
    score_team1: 3,
    score_team2: 3
  },
  {
    id: 26,
    team1: ROBOTIC_RULERS,
    team2: HISTORY_HEROES,
    score_team1: 7,
    score_team2: 9
  },
  {
    id: 27,
    team1: ROBOTIC_RULERS,
    team2: ART_AVENGERS,
    score_team1: 14,
    score_team2: 3
  }
];

export const getCategoriesNames = (list) => {
  const names = new Set();
  for (let i = 0; i < list.length; i++) {
    names.add(list[i].team1.name);
    names.add(list[i].team2.name);
  }

  return [...names];
};

export const subcategoriesForGameByTime = [
  'Line Follower',
  'Кегель ринг',
  'Соревнования дронов',
  'Дрон-рейсинг',
  'Гонка',
  'Сборка "Майло"',
  'Вездеход-полоса препятствий'
];
