import Ember from 'ember';
import getLocales from 'ember-cli-i18n-locales/utils/get-locales';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['dropdown'],

  locales: getLocales().map(function(locale) {
    return { value: locale, key: 'locales.%@'.fmt(locale) };
  }),

  actions: {
    changeLocale: function(locale) {
      this.sendAction('action', locale);
    }
  }
});
