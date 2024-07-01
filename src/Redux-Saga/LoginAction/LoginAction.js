export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const FETCH_ALLDATA_REQUEST = "FETCH_ALLDATA_REQUEST";
export const FETCH_ALLDATA_SUCCESS = "FETCH_ALLDATA_SUCCESS";
export const FETCH_ALLDATA_FAILURE = "FETCH_ALLDATA_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

//login
export const loginRequest = (values) => ({
  type: LOGIN_REQUEST,
  payload: values,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// fechdata
export const fetchUserRequest = (email) => ({
  type: FETCH_USER_REQUEST,
  payload: { email },
});

export const fetchUserSuccess = (userData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

//fechalldata
export const fetchAllDataRequest = (email) => ({
  type: FETCH_ALLDATA_REQUEST,
  payload: { email },
});

export const fetchAllDataSuccess = (userData) => ({
  type: FETCH_ALLDATA_SUCCESS,
  payload: userData,
});

export const fetchAllDataFailure = (error) => ({
  type: FETCH_ALLDATA_FAILURE,
  payload: error,
});

// update data
export const updateUserRequest = (userData) => ({
  type: UPDATE_USER_REQUEST,
  payload: userData,
});

export const updateUserSuccess = (formData) => ({
  type: UPDATE_USER_SUCCESS,
  payload: formData,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

// Delete user
export const deleteUserRequest = (useremail) => ({
  type: DELETE_USER_REQUEST,
  payload: useremail,
});

export const deleteUserSuccess = (useremail) => ({
  type: DELETE_USER_SUCCESS,
  payload: useremail,
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});
