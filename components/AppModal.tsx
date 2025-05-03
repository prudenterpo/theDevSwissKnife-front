"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

type AppModalProps = {
  title: string;
  description: string;
  open: boolean;
  onOpenChange: (value: boolean) => void;
};

export default function AppModal({ title, description, open, onOpenChange }: AppModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
          <Dialog.Title className="text-xl font-bold mb-2">{title}</Dialog.Title>
          <Dialog.Description className="text-gray-700 mb-4">{description}</Dialog.Description>
          <div className="text-right">
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                Close
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}