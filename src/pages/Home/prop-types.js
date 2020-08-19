import PropTypes from 'prop-types';

export default {
  accessToken: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
};
