// 
import React, { useState } from 'react';


import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import './ExpenseItem.css';

function ExpenseItem(props) {
    //
    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
      setTitle('UPDATED'); // = 등호를 사용하는 상태 관리는 동작하지 않는다.
    }


    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>
            {props.amount}
          </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
}

export default ExpenseItem;