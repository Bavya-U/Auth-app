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
  FETCH_ALLDATA_REQUEST,
  fetchAllDataSuccess,
  fetchAllDataFailure,
  DELETE_USER_REQUEST,
  deleteUserSuccess,
  deleteUserFailure,
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
        navigate("/usertable");
      } else if (responseBody.role === "ADMIN") {
        navigate("/admintables/:useremail");
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

//feach all data
function* fetchAllData(action) {
  try {
    const token = localStorage.getItem("token");

    const response = yield call(axios.get, `${API_URLS.GET_ALL_USER}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const users = response.data;
    console.log(users);
    yield put(fetchAllDataSuccess(users));
  } catch (error) {
    yield put(
      fetchAllDataFailure(error.response?.data?.message || error.message)
    );
  }
}

//update data
function* updateUser(action) {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    console.log("Payload:", action.payload);

    const response = yield call(axios.put, API_URLS.EDIT_USER, action.payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const user = response.data;
    console.log("Response:", user);
    yield put(updateUserSuccess(user));
  } catch (error) {
    console.error("Update User Error:", error.response?.data || error.message);
    yield put(
      updateUserFailure(error.response?.data?.message || error.message)
    );
  }
}

//delete data
function deleteUserByEmailApi(useremail, token) {
  return axios.delete(`${API_URLS.DELETE_USER}/${useremail}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Delete user saga
function* deleteUser(action) {
  try {
    const token = localStorage.getItem("token");
    const { payload: useremail } = action;
    yield call(deleteUserByEmailApi, useremail, token);
    yield put(deleteUserSuccess(useremail));
  } catch (error) {
    yield put(
      deleteUserFailure(error.response?.data?.message || error.message)
    );
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(FETCH_ALLDATA_REQUEST, fetchAllData);
  yield takeLatest(DELETE_USER_REQUEST, deleteUser);
}

export default authSaga;
