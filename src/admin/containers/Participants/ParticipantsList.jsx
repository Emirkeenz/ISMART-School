import React from 'react';

import XTable from '../../components/Table';
import { participantsTableBody, participantsTableHead } from '../../constant';

const ParticipantsList = () => {
  return (
    <div className="mt-4">
      <XTable bodyData={participantsTableBody} headData={participantsTableHead} />
    </div>
  );
};

export default ParticipantsList;
