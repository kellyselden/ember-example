/* jshint node: true */
var fs = require('fs');

var host = fs.readFileSync('./host', 'utf8');
var github = fs.readFileSync('./github', 'utf8').split('\n')[0].trim();
var facebook = fs.readFileSync('./facebook', 'utf8').split('\n')[0].trim();
var version = fs.readFileSync('./version', 'utf8').split('\n');

module.exports = function(environment) {
  //the environment hack in Brocfile.js isn't persisted throughout the entire app lifecycle
  environment = process.env.EMBER_ENV;

  var namespace = 'api/v1';

  var contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self'",
    'connect-src': "'self'",
    'img-src': "'self'",
    'style-src': "'self'",
    'media-src': "'self'"
  };
  contentSecurityPolicy['default-src'] = 'https://www.facebook.com http://static.ak.facebook.com https://s-static.ak.facebook.com';
  contentSecurityPolicy['script-src'] += ' https://maxcdn.bootstrapcdn.com https://cdn.socket.io https://code.jquery.com https://cdnjs.cloudflare.com http://connect.facebook.net https://connect.facebook.net https://graph.facebook.com';
  contentSecurityPolicy['style-src'] += ' https://maxcdn.bootstrapcdn.com';
  contentSecurityPolicy['img-src'] += ' https://www.facebook.com';
  contentSecurityPolicy['font-src'] += ' https://maxcdn.bootstrapcdn.com';
  contentSecurityPolicy['connect-src'] +=
    ' ' + host.replace('http://', 'ws://') +
    ' https://api.github.com' +
    ' https://www.facebook.com';

  var ENV = {
    modulePrefix: 'ember-example',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: contentSecurityPolicy,
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      host: host,
      namespace: namespace,
      branch: version[0],
      version: version[1],
      timestamp: version[2]
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: github,
          redirectUri: 'http://localhost:4200',
          scope: 'user'
        },
        'facebook-connect': {
          appId: facebook
        }
      }
    },
    i18n: {
      defaultLocale: 'en-us'
    }
  };

  switch (process.env.CLIENT_ENV) {
    case 'ember':
      break;
    case 'express':
      break;
    case 'heroku':
      break;
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    contentSecurityPolicy['style-src'] += " 'unsafe-inline'";
    if (contentSecurityPolicy['connect-src'].indexOf('ws://localhost:4200') === -1) {
      contentSecurityPolicy['connect-src'] += ' ws://localhost:4200';
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
