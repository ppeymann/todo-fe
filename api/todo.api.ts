import { ApiBaseResponse, AxiosBaseRequest } from ".";
import { todo, todoInputDTO } from "../types/todo.dto";

export const apiGetAllTodo = async (): Promise<ApiBaseResponse<todo[]>> => {
  const response = await AxiosBaseRequest().get("/todo/");

  return response.data;
};

export const apiAddTodo = async (
  input: todoInputDTO,
): Promise<ApiBaseResponse<todo>> => {
  const response = await AxiosBaseRequest().post("/todo/", input);

  return response.data;
};

export const apiChangeStatus = async (
  status: "in_progress" | "complete" | "cancel",
  id: number,
): Promise<ApiBaseResponse<todo>> => {
  const response = await AxiosBaseRequest().patch(
    `/todo/status/${id}/${status}`,
  );

  return response.data;
};

export const apiDeleteHandler = async (
  id: number,
): Promise<ApiBaseResponse<string>> => {
  const response = await AxiosBaseRequest().delete(`/todo/${id}`);

  return response.data;
};
