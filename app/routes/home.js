import Ember from 'ember';
import LocaleRouteMixin from 'ember-i18n-route/mixins/locale-route';

const { run: { scheduleOnce } } = Ember;

export default Ember.Route.extend(LocaleRouteMixin, {
  actions: {
    changeMenu(routeName) {
      this.controller.set('menuRoute', routeName);
    },
    changeLocale() {
      this._super(...arguments);

      scheduleOnce('afterRender', () => {
        this.send('changeMenu', this.controllerFor('application').get('currentRouteName'));
      });
    }
  }
});
