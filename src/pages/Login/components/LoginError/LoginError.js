import React from 'react';
import propTypes from './prop-types';
import styles from './styles';

const LoginError = ({ error }) => {
  return error ?
  <div style={styles.container}>
     Credentials are not correct.
     Please check and try again.
  </div>
  : null
}

LoginError.propTypes = propTypes;

export default LoginError;
