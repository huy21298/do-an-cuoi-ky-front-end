import axios from "axios";

import environment from "../environments/enviroment";

class AxiosService {

  constructor() {
    this._apiURL = environment.url.back_end + "/api";
    this._instance = axios.create({
      baseURL: this._apiURL,
    });
    this._instance.interceptors.response.use(this.handleSuccess, this.handleError);
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
    return this._instance.post(endpoint, data)
  }
}

export default new AxiosService();
