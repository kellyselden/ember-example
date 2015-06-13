export function initialize(registry, application) {
  application.inject('view', 'i18n', 'utils:i18n');
}

export default {
  name: 'i18n-view',
  after: 'i18n',
  initialize: initialize
};
