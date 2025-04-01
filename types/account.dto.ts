import { todo } from "./todo.dto";

export type SignInInput = {
  user_name: string;
  password: string;
};

export type SignUpInput = {
  user_name: string;
  password: string;
  first_name: string;
  last_name: string;
};

export type accountDTO = {
  ID: number;
  CreateAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: Date;
    Valid: boolean;
  } | null;

  user_name: string;
  password: string;
  last_name: string;
  first_name: string;
  todos: todo[];
};

export const initSignInInput: SignInInput = {
  user_name: "",
  password: "",
};

export const initSignUpInput: SignUpInput = {
  user_name: "",
  password: "",
  first_name: "",
  last_name: "",
};

export const initAccount: accountDTO = {
  ID: 0,
  CreateAt: "",
  UpdatedAt: "",
  DeletedAt: null,
  user_name: "",
  password: "",
  last_name: "",
  first_name: "",
  todos: [],
};
