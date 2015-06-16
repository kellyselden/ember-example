import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search'],
  search: '',

  productsSorting: ['name'],
  products: Ember.computed.sort('model', 'productsSorting')
});
