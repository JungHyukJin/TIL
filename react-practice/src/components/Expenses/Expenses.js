import React, {useState} from 'react';

import Card from '../UI/Card.js';
import ExpenseItem from './ExpenseItem.js';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
    //
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    }

    return (
      <div>
        <Card className='expenses'>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseItem
            title={props.items[0].title}
            date={props.items[0].date}
            amount={props.items[0].amount}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            date={props.items[1].date}
            amount={props.items[1].amount}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            date={props.items[2].date}
            amount={props.items[2].amount}
            ></ExpenseItem>
        </Card>
      </div>
    );
}
export default Expenses;
