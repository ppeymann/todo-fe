"use client";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;

  title: ReactNode;
  body: ReactNode;
}

export default function Modal({ show, onClose, title, body }: Props) {
  return (
    <>
      <Dialog
        open={show}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
        __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-slate-800 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">{body}</p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={onClose}>
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
