import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
  UPDATE_USER_REQUEST,
  updateUserSuccess,
  updateUserFailure,
} from "../LoginAction/LoginAction";
import API_URLS from "../../Service/Api";

//Login

function* loginUser(action) {
  try {
    const { email, password, navigate } = action.payload;
    const response = yield call(axios.post, API_URLS.LOGIN, {
      email,
      password,
    });
    const responseBody = response.data.data.body;

    if (responseBody && responseBody.jwt) {
      localStorage.setItem("token", responseBody.jwt);
      localStorage.setItem("email", responseBody.userEmail);

      yield put(loginSuccess(responseBody));

      if (responseBody.role === "USER") {
        navigate("/admintables/:useremail");
      } else if (responseBody.role === "ADMIN") {
        navigate("/admintable");
      } else {
        yield put(loginFailure("Unexpected user role"));
      }
    } else {
      yield put(loginFailure("User not found"));
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || error.message));
  }
}

//fechUser

function* fetchUser(action) {
  try {
    const { email } = action.payload;
    console.log(email);

    const token = localStorage.getItem("token");

    const response = yield call(axios.get, `${API_URLS.GET_USER}/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    console.log(user);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.response?.data?.message || error.message));
  }
}

function* updateUser(action) {
  try {
    const token = localStorage.getItem('token');
    const response = yield call(
      axios.put,
      API_URLS.EDIT_USER,
      action.payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const user = response.data; // Assuming API returns updated user data

    yield put(updateUserSuccess(user));
  } catch (error) {
    yield put(updateUserFailure(error.response?.data?.message || error.message));
  }
}


function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);

}

export default authSaga;
