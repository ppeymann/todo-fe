"use client";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  buttonText: string;

  title: ReactNode;
  body: ReactNode;
  buttons?: ReactNode;
  click?: () => void;
}

export default function Modal({
  show,
  onClose,
  title,
  body,
  click,
  buttonText,
  buttons,
}: Props) {
  return (
    <>
      <Dialog
        open={show}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="z-10 w-full max-w-md rounded-xl bg-slate-800 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>
              <div className="mt-2 text-sm/6 text-white/50">{body}</div>
              <div className="mt-4">
                <button
                  className="bg-slate-200 cursor-pointer px-3 py-1.5 rounded-md font-bold"
                  onClick={click ? click : onClose}>
                  {buttonText}
                </button>
                {buttons}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
