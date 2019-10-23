import api from 'api';

class UserService {
  static login() {
    /**
     * TODO
     * I mocked the login res because auth is not implemented yet on openform api
     * It should be replaced later with the proper endpoint
     */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: { user: { name: 'john', email: 'john@doe' } } });
      }, 300);
    });
  }

  static logout() {
    return api.delete('/users/sign_out');
  }

  static signUp(user) {
    return api.post('/users', user);
  }
}

export default UserService;
