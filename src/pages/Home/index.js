import { connect } from 'react-redux';
import Home from './Home';

const mapState = (state) => ({
  name: state.user.name,
  email: state.user.email 
});

export default connect(mapState, null)(Home);
