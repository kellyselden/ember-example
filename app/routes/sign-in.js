import Ember from 'ember';
import NavRouteMixin from '../mixins/nav-route';

export default Ember.Route.extend(NavRouteMixin, {
  actions: {
    authenticate(provider) {
      this.controller.set('error', null);
      this.get('session').open(provider).then(() => {
        this.transitionTo('home');
      }, status => {
        this.controller.set('error', status);
      });
    }
  }
});
