import axios, { AxiosRequestConfig } from "axios";
import { formatApiResponse } from "../utils/api";
import { NETWORK_ERROR } from "../utils/constants/common";

const BACKEND_URL = "http://localhost:8080";
const TIMEOUT = 30000;

const requestService = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
});

requestService.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    //   const result = getPersistedData('auth');
    //   if (result) {
    //     config.headers = {
    //       Authorization: 'Bearer ' + result.accessToken,
    //     };
    //   }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

requestService.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return formatApiResponse(response);
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.message === NETWORK_ERROR) {
      error.response = {
        data: {
          code: "99999",
        },
        status: 400,
      };
    }
    return Promise.reject(formatApiResponse(error.response));
  }
);

export default requestService;
