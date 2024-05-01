import React from 'react';
import { Link } from 'react-router-dom';

import { sidebarData } from '../constant';

const Sidebar = () => {
  return (
    <div className="h-full w-60 bg-blue-600 flex flex-col gap-12 items-center">
      <img
        className="pt-6"
        src="https://assets-global.website-files.com/620252cf99d07328f02a4be9/620252cf99d073918b2a4c72_logo.svg"
        alt="/"
      />
      <ul className="">
        {sidebarData.map(({ icon, title, route }) => (
          <Link key={title} to={route}>
            <li className="p-2 flex items-center gap-2">
              <div>{icon}</div>
              <p className="text-lg">{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
