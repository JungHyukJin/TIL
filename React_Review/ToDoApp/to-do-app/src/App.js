import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";


const initialState = ["all", 'completed', 'active'];
function App() {
  const [filter, setFilter] = useState(initialState[0]);

  return (
    <>
      <Header
        filters={initialState}
        filter={filter}
        onFilterChange={setFilter}
      />
      <ToDoList filterType={filter} />
    </>
  );
}

export default App;
