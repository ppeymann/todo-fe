"use client";
import {
  Button,
  Checkbox,
  Description,
  Field,
  Label,
  Select,
} from "@headlessui/react";

interface Props {
  changeTitle: (value: string) => void;
  changeDescription: (value: string) => void;
  changePriority: (value: number) => void;
}

const AddTodo = ({ changeTitle, changeDescription, changePriority }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="px-2 ">title</label>
        <input
          className="bg-slate-400 border-slate-400 border-2 text-black outline-none w-full rounded-md px-2 py-1"
          onChange={(e) => {
            changeTitle(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label className="px-2">description</label>
        <textarea
          onChange={(e) => {
            changeDescription(e.target.value);
          }}
          className="bg-slate-400 text-slate-900 border-slate-400 border-2 outline-none w-full rounded-md px-2 py-1 "></textarea>
      </div>
      <div className="w-full max-w-md mt-1">
        <Field>
          <Label className="mt-2">priority</Label>
          <div className="relative">
            <Select
              onChange={(e) => {
                changePriority(Number(e.target.value));
              }}
              className="bg-slate-400 text-black font-bold px-3 py-1 rounded-md border-2 border-slate-400">
              <option value={1}>Not Important</option>
              <option value={2}>Important</option>
              <option value={3}>Very Important</option>
            </Select>
          </div>
        </Field>
      </div>
    </>
  );
};

export default AddTodo;
