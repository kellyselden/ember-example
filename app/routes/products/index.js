import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    return this.infinityModel('product', Ember.$.extend({ perPage: 10 }, params));
  }
});
