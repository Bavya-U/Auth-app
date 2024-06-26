import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  REGISTER_REQUEST,
  registerSuccess,
  registerFailure,
} from '../Actions/Action';
import API_URLS from '../../Service/Api';
function* registerUser(action) {
  try {
    const { userId, userName, email, mobileNo, password, confirmPassword, userRole, navigate } = action.payload;
    const userData = {
      userId,
      userName,
      email,
      mobileNo,
      password,
      confirmPassword,
      userRole,
    };
    const response = yield call(axios.post, API_URLS.REGISTER, userData);
    yield put(registerSuccess(response.data)); 
    navigate("/authlogin"); 
  } catch (error) {
    yield put(registerFailure(error.message)); 
  }
}

function* userSaga() {
  yield takeLatest(REGISTER_REQUEST, registerUser);
}

export default userSaga;
