import {
  CREATE_REQUEST_TOKEN,
  VALIDATE_RES_TOKEN,
  SESSION_ID,
  VALIDATE_ERROR,
  CURENT_USER,
  LOGUT,
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
    case CURENT_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGUT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
