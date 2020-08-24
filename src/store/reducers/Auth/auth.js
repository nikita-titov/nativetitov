import {
  CREATE_REQUEST_TOKEN,
  VALIDATE_RES_TOKEN,
  SESSION_ID,
  VALIDATE_ERROR,
  CURRENT_USER,
  LOGOUT,
} from '../../../actions/actionsType.js';

const initialState = {
  requestToken: null,
  isValidateToken: false,
  isError: false,
  session_id: null,
  current_user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    case VALIDATE_RES_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    case SESSION_ID:
      return {
        ...state,
        ...action.payload,
      };
    case VALIDATE_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
