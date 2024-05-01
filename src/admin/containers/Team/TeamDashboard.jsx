import React, { useState } from 'react';
import Button from '@mui/material/Button';

import Container from '../../components/Container';
import Form from './Form';
import TeamList from './TeamList';

const TeamDashboard = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const toggleOpenCreateModal = () => setOpenCreateModal(!openCreateModal);

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Team</h2>
        <Button onClick={toggleOpenCreateModal} variant="contained">
          Create
        </Button>
      </div>
      <TeamList />
      <Form onClose={toggleOpenCreateModal} open={openCreateModal} />
    </Container>
  );
};

export default TeamDashboard;
