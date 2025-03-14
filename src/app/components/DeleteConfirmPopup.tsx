"use client";
import { useState } from "react";

export default function DeleteConfirmPopup({
  onConfirm,
}: {
  onConfirm: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Supprimer
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-indigo-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-white">
              Confirmer la suppression
            </h2>
            <p className="text-gray-200 mb-6">
              Êtes-vous sûr de vouloir supprimer cet article ? Cette action est
              irréversible.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
