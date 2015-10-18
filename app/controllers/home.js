import Ember from 'ember';
import ENV from '../config/environment';

const { moment } = window;
const { branch, version, timestamp } = ENV.APP;

export default Ember.Controller.extend({
  branch,
  version,
  timestamp: moment(new Date(timestamp)).format('llll')
});
