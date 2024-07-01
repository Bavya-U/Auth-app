const API_BASE_URL = "http://localhost:8080/api";

const API_URLS = {
  LOGIN: `${API_BASE_URL}/auth/user/login`,
  REGISTER: `${API_BASE_URL}/auth/user/register`,
  GET_USER: `${API_BASE_URL}/user/getUser`,
  EDIT_USER: `${API_BASE_URL}/user/update`,
  DELETE_USER: `${API_BASE_URL}/user/deleteUser`,
  GET_ALL_USER: `${API_BASE_URL}/admin/getAllusers`,
};

export default API_URLS;
