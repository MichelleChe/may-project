import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { message } from 'antd'

type Result<T> = {
  code: number;
  message: string;
  data: T;
};

export class Request {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {

    this.instance = axios.create({ timeout: 10000, ...config });

    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token") as string
        if (token) {
          config.headers.Authorization = token;
        }
        console.log(config)

        return config;
      },
      (err) => {
        message.error('请求出错～')
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        let info = "";
        const { status } = err.response || {}
        switch (status) {
          case 401:
            info = "未授权，请重新登录(401)";
            break;
          case 500:
            info = "服务器错误(500)";
            break;
          default:
            info = `连接出错(${status})!`;
        }
        message.error(info)
        return Promise.reject(err.response);
      }
    );
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }

  public post<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config);
  }

  public put<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config);
  }
}

export default new Request({ baseURL: import.meta.env.VITE_APP_BASEURL })
