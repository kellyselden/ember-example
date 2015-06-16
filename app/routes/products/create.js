import CreateRoute from '../../routes/create';

export default CreateRoute.extend({
  model: function() {
    return this._super('product');
  },
  controllerName: 'products/product',
  templateName: 'products/product'
});
