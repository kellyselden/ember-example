import Ember from 'ember';
import NavRouteMixin from '../../../mixins/nav-route';
import { module, test } from 'qunit';

module('Unit | Mixin | nav route');

// Replace this with your real tests.
test('it works', function(assert) {
  var NavRouteObject = Ember.Object.extend(NavRouteMixin);
  var subject = NavRouteObject.create();
  assert.ok(subject);
});
