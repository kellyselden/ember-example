import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-inverse', 'navbar-fixed-top'],
  attributeBindings: ['role'],
  role: 'navigation',

  menuRouteChanged: function() {
    var menuRoute = this.get('menuRoute');
    if (!menuRoute) {
      return;
    }
    var i = menuRoute.indexOf('.');
    if (i > 0) {
      menuRoute = menuRoute.substr(0, i);
    }
    this.set('homeClass', '');
    this.set('usersClass', '');
    this.set('productsClass', '');
    switch (menuRoute) {
      case 'home':
        this.set('homeClass', 'active');
        break;
      case 'users':
        this.set('usersClass', 'active');
        break;
      case 'products':
        this.set('productsClass', 'active');
        break;
    }
  }.observes('menuRoute').on('init'),

  actions: {
    changeLocale: function(locale) {
      this.sendAction('action', locale);
    }
  }
});
