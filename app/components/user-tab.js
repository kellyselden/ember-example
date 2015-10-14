import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['dropdown'],
  dropdown() {
    return this.get('session.isAuthenticated');
  },

  session: Ember.inject.service(),

  actions: {
    action() {
      this.sendAction();
    }
  }
});
