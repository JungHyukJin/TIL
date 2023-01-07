import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div style={{padding: '30px'}}>
        <Link to="/useState">
          <p> useState : </p>
        </Link>
        <Link to="/useEffect">
          <p> useEffect : </p>
        </Link>
        <Link to="/useRef">
          <p> useRef : </p>
        </Link>
        <Link to="/useContext">
          <p> useContext : </p>
        </Link>
        <Link to="/useMemo">
          <p> useMemo : </p>
        </Link>
        <Link to="/useCallback">
          <p> useCallback : </p>
        </Link>
        <Link to="/useReducer">
          <p> useReducer : </p>
        </Link>
        <Link to="/reactMemo">
          <p> reactMemo : </p>
        </Link>
        <Link to="/customHooks">
          <p> customHooks : </p>
        </Link>
        <Link to="/useParams">
          <p> useParams : </p>
        </Link>
        <Link to="/backdrop">
          <p> Backdrop : </p>
        </Link>
      </div>
    </>
  );
}
