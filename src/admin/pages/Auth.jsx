import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataFromLocal = JSON.parse(localStorage.getItem('data'));

  const authSchema = z.object({
    email: z.string().email(),
    password: z.string()
  });

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(authSchema)
  });

  const handleCreate = async (data) => {
    console.log(data);
    await dispatch(login(data));
    console.log({ dataFromLocal });
    if (dataFromLocal.role == 'Админ') navigate('/admin/categories');
    else navigate('/admin/game-time');
  };

  return (
    <div className="flex items-center flex-col gap-6 justify-center h-screen w-screen bg-gray-800">
      <h2 className="text-3xl text-amber-50">Authorization</h2>
      <form
        onSubmit={handleSubmit(handleCreate)}
        className="border rounded-2xl p-8 flex flex-col gap-4 w-[400px] bg-gray-600">
        <Controller
          control={control}
          name="email"
          render={({ field, formState }) => (
            <div>
              <TextField
                className="w-full rounded-lg bg-white"
                {...field}
                key="email"
                label="Email"
                variant="outlined"
              />
              {formState.errors.email?.message && (
                <p className="text-red-400">{formState.errors.email?.message}</p>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, formState }) => (
            <div>
              <TextField
                className="w-full rounded-lg bg-white"
                key="password"
                {...field}
                label="Password"
                variant="outlined"
              />
              {formState.errors.password?.message && (
                <p className="text-red-400">{formState.errors.password?.message}</p>
              )}
            </div>
          )}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Auth;
