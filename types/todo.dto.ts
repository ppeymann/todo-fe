export type todo = {
  ID: number;
  CreateAt: Date;
  UpdatedAt: Date;
  DeletedAt: {
    Time: Date;
    Valid: boolean;
  } | null;

  title: string;
  description: string;
  status: "in_progress" | "complete" | "cancel";
  account_id: number;
  priority: number;
};

export type todoInputDTO = {
  title: string;
  description: string;
  priority: number;
  status: string;
};

export const initTodoInput: todoInputDTO = {
  title: "",
  description: "",
  priority: 1,
  status: "in_progress",
};

export const initTodo: todo = {
  ID: 0,
  CreateAt: undefined,
  UpdatedAt: undefined,
  DeletedAt: {
    Time: undefined,
    Valid: false,
  },
  title: "",
  description: "",
  status: "in_progress",
  account_id: 0,
  priority: 0,
};
