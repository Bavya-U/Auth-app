import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
} from '../LoginAction/LoginAction';
import API_URLS from '../../Service/Api';

function* loginUser(action) {
  try {
    const { email, password, navigate } = action.payload;
    const response = yield call(axios.post, API_URLS.LOGIN, { email, password });
    const responseBody = response.data.data.body;

    if (responseBody && responseBody.jwt) {
      localStorage.setItem("token", responseBody.jwt);
      localStorage.setItem("email", responseBody.email);

      yield put(loginSuccess(responseBody));

      if (responseBody.role === "USER") {
        navigate("/usertable");
      } else if (responseBody.role === "ADMIN") {
        navigate("/admintable");
      } else {
        yield put(loginFailure('Unexpected user role'));
      }
    } else {
      yield put(loginFailure('User not found'));
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || error.message));
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

export default authSaga;
