export function initialize(registry, application) {
  application.inject('view', 't', 'utils:t');
}

export default {
  name: 't-view',
  after: 't',
  initialize: initialize
};
