import Oauth2 from './application';

export default Oauth2.extend({
  provider: 'facebook',
  authCodeProperty: 'authorizationCode',
  getPromise() {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }
});
