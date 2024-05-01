import React from 'react';

import Sidebar from './Sidebar';

const Container = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="p-8 w-full">{children}</div>
    </div>
  );
};

export default Container;
