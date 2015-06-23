/* jshint node: true */
var fs = require('fs');

var host = fs.readFileSync('./host', 'utf8');
var github = fs.readFileSync('./github', 'utf8').split('\n')[0];
var facebook = fs.readFileSync('./facebook', 'utf8').split('\n')[0];
var version = fs.readFileSync('./version', 'utf8').split('\n');

module.exports = function(environment) {
  //the environment hack in Brocfile.js isn't persisted throughout the entire app lifecycle
  environment = process.env.EMBER_ENV;

  var api = 'api/v1';

  var contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self'",
    'connect-src': "'self'",
    'img-src': "'self'",
    'style-src': "'self'",
    'media-src': "'self'"
  };
  contentSecurityPolicy['script-src'] += ' https://maxcdn.bootstrapcdn.com https://cdn.socket.io';
  contentSecurityPolicy['style-src'] += ' https://maxcdn.bootstrapcdn.com';
  contentSecurityPolicy['font-src'] += ' https://maxcdn.bootstrapcdn.com';
  contentSecurityPolicy['connect-src'] +=
    ' ' + host.replace('http://', 'ws://')
    ' https://github.com' +
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
      api: api,
      branch: version[0],
      version: version[1],
      timestamp: version[2]
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: github,
          redirectUri: host + '/' + api + '/auth/github/callback'
        },
        'facebook-oauth2': {
          apiKey: facebook,
          redirectUri: host + '/' + api + '/auth/facebook/callback'
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
