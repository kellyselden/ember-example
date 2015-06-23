import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate(provider) {
      this.get('session').open(provider).then(authorization => {
        console.log('success');
        console.log(arguments);
      }, () => {
        console.log('fail');
        console.log(arguments);
      });
    }
  }
});
