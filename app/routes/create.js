import Ember from 'ember';
import DirtyConfirmRouteMixin from 'ember-cli-dirty-confirm/mixins/dirty-confirm-route';

export default Ember.Route.extend(DirtyConfirmRouteMixin, {
  model: function(type, hash) {
    return Ember.RSVP.hash(hash || {}).then(function(hash) {
      return this.store.createRecord(type, hash);
    }.bind(this));
  }
});
