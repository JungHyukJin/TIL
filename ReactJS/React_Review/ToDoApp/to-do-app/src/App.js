import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { DarkModeProvider } from "./context/DarkModeContext";


const initialState = ["all", 'completed', 'active'];
function App() {
  const [filter, setFilter] = useState(initialState[0]);

  return (
    <DarkModeProvider>
      <Header
        filters={initialState}
        filter={filter}
        onFilterChange={setFilter}
      />
      <ToDoList filterType={filter} />
    </DarkModeProvider>
  );
}

export default App;
