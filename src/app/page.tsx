"use client";
import ProtectedLayout from "@/components/ProtectedLayout";
import { Fragment, useEffect, useState } from "react";

import Navbar from "@/components/nav/Navbar";
import Modal from "@/components/modals/Modal";

import {
  initTodo,
  initTodoInput,
  todo,
  todoInputDTO,
} from "../../types/todo.dto";
import {
  apiAddTodo,
  apiChangeStatus,
  apiDeleteHandler,
  apiGetAllTodo,
} from "../../api/todo.api";
import AddTodo from "@/components/modals/AddTodo";

export default function Home() {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [todos, setTodos] = useState<todo[]>([]);
  const [todoInput, setTodoInput] = useState<todoInputDTO>(initTodoInput);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [todo, setTodo] = useState<todo>(initTodo);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    apiGetAllTodo().then((value) => {
      if (value.errors === null) {
        setTodos(
          value.result.sort((a, b) =>
            a.status === "complete" ? 1 : b.status === "complete" ? -1 : 0,
          ),
        );
      }
    });
  }, []);

  const addTodoHandler = () => {
    apiAddTodo(todoInput).then((value) => {
      if (value.errors === null) {
        setTodos([...todos, value.result]);
        setShowAddModal(false);
      }
    });
  };

  const deleteHandler = (id: number) => {
    apiDeleteHandler(id).then((value) => {
      if (value.errors === null) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.ID !== id));
      }
    });
  };

  const changeStatusHandler = (
    status: "in_progress" | "complete" | "cancel",
    id: number,
  ) => {
    apiChangeStatus(status, id).then((value) => {
      if (value.errors === null) {
        setTodos((prevTodos) => {
          return prevTodos
            .map((todo) =>
              todo.ID === id ? { ...todo, ...value.result } : todo,
            )
            .sort((a, b) =>
              a.status === "complete" ? 1 : b.status === "complete" ? -1 : 0,
            );
        });
      }
    });
  };

  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ProtectedLayout>
      <Navbar />
      <div className="w-full max-w-6xl mx-auto mt-20 px-3">
        <div className="border-b-2 pb-2 border-dashed flex justify-between">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-indigo-500 transition-colors">
            Add Todo +
          </button>
          <input
            className="bg-slate-300 outline-none border-2 border-slate-400 px-3 py-2 w-3/4 rounded-md focus:bg-slate-200 transition-colors"
            placeholder="Search in Todo's Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4 gap-3">
          {filteredTodos.map((t) => (
            <div key={t.ID}>
              <div
                className={`px-3 py-2 z-10 text-slate-100 w-full rounded-xl flex justify-between items-center transition-all ${
                  t.status === "complete"
                    ? "bg-black opacity-60 line-through text-gray-400 border border-gray-500"
                    : t.priority === 1
                    ? "bg-green-600"
                    : t.priority === 2
                    ? "bg-amber-600"
                    : "bg-red-600"
                }`}>
                <div
                  className="w-full text-left"
                  onClick={() => {
                    setShowInfoModal(true);
                    setTodo(t);
                  }}>
                  <span className="font-bold text-lg">{t.title}</span>
                  <p>{t.description}</p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={t.status === "complete"}
                    onChange={(e) => {
                      e.stopPropagation();
                      changeStatusHandler(
                        t.status === "in_progress" ? "complete" : "in_progress",
                        t.ID,
                      );
                    }}
                    className="w-6 h-6 !z-30 rounded-full border-2 border-gray-400 checked:bg-green-500 checked:border-black appearance-none cursor-pointer transition-all"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        buttonText={"OK"}
        title={todo.title}
        body={<p>{todo.description}</p>}
        buttons={
          <button
            onClick={() => {
              deleteHandler(todo.ID);
              setShowInfoModal(false);
            }}
            className="border-red-500 border-2 text-red-500 cursor-pointer hover:text-black hover:bg-red-500 transition-colors ml-1 px-3 py-1.5 rounded-md font-bold">
            delete
          </button>
        }
      />
      <Modal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        title={"Add Todo"}
        body={
          <AddTodo
            changeTitle={(value) =>
              setTodoInput({
                ...todoInput,
                title: value,
              })
            }
            changeDescription={(value) =>
              setTodoInput({
                ...todoInput,
                description: value,
              })
            }
            changePriority={(value) =>
              setTodoInput({
                ...todoInput,
                priority: value,
              })
            }
          />
        }
        buttonText={"Add"}
        click={addTodoHandler}
        buttons={
          <button
            onClick={() => setShowAddModal(false)}
            className="border-red-500 border-2 text-red-500 cursor-pointer hover:text-black hover:bg-red-500 transition-colors ml-1 px-3 py-1.5 rounded-md font-bold">
            cancel
          </button>
        }
      />
    </ProtectedLayout>
  );
}
