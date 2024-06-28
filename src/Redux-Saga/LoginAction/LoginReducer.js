import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../LoginAction/LoginAction';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //Login
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      };
    //fechuser
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null,
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload,
      };
    
    //update
      case UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
          loading: false,
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
    default:
      return state;
  }
};

export default authReducer;
