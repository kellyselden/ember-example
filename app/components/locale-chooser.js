import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['dropdown'],

  locales: computed(function() {
    return this.get('i18n.locales').map(locale => {
      return { value: locale, key: `locales.${locale}` };
    });
  }),

  actions: {
    action(locale) {
      this.sendAction('action', locale);
    }
  }
});
