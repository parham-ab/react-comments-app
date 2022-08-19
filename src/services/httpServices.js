import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};

export default http;
