import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.less';

const App = () => (
  <Fragment>
    <span> Hello! </span>
  </Fragment>
);

ReactDOM.render(
  <App className={styles} />,
  document.getElementById('root'),
);
