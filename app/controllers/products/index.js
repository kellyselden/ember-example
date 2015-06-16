import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search'],
  search: '',
  page: 0,

  resetPage: function() {
    this.set('page', 0);
  }.observes('search'),

  actions: {
    loadMore() {
      this.store.find('product', {
        search: this.get('search'),
        page: this.incrementProperty('page')
      }).then(products => {
        this.model.pushObjects(products.content);
      });
    }
  }
});
