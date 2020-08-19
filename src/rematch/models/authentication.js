const validEmail="mub33n@hotmail.co.uk";
const validPass="letmein";
const name="Mubean Hussain"
const dummyToken="12345"

export default {
  state: {
    error: false,
    accessToken: '',
  },

  reducers: {
    loginError: (state) => ({ ...state, accessToken: '', error: true }),
    loginSuccess: (state, accessToken) => ({ ...state, accessToken, error: false }),
  },

  effects: (dispatch) => ({
    login: (payload) => {
      const { details: { email, password } } = payload;
      if(email === validEmail && password === validPass) {
        dispatch.authentication.loginSuccess(dummyToken);
        dispatch.user.setUser(name, validEmail)
        dispatch.history.push("/home")
      }
      else {
        dispatch.authentication.loginError();
      }
    },
  }),
};
