import { ApiBaseResponse, AxiosBaseRequest } from ".";
import { accountDTO, SignInInput, SignUpInput } from "../types/account.dto";
import { TokenBundleDTO } from "../types/index.dto";

const BaseUrl: string = "/account";

export async function apiSignUp(
  input: SignUpInput,
): Promise<ApiBaseResponse<TokenBundleDTO>> {
  const response = await AxiosBaseRequest().post<
    ApiBaseResponse<TokenBundleDTO>
  >(`${BaseUrl}/signup`, JSON.stringify(input));

  return response.data;
}

export async function apiSignIn(
  input: SignInInput,
): Promise<ApiBaseResponse<TokenBundleDTO>> {
  const response = await AxiosBaseRequest().post(
    `${BaseUrl}/signin`,
    JSON.stringify(input),
  );

  return response.data;
}

export async function apiGetAccount(): Promise<ApiBaseResponse<accountDTO>> {
  const response = await AxiosBaseRequest().get("/account");

  return response.data;
}
