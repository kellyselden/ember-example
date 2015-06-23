import Ember from 'ember';

export default Ember.Mixin.create({
  activate() {
    this.send('changeMenu', this.routeName);
  }
});
