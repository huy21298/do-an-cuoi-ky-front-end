import axios from "axios";

import environment from "../environments/enviroment";

class AxiosService {
  constructor() {
    this._apiURL = environment.url.back_end + "/api";
    this._instance = axios.create({
      baseURL: this._apiURL,
    });
    this._instance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
    this._instance.defaults.headers.post["Content-Type"] = "application/json";
  }

  handleSuccess(res) {
    return res;
  }

  handleError(err) {
    return Promise.reject(err.response);
  }

  get(endpoint) {
    return this._instance.get(endpoint);
  }

  post(endpoint, data) {
    return this._instance.post(endpoint, data);
  }

  getAuth(endpoint, token) {
    return this._instance.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  postAuth(endpoint, data, token) {
    return this._instance.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new AxiosService();
