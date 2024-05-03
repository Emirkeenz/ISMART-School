import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const client = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
