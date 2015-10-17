import Ember from 'ember';

const {
  RSVP: { resolve, reject }
} = Ember;

// TODO use wrapper for localStorage
export default Ember.Object.extend({
  open(authentication) {
    var provider = this.get('provider');
    var code = authentication[this.get('authCodeProperty')];
    return wrapPromise(this.authorizeUser(code).then(user => {
      localStorage.auth = JSON.stringify({
        provider,
        code,
        userId: user.get(`${provider}Id`)
      });
      return user;
    }));
  },
  fetch() {
    var { provider, code, userId } = JSON.parse(localStorage.auth);
    if (!code) {
      return reject();
    }
    var query = {};
    query[`${provider}Id`] = userId;
    return wrapPromise(this.store.queryRecord('user', query).then(user => {
      if (!user) {
        return reject();
      }
      return user;
    }));
  },
  close() {
    delete localStorage.auth;
    return resolve();
  }
});

function wrapPromise(promise) {
  return promise.then(user => {
    return {
      currentUser: user
    };
  }).catch(function() {
    console.log(arguments);
  });
}
