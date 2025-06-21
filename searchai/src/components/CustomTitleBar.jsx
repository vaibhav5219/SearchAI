import React from "react";
import { Minus, Square, X } from "lucide-react";

const CustomTitleBar = () => {
  return (
    <div className="flex gap-2 non-draggable">
      <button
        onClick={() => window.electronAPI.minimize()}
        className="hover:bg-gray-200 rounded p-1"
        title="Minimize"
      >
        <Minus size={16} />
      </button>
      <button
        onClick={() => window.electronAPI.maximize()}
        className="hover:bg-gray-200 rounded p-1"
        title="Maximize"
      >
        <Square size={16} />
      </button>
      <button
        onClick={() => window.electronAPI.close()}
        className="hover:bg-red-500 hover:text-white text-red-600 rounded p-1"
        title="Close"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default CustomTitleBar;