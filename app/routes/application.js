import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signOut() {
      this.get('session').close();
    },
    accessDenied() {
      this.transitionTo('sign-in');
    }
  }
});
