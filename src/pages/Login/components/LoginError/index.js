import { connect } from 'react-redux';
import LoginError from './LoginError';

const mapState = (state) => ({ error: state.authentication.error });

export default connect(mapState, null)(LoginError);
