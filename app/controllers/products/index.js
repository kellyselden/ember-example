import Ember from 'ember';

export default Ember.Controller.extend({
  productsSorting: ['name'],
  products: Ember.computed.sort('model', 'productsSorting')
});
