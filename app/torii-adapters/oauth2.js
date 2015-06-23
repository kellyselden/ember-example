import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
  open(authorization) {
    var provider = this.get('provider');
    var data = { };
    data[`${provider}-auth-code`] = authorization.authorizationCode;
    return new Ember.RSVP.Promise((resolve, reject) => {
      console.log('client post /');
      Ember.$.ajax({
        url: `${ENV.APP.api}/auth/${provider}`,
        type: 'POST',
        data: data,
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      }).then(user => {
        // The returned object is merged onto the session (basically). Here
        // you may also want to persist the new session with cookies or via
        // localStorage.
        return {
          currentUser: user
        };
      });
    });
  },
  fetch() {
    console.log('fetch');
    this._super(...arguments);
  },
  close() {
    console.log('close');
    this._super(...arguments);
  }
});
