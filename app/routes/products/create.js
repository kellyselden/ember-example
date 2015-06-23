import CreateRoute from '../../routes/create';

export default CreateRoute.extend({
  model() {
    return this._super('product');
  },
  controllerName: 'products/product',
  templateName: 'products/product'
});
