import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function(provider) {
      this.get('session').open(provider).then(function(authorization) {
        console.log('success');
        console.log(arguments);
      }, function() {
        console.log('fail');
        console.log(arguments);
      });
    }
  }
});
