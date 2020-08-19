export default {
  state: {
    name: '',
    email: '',
  },

  reducers: {
    setUser: (state, name, email) => ({ ...state, name, email }),
  },
};
