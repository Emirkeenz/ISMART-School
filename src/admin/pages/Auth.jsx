import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/admin/participants');
  };

  return (
    <div className="flex items-center flex-col gap-6 justify-center h-screen w-screen bg-gray-800">
      <h2 className="text-3xl text-amber-50">Authorization</h2>
      <form
        onSubmit={handleCreate}
        className="border rounded-2xl p-8 flex flex-col gap-4 w-[400px] bg-gray-700">
        <TextField key="email" label="Email" name="email" variant="outlined" />
        <TextField key="password" label="Password" name="password" variant="outlined" />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Auth;
