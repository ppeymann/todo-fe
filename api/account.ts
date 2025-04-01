import { AxiosBaseRequest } from ".";
import { SignInInput, SignUpInput } from "../types/account.dto";

const BaseUrl: string = "/account";

export function apiSignUp(input: SignUpInput) {
  return AxiosBaseRequest().post(`${BaseUrl}/signup`, JSON.stringify(input));
}

export function apiSignIn(input: SignInInput) {
  return AxiosBaseRequest().post(`${BaseUrl}/signup`, JSON.stringify(input));
}
