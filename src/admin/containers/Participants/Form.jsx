import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import Modal from '../../components/Modal';
import { participantsFields } from '../../constant';
import { toast } from 'react-toastify';

const Form = ({ open, onClose }) => {
  const handleCreate = () => {
    toast('Wow so easy!');
    onClose();
  };

  return (
    <Modal title="Create new participant" open={open} onClose={onClose} isClosed>
      <form onSubmit={handleCreate} className="flex flex-col gap-2 p-3">
        {participantsFields.map(({ name, label }) => (
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
