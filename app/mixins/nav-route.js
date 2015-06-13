import Ember from 'ember';

export default Ember.Mixin.create({
  activate: function() {
    this.send('changeMenu', this.routeName);
  }
});
