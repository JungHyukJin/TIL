import React from "react";
import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";

const initialState = [
  { id: "1", text: "장보기", status: 'completed' },
  { id: "2", text: "공부하기", status: 'active'},
];

export default function ToDoList({filterType}) {
  const [toDos, setToDos] = useState(initialState);

  // 추가
  const todoAddHandler = (todo) => {
    setToDos([...toDos, todo]);
  };

  // 수정
  const updateHandler = (updatedTodo) => {
    setToDos(
        toDos.map(toDos=> toDos.id === updatedTodo.id ? updatedTodo : toDos)
    );
  };

  // 삭제
  const deleteHandler = (deletedTodo) => {
    setToDos(
        toDos.filter(toDos => toDos.id !== deletedTodo.id)
    );
  };
  
  // 필터된 아이템 리스트
  const getFilteredItems = (filterType) => {
    if(filterType === 'all'){
      return toDos;
    }
    return toDos.filter(items => items.status === filterType)
  };

  // 필터 타입 전달
  const filteredItems = getFilteredItems(filterType);

  return (
    <>
      <ul>
        {filteredItems.map((item) => (
          <ToDo 
            key={item.id}
            item={item}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
      <AddToDo onAdd={todoAddHandler} />
    </>
  );
}
