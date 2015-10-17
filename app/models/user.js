import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  facebookId: DS.attr(),
  githubId: DS.attr()
});
