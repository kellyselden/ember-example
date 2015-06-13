export function initialize(registry, application) {
  application.inject('controller', 'io', 'io:main');
}

export default {
  name: 'socket-io',
  initialize: initialize
};
