import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString(),
    }  
    props.onAddExpense(expenseData)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () =>{
    setIsEditing(false);
  };

  let newExpenseContent = <button onClick={startEditingHandler}>Add New Expense</button>;
  if(isEditing){
    newExpenseContent = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>
  };

  return (
      <div className='new-expense'>
        {newExpenseContent}
      </div>
  );
};

export default NewExpenses;