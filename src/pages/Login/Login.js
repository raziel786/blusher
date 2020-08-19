import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginError from './components/LoginError';
import styles from './styles';
import propTypes from './prop-types';
import logo from '../../images/logo.png';


const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img src={logo} alt="logo" width="300" height="90"/>
        </div>
        <TextField
          style={styles.field}
          defaultValue={email}
          label="E-Mail"
          onChange={(mail) => setEmail(mail.target.value)}
        />
        <TextField
          style={styles.field}
          defaultValue={password}
          label="Password"
          type="password"
          onChange={(pass) => setPassword(pass.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={() => login({ email, password })}
        >
          Login
        </Button>
        <LoginError />
      </div>
    </div>
  );
};

Login.propTypes = propTypes;

export default Login;
