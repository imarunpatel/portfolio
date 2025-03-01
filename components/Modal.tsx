import React, { FC } from 'react';
import { CircleX } from 'lucide-react';

interface  Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}
const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-70 flex items-center justify-center z-[999]">
      <div className="m-2 dark:bg-gray-900 w-full min-h-20 max-w-2xl dark:border-gray-800 border p-2 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-500"
        >
          <CircleX />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;