/**
 *
 * Asynchronously loads the component for PhoneBook
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
