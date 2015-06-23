import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['dropdown'],

  locales: function() {
    return this.get('i18n.locales').map(function(locale) {
      return { value: locale, key: `locales.${locale}` };
    });
  }.property(),

  actions: {
    changeLocale: function(locale) {
      this.sendAction('action', locale);
    }
  }
});
