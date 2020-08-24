import AsyncStorage from '@react-native-community/async-storage';
import {
  GET_REQUEST_TOKEN,
  VALIDATE_REQUEST_TOKEN,
  CREATE_SESSION_ID,
  DELETE_SESSION_ID,
  GET_INFO,
} from '../constants/auth';
import {
  CREATE_REQUEST_TOKEN,
  VALIDATE_RES_TOKEN,
  SESSION_ID,
  VALIDATE_ERROR,
  LOGOUT,
  CURRENT_USER,
} from '../actions/actionsType.js';
import axios from 'axios';

// user Auth
export const loginUser = (login, pass, nav) => (dispatch) => {
  // GET_REQUEST_TOKEN
  axios.get(GET_REQUEST_TOKEN).then((res) => {
    if (res.data.success) {
      AsyncStorage.setItem('request_token', res.data.request_token);
      dispatch({
        type: CREATE_REQUEST_TOKEN,
        payload: {
          requestToken: res.data.request_token,
          expires_at: res.data.expires_at,
          isLogOut: false,
          isError: false,
        },
      });
      // VALIDATE_REQUEST_TOKEN
      axios
        .post(VALIDATE_REQUEST_TOKEN, {
          username: login,
          password: pass,
          request_token: res.data.request_token,
        })
        .then((res) => {
          dispatch({
            type: VALIDATE_RES_TOKEN,
            payload: {
              isValidateToken: res.data.success,
              isError: false,
            },
          });
          // CREATE_SESSION_ID
          axios
            .post(CREATE_SESSION_ID, {
              request_token: res.data.request_token,
            })
            .then((res) => {
              if (res.data.session_id) {
                AsyncStorage.setItem('session_id', res.data.session_id);
                dispatch({
                  type: SESSION_ID,
                  payload: {
                    session_id: res.data.session_id,
                    isError: false,
                  },
                });
                nav.navigate('Films');
              }
            });
        })
        .catch((e) => {
          dispatch({
            type: VALIDATE_ERROR,
            payload: {
              isError: true,
            },
          });
          console.log('LOG IN FAILED', e.response.data.success);
        });
    }
  });
};

// get user Profile
export const getUserInfo = () => (dispatch) => {
  AsyncStorage.getItem('session_id').then((session_id) => {
    axios.get(`${GET_INFO}&session_id=${session_id}`).then((res) => {
      dispatch({
        type: CURRENT_USER,
        payload: {
          current_user: res.data,
        },
      });
    });
  });
};

// logOut
export const logout = (nav, session_id) => (dispatch) => {
  axios
    .delete(DELETE_SESSION_ID, {
      params: {session_id},
    })
    .then((res) => {
      if (res.data.success) {
        AsyncStorage.removeItem('session_id');
        AsyncStorage.removeItem('request_token');
        dispatch({
          type: LOGOUT,
          payload: {
            requestToken: null,
            isValidateToken: false,
            isError: false,
            session_id: null,
            current_user: null,
            expires_at: null,
            isLogOut: true,
          },
        });
        nav.navigate('Auth');
      }
    })
    .catch((e) => {
      console.log('LOGOUT ERROR', e.response);
    });
};
