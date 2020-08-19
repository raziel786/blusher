import { connect } from 'react-redux';
import Login from './Login';

const mapDispatch = (dispatch) => ({
  login: (details) => dispatch.authentication.login({ details }),
});

export default connect(null, mapDispatch)(Login);
