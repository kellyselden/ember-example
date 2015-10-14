import Oauth2 from './application';

export default Oauth2.extend({
  provider: 'facebook',
  authCodeProperty: 'accessToken'
});
