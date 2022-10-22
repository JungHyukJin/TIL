import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function AddToDo({ onAdd }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){    
        setText('');
        return;
    };

    onAdd({id: uuidv4(), text: text, status: 'active'});
    setText('');
  };
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Add ToDo"
        value={text}
        onChange={onChangeHandler}
      />
      <button>Add</button>
    </form>
  );
}
