import React from 'react';

import XTable from '../../components/Table';
import { teamTableBody, teamTableHead } from '../../constant';

const TeamList = () => {
  return (
    <div className="mt-4">
      <XTable headData={teamTableHead} bodyData={teamTableBody} />
    </div>
  );
};

export default TeamList;
