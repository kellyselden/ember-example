import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancel: function() {
      this.get('targetObject').send('cancel');
    },
    save: function() {
      this.get('targetObject').send('save');
    },
    remove: function() {
      this.get('targetObject').send('remove');
    }
  }
});
