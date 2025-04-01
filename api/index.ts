import moment from "moment";
import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { API_VERSION, AUTH_TOKENS_KEY, host } from "../common/const";
import { TokenBundleDTO } from "../types/index.dto";

// const host: string = 'http://localhost:8080/api/';

//Note: you should select methods("POST", "GET",...) after using this function and write url in method's parenteses
//this functions can set token in headers and check token's expire

//is base request to golang api
export const AxiosBaseRequest = (
  headers: AxiosRequestHeaders | undefined = undefined,
): AxiosInstance => {
  let json: string | null = localStorage.getItem(AUTH_TOKENS_KEY);
  const auth = json ? (JSON.parse(json) as TokenBundleDTO) : null;

  if (auth) {
    const expired: boolean = moment(auth.expire).isBefore(moment());
    if (auth.token !== "" || !expired) {
      return axios.create({
        baseURL: `${host}${API_VERSION}`,
        headers: headers
          ? {
              ...headers,
              Authorization: `Bearer ${auth.token}`,
            }
          : {
              Authorization: `Bearer ${auth.token}`,
            },
      });
    }
  }

  return axios.create({
    baseURL: `${host}${API_VERSION}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export interface ApiBaseResponse<T> {
  errors: Array<string>;
  result_count: number;
  result: T;
}
