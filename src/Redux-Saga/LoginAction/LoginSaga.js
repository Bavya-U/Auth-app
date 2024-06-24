import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
} from '../LoginAction/LoginAction';

function* loginUser(action) {
  try {
    const { userName, password } = action.payload;
    const response = yield call(axios.post, 'http://localhost:8080/api/auth/user/login', { userName, password });
    yield put(loginSuccess(response.data)); // Dispatch success action
  } catch (error) {
    yield put(loginFailure(error.message)); // Dispatch failure action
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

export default authSaga;
