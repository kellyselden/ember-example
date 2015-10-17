import Ember from 'ember';
import ENV from '../config/environment';
import Oauth2 from './application';

const {
  RSVP: { Promise },
  $: { ajax },
  run
} = Ember;
const { APP: { api } } = ENV;

export default Oauth2.extend({
  provider: 'github',
  authCodeProperty: 'authorizationCode',
  authorizeUser(code) {
    return new Promise((resolve, reject) => {
      ajax({
        url: `${api}/auth/github/test?code=${code}`,
        success: response => {
          response.id = response._id;
          delete response._id;
          this.store.push('user', response);
          this.store.find('user', response.id).then(resolve).catch(reject);
        },
        error: run.bind(null, reject)
      });
    });
  }
});
