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
  { id: 'id', title: '№' },
  { id: 'team', title: 'Команда' },
  { id: 'school', title: 'Школа' },
  { id: 'active', title: 'Присутствует' },
  { id: 'first_score', title: 'Попытка 1' },
  { id: 'first_score', title: 'Попытка 2' },
  { id: 'first_score', title: 'Попытка 3' },
  { id: 'total', title: 'Итог' }
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

export const categoriesList = [
  {
    id: 1,
    photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
    name: 'Team Phoenix'
  },
  {
    id: 2,
    photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
    name: 'Artistic Innovators'
  },
  {
    id: 3,
    photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
    name: 'Math Masters'
  }
];
