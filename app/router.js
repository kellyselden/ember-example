import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  adminRouter(this);
  // this.resource('auth', { path: 'api/v1/auth/:provider/callback' });
  this.route('home', { path: ':locale' }, function() {
    this.route('sign-in', { resetNamespace: true });
    this.authenticatedRoute('users', { resetNamespace: true }, function() {
      this.route('user', { path: ':user_id' });
    });
    this.route('products', { resetNamespace: true }, function() {
      this.route('create');
      this.route('product', { path: ':product_id' });
    });
    this.route('catchall', { path: '/*wildcard', resetNamespace: true });
  });
});

export default Router;
