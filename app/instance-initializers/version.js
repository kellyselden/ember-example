import ENV from '../config/environment';

const { moment } = window;
const { version } = ENV.APP;

const secondsBetweenConfirms = 10;

export function initialize(instance) {
  let socket = instance.container.lookup('io:main');

  // prevent messages from stacking up
  let lastRunTime = moment();

  socket.on('version', msg => {
    let isNewVersion = msg !== version;
    if (isNewVersion) {
      let secondsSinceLastRunTime = moment().subtract(lastRunTime).seconds();
      let hasEnoughTimePassed = secondsSinceLastRunTime > secondsBetweenConfirms;
      if (hasEnoughTimePassed) {
        if (confirm('App updated. Reload?')) {
          window.location.reload();
        }
        lastRunTime = moment();
      }
    }
  });
}

export default {
  name: 'version',
  after: 'socket-io',
  initialize: initialize
};
