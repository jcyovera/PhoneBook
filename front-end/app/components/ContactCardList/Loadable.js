/**
 *
 * Asynchronously loads the component for ContactCardList
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
