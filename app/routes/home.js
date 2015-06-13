import Ember from 'ember';
import LocaleRouteMixin from 'ember-cli-i18n-route/mixins/locale-route';

export default Ember.Route.extend(LocaleRouteMixin, {
  actions: {
    changeMenu: function(routeName) {
      this.controller.set('menuRoute', routeName);
    },
    changeLocale: function() {
      this._super.apply(this, arguments);

      Ember.run.scheduleOnce('afterRender', function() {
        this.send('changeMenu', this.controllerFor("application").get("currentRouteName"));
      }.bind(this));
    }
  }
});
