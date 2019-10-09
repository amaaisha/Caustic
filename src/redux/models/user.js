import { toast } from 'react-toastify';
import { push, goBack } from 'connected-react-router';
import userApi from '../../api/userApi';

const userState = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  avatar: null,
};

const handleAuth = async (dispatch, payload, type, message, successMessage) => {
  let action = {};
  if (type === 'login') {
    action = userApi.login(payload);
  } else if (type === 'signup') {
    action = userApi.signUp(payload);
  } else if (type === 'editprofile') {
    action = userApi.editProfile(payload);
  } else {
    action = userApi.changePassword(payload);
  }
  toast.info(message);
  const response = await action;
  if (!response.success) {
    toast.dismiss();
    toast.error(response.message);
    return response.message;
  }
  if (type !== 'changepassword') await localStorage.setItem('user', JSON.stringify(response.result));
  toast.dismiss();
  successMessage && toast.success(successMessage);
  dispatch(push('/'));
  dispatch.user.loginSuccess(response.result);
  if (type === 'editprofile') {
    dispatch(goBack());
  } else if (type === 'changepassword') {
    dispatch(goBack());
  }
};

export const user = {
  state: { ...userState },
  reducers: {
    // setUserField: (state, payload) => ({
    //   ...state,
    //   [payload.field]: payload.data,
    // }),
    loginSuccess: (state, payload) => ({
      ...state,
      ...payload,
    }),
    logoutSuccess: () => ({
      ...userState,
    }),
  },
  effects: (dispatch) => ({
    signUp: async (payload) => {
      await handleAuth(
        dispatch,
        payload,
        'signup',
        'Creating your account...',
        'Account created successfully',
      );
    },
    login: async (payload) => {
      await handleAuth(
        dispatch,
        payload,
        'login',
        'Logging you in...',
      );
    },
    editProfile: async (payload) => {
      await handleAuth(
        dispatch,
        payload,
        'editprofile',
        'Updating your profile',
        'Account updated successfully',
      );
    },
    isLoggedIn: async (payload) => {
      dispatch.user.loginSuccess(payload);
      const response = await userApi.getMe(payload);
      if (!response.success) {
      } else {
        await localStorage.setItem('user', JSON.stringify(response.result));
        dispatch.user.loginSuccess(response.result);
      }
    },
    changePassword: async (payload) => {
      await handleAuth(
        dispatch,
        payload,
        'changepassword',
        'Updating your password',
        'Password updated successfully',
      );
    },
  }),
};
