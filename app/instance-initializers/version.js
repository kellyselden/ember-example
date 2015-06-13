import ENV from '../config/environment';

var moment = window.moment;

var secondsBetweenConfirms = 10;

export function initialize(instance) {
  var socket = instance.container.lookup('io:main');

  // prevent messages from stacking up
  var lastRunTime = moment();

  socket.on('version', function(msg) {
    var isNewVersion = msg !== ENV.APP.version;
    if (isNewVersion) {
      var secondsSinceLastRunTime = moment().subtract(lastRunTime).seconds();
      var hasEnoughTimePassed = secondsSinceLastRunTime > secondsBetweenConfirms;
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
