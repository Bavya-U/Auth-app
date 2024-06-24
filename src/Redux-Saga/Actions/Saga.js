import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  REGISTER_REQUEST,
  registerSuccess,
  registerFailure,
} from '../Actions/Action';

function* registerUser(action) {
  try {
    const { userId, userName, email, mobileNo, password,confirmPassword,userRole } = action.payload;
    const userData = {
      userId,
      userName,
      email,
        mobileNo,
        confirmPassword,
      password,
      userRole,
    };
    const response = yield call(axios.post, 'http://localhost:8080/api/auth/user/register', userData);
    yield put(registerSuccess(response.data)); // Dispatch success action
  } catch (error) {
    yield put(registerFailure(error.message)); // Dispatch failure action
  }
}

function* userSaga() {
  yield takeLatest(REGISTER_REQUEST, registerUser);
}

export default userSaga;
