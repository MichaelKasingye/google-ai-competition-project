import React, { ReactNode } from 'react';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Chat History</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <div className="overflow-y-auto max-h-[700px]  flex flex-col gap-5 p-10 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
