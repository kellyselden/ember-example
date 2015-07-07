/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

//environment hacking because 'development' and 'production' have special meaning
var devs = ['ember', 'express'];
var prods = ['heroku'];
process.env.CLIENT_ENV = process.env.EMBER_ENV;
if (devs.indexOf(process.env.EMBER_ENV) !== -1)
  process.env.EMBER_ENV = 'development';
if (prods.indexOf(process.env.EMBER_ENV) !== -1)
  process.env.EMBER_ENV = 'production';

var env = EmberApp.env();

function wrapLinkTag(href) {
  return '<link rel="stylesheet" href="' + href + '">';
}
function wrapScriptTag(src) {
  return '<script src="' + src + '"></script>';
}

function content(dev, prod) {
  return env == 'development' ? dev : prod;
}

function cssContent(dev, prod) {
  return { content: wrapLinkTag(content(dev, prod)) };
}
function jsContent(dev, prod) {
  return { content: wrapScriptTag(content(dev, prod)) };
}

var app = new EmberApp({
  inlineContent: {
    'jquery.js': jsContent(
      'https://code.jquery.com/jquery-2.1.4.js',
      'https://code.jquery.com/jquery-2.1.4.min.js'
    ),
    'ember.js': jsContent(
      'https://cdnjs.cloudflare.com/ajax/libs/ember.js/1.12.1/ember.debug.js',
      'https://cdnjs.cloudflare.com/ajax/libs/ember.js/1.12.1/ember.min.js'
    ),
    'ember-data.js': jsContent(
      'https://cdnjs.cloudflare.com/ajax/libs/ember-data.js/1.0.0-beta.19.1/ember-data.js',
      'https://cdnjs.cloudflare.com/ajax/libs/ember-data.js/1.0.0-beta.19.1/ember-data.min.js'
    ),
    'bootstrap.css': cssContent(
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.css',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'
    ),
    'bootstrap.js': jsContent(
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js'
    ),
    'socket.io.js': jsContent(
      'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.2.1/socket.io.js',
      'https://cdn.socket.io/socket.io-1.2.1.js'
    )
  },
  vendorFiles: {
    'jquery.js': false,
    'ember.js': false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
