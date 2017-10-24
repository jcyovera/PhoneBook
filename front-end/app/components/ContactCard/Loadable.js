/**
 *
 * Asynchronously loads the component for ContactCard
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
