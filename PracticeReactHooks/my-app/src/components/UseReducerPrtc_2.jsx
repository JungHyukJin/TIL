import React, { useReducer, useState } from "react";

const initialState = {
  count: 0,
  info: [
    // {
    //   id: Date.now(),
    //   name: "정혁진",
    //   isHere: false,
    // },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newStudentInfo = {
        id: Date.now(),
        name: action.payload.name,
        isHere: false,
      };
      return {
        count: state.count++,
        info: [...state.info, newStudentInfo],
      };
    case "DELETE":
      return {
        count: state.count--,
        info: state.info.filter((ele) => ele.id !== action.payload.id),
      };
    case "PRESENT":
      return {
        count: state.count,
        info: state.info.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, isHere: !ele.isHere };
          }
          return ele;
        }),
      };
    default:
      return state;
  }
};

export default function UseReducerPrtc_2() {
  const [name, setName] = useState("");
  const [student, dispatch] = useReducer(reducer, initialState);

  const attendanceHandler = () => {
    dispatch({
      type: "ADD",
      payload: { name },
    });
  };
  const removeStudent = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id },
    });
  };
  const isHereHandler = (id) => {
    dispatch({
      type: "PRESENT",
      payload: { id },
    });
  };
  return (
    <div>
      <p>총 학생 수 : {student.count}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={attendanceHandler}>출석</button>
      <ul>
        {student.info.map((std) => {
          return (
            <li key={std.id}>
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: std.isHere ? "line-through" : "none",
                  color: std.isHere ? "gray" : "black",
                }}
                onClick={() => isHereHandler(std.id)}
              >
                {std.name}
              </span>
              <button
                data-idx=""
                onClick={() => {
                  removeStudent(std.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
