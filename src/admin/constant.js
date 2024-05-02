import { FaUser } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { BiSolidCategory } from 'react-icons/bi';

export const sidebarData = [
  {
    icon: <FaUser fontSize={20} color="white" />,
    title: 'Participants',
    route: '/admin/participants'
  },
  { icon: <RiTeamFill fontSize={24} color="white" />, title: 'Teams', route: '/admin/team' },
  {
    icon: <BiSolidCategory fontSize={24} color="white" />,
    title: 'Categories',
    route: '/admin/categories'
  }
];

export const participantsFields = [
  { name: 'first_name', label: 'First name' },
  { name: 'last_name', label: 'Last name' },
  { name: 'phone_number', label: 'Phone number' }
];

export const teamFields = [
  { name: 'name', label: 'Name' },
  { name: 'subcategory', label: 'Subcategory' },
  { name: 'participants', label: 'Participants' },
  { name: 'school', label: 'School' }
];

export const participantsTableHead = [
  { id: 'first_name', title: 'First Name' },
  { id: 'last_name', title: 'Last Name' },
  { id: 'phone_number', title: 'Phone number' }
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

export const teamTableBody = [
  {
    id: 1,
    name: 'Team Phoenix',
    participants: ['Alice, ', 'Bob'],
    school: 'Oakridge High School',
    subcategory: 'LEGO EV3'
  },
  {
    id: 2,
    name: 'Artistic Innovators',
    participants: ['Emma, ', 'David, ', 'Sophia '],
    school: 'Greenwood Academy',
    subcategory: 'DRONE'
  },
  {
    id: 3,
    name: 'Math Masters',
    participants: ['James, ', 'Emily, ', 'Olivia '],
    school: 'Maplewood Middle School',
    subcategory: 'Миникубок Голдберга'
  }
];
