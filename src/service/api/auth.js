import { client } from '../axios';

class Auth {
  login(data) {
    return client.post(`accounts/login/`, data);
  }
}

export default Auth;
