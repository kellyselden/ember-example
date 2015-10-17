import Ember from 'ember';
import Oauth2 from './application';

const {
  RSVP: { Promise }
} = Ember;

export default Oauth2.extend({
  provider: 'facebook',
  authCodeProperty: 'accessToken',
  authorizeUser() {
    return new Promise((resolve, reject) => {
      FB.api('/me', { fields: 'name,first_name,last_name,email' }, response => {
        if (response.error) {
          return reject(response.error);
        }
        this.store.find('user', {
          facebookId: response.id
        }).then(users => {
          let data = {
            name: response.name,
            firstName: response.first_name,
            lastName: response.last_name,
            email: response.email
          };
          let user = users.toArray()[0];
          if (user) {
            user.setProperties(data);
          } else {
            user = this.store.createRecord('user', data);
          }
          return user.save();
        }).then(resolve).catch(reject);
      });
    });
  }
});
