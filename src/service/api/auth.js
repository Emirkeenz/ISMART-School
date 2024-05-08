import { client } from '../axios';

class Auth {
  login() {
    return client.post(`accounts/login/`);
  }
}

export default Auth;
