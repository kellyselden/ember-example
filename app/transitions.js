export default function() {
  this.transition(
    this.fromRoute('products.index'),
    this.toRoute('products.product'),
    this.use('explode', {
      matchBy: 'product-id',
      use: 'flyTo'
    }, {
      use: 'toLeft'
    }),
    this.reverse('explode', {
      matchBy: 'product-id',
      use: 'flyTo'
    }, {
      use: 'toRight'
    })
  );
  this.transition(
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
