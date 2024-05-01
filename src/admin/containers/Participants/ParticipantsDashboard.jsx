import React, { useState } from 'react';
import Button from '@mui/material/Button';

import Container from '../../components/Container';
import ParticipantsList from './ParticipantsList';
import Form from './Form';

const ParticipantsDashboard = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const toggleOpenCreateModal = () => setOpenCreateModal(!openCreateModal);

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Participants</h2>
        <Button onClick={toggleOpenCreateModal} variant="contained">
          Create
        </Button>
      </div>
      <ParticipantsList />
      <Form onClose={toggleOpenCreateModal} open={openCreateModal} />
    </Container>
  );
};

export default ParticipantsDashboard;
