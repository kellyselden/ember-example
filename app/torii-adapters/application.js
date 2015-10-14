import Ember from 'ember';
import ENV from '../config/environment';

const {
  RSVP: { Promise, resolve, reject },
  $: { ajax },
  run
} = Ember;
const { APP: { api } } = ENV;

// TODO use wrapper for localStorage
export default Ember.Object.extend({
  open(authentication) {
    var provider = this.get('provider');
    var code = authentication[this.get('authCodeProperty')];
    return sync('open', provider, code).then(session => {
      localStorage.provider = provider;
      localStorage.code = code;
      return session;
    });
  },
  fetch() {
    var { provider, code } = localStorage;
    if (!code) {
      return reject();
    }
    return sync('fetch', provider, code);
  },
  close() {
    delete localStorage.provider;
    delete localStorage.code;
    return resolve();
  }
});

function sync(method, provider, code) {
  return new Promise((resolve, reject) => {
    // ajax({
    //   url: `${api}/auth/${provider}`,
    //   type: 'POST',
    //   data: {
    //     method,
    //     provider,
    //     code
    //   },
    //   dataType: 'json',
    //   success: run.bind(null, resolve),
    //   error: run.bind(null, reject)
    // });
    resolve({
      firstName: 'Kelly'
    });
  }).then(user => {
    return {
      currentUser: user
    };
  });
}
