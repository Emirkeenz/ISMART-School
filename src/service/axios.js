const baseURL = process.env.REACT_APP_DEV_URL;

const client = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
