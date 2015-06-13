import EditController from '../controllers/edit';

var types = ['first', 'second'];

export default EditController.extend({
  returnRoute: 'products',

  types: function() {
    return types.map(function(type) {
      return { value: type };
    });
  }.property()
});
