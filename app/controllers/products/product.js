import EditController from '../../controllers/edit';

const { computed } = Ember;

var types = ['first', 'second'];

export default EditController.extend({
  returnRoute: 'products',

  types: computed(function() {
    return types.map(type => {
      return { value: type };
    });
  })
});
