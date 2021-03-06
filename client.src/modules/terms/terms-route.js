//
// TermsRoute
//

import * as Radio from 'radio';
import Route from '../../vendor/routing/route';
import TermsView from './views/terms-view';

export default Route.extend({
  show: function() {
    Radio.command('rootView', 'showIn:container', new TermsView());
  }
});
