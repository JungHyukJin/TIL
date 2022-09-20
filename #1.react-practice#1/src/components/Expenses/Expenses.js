import React, { useState } from "react";

import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart from "./ExpensesChart.js";
import "./Expenses.css";

function Expenses(props) {
  //
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
