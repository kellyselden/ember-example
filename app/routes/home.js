import Ember from 'ember';
import LocaleRouteMixin from 'ember-i18n-route/mixins/locale-route';

export default Ember.Route.extend(LocaleRouteMixin, {
  actions: {
    changeMenu(routeName) {
      this.controller.set('menuRoute', routeName);
    },
    changeLocale() {
      this._super(...arguments);

      Ember.run.scheduleOnce('afterRender', () => {
        this.send('changeMenu', this.controllerFor("application").get("currentRouteName"));
      });
    }
  }
});
