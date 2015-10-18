import DS from 'ember-data';
import ENV from '../config/environment';

const { host, namespace } = ENV.APP;

export default DS.RESTAdapter.extend({
  host,
  namespace
});
