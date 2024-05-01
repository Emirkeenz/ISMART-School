import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import Modal from '../../components/Modal';
import { teamFields } from '../../constant';
import { notifySuccess } from '../../components/NotificationToasts';

const Form = ({ open, onClose }) => {
  const handleCreate = () => {
    notifySuccess('Successfully created!');
    onClose();
  };

  return (
    <Modal title="Create new team" open={open} onClose={onClose} isClosed>
      <form onSubmit={handleCreate} className="flex flex-col gap-2 p-3">
        {teamFields.map(({ name, label }) => (
          <TextField key={name} label={label} name={name} variant="outlined" />
        ))}
        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default Form;
