import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  adminRouter(this);
  // this.resource('auth', { path: 'api/v1/auth/:provider/callback' });
  this.resource('home', { path: ':locale' }, function() {
    this.resource('login');
    this.resource('users', function() {
      this.resource('users.user', { path: ':user_id' });
    });
    this.resource('products', function() {
      this.route('create');
      this.resource('products.product', { path: ':product_id' });
    });
    this.resource('catchall', { path: '/*wildcard' });
  });
});

export default Router;
