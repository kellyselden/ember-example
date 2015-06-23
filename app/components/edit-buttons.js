import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancel() {
      this.get('targetObject').send('cancel');
    },
    save() {
      this.get('targetObject').send('save');
    },
    remove() {
      this.get('targetObject').send('remove');
    }
  }
});
