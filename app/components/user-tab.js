import Ember from 'ember';
import conditional from 'ember-cpm/macros/conditional';

const {
  computed: { bool, not },
  inject: { service },
  run
} = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['dropdown'],
  dropdown: bool('session.isAuthenticated'),
  attributeBindings: ['data-toggle', 'data-target'],
  'data-toggle': conditional(not('session.isAuthenticated'), conditional('data-target', 'collapse')),

  session: service(),

  actions: {
    action() {
      // give bootstrap a moment to close its dropdown
      setTimeout(() => run(() => this.sendAction()));
    }
  }
});
