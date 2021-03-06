//
// HomeRoute
// Home is where we make a Gistbook
//

import * as Radio from 'radio';
import Route from '../../vendor/routing/route';
import Gist from '../../shared/entities/gist';
import GistView from '../../shared/views/gist-view';

export default Route.extend({
  show: function() {
    var gistView = new GistView({
      model: new Gist(),
      newGist: true
    });
    Radio.command('rootView', 'showIn:container', gistView);
  }
});
