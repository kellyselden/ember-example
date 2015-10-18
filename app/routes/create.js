import Ember from 'ember';
import DirtyConfirmRouteMixin from 'ember-cli-dirty-confirm/mixins/dirty-confirm-route';

const { RSVP } = Ember;

export default Ember.Route.extend(DirtyConfirmRouteMixin, {
  model(type, hash) {
    return RSVP.hash(hash || {}).then(hash => {
      return this.store.createRecord(type, hash);
    });
  }
});
