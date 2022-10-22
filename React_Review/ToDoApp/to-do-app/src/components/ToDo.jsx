import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function ToDo({item, onUpdate, onDelete}) {
  const { id, text, status } = item;

  const checkboxChangeHandler = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({
        ...item,
        status: status
    });
  };

  const deleteHandler = () => {
    onDelete(item);
  };

  return (
    <li id={id} key={id}>
      <input
        type="checkbox"
        id={`checkbox_${id}`}
        checked={status === 'completed'}
        onChange={checkboxChangeHandler}
      />
      <label htmlFor={`checkbox_${id}`}>{text}</label>
      <button onClick={deleteHandler}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
