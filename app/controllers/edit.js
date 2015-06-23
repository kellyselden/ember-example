import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel() {
      this.transitionToRoute(this.get('returnRoute'));
    },
    save() {
      this.model.save().then(model => {
        this.get('io').emit('save', {
          type: model.get('constructor.typeKey'),
          id: model.id
        });
      });
      this.send('cancel');
    },
    remove() {
      this.model.destroyRecord().then(model => {
        this.send('cancel');
        this.get('io').emit('remove', {
          type: model.get('constructor.typeKey'),
          id: model.id
        });
      });
    }
  }
});
