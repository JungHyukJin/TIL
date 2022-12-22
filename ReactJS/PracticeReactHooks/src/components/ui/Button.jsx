import React from "react";

export default function Button({ text, onClick, disabled }) {
  return (
    <button disabled={disabled}
      onClick={onClick}
      className="bg-brand text-white py-2 px-4 rounded-md hover:brightness-110"
    >
      {text}
    </button>
  );
}
