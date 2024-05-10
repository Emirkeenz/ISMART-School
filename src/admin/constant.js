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
export const categoriesList = [
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
    score_team1: 1,
    score_team2: 1
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
    score_team2: 2
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
    score_team1: 3,
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
    score_team1: 4,
    score_team2: 4
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
    score_team1: 5,
    score_team2: 5
  }
];

export const subcategoriesForGameByTime = [
  'Line Follower',
  'Кегель ринг',
  'Соревнования дронов',
  'Дрон-рейсинг',
  'Гонки',
  'Сборка "Майло"',
  'Вездеход-полоса препятствий'
];
