import Ember from 'ember';

const { on, observer } = Ember;

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-inverse', 'navbar-fixed-top'],
  attributeBindings: ['role'],
  role: 'navigation',

  menuRouteChanged: on('init', observer('menuRoute', function() {
    let menuRoute = this.get('menuRoute');
    if (!menuRoute) {
      return;
    }
    let i = menuRoute.indexOf('.');
    if (i > 0) {
      menuRoute = menuRoute.substr(0, i);
    }
    this.set('homeClass', '');
    this.set('usersClass', '');
    this.set('productsClass', '');
    this.set('userClass', '');
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
      case 'sign-in':
        this.set('userClass', 'active');
        break;
    }
  })),

  actions: {
    changeLocale(locale) {
      this.sendAction('changeLocale', locale);
    },
    signOut() {
      this.sendAction('signOut');
    }
  }
});
