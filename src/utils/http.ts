import axios, { AxiosError, type AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add a request interceptor
    this.instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;
          toast.error(message, {
            autoClose: 1000
          });
        }

        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
