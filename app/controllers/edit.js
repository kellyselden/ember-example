import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute(this.get('returnRoute'));
    },
    save: function() {
      this.model.save().then(function(model) {
        this.get('io').emit('save', {
          type: model.get('constructor.typeKey'),
          id: model.id
        });
      }.bind(this));
      this.send('cancel');
    },
    remove: function() {
      this.model.destroyRecord().then(function(model) {
        this.send('cancel');
        this.get('io').emit('remove', {
          type: model.get('constructor.typeKey'),
          id: model.id
        });
      }.bind(this));
    }
  }
});
