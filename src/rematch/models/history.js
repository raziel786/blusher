import history from '../../browser/history';

export default {
  state: null,
  effects: {
    replace: url => history.replace(url),
    push: url => history.push(url),
  },
};
