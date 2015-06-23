import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    alert('model redirect');
    Ember.$.ajax({
      url: `${ENV.APP.api}/auth/${params.provider}/callback${window.location.search}`
    });
    // this.transitionTo(`${ENV.APP.api}/auth/${params.provider}/callback${window.location.search}`);
  }
});
