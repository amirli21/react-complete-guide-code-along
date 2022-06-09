import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {


  const [title, setTitle] = useState(props.title);


  

  const clickHandler = ()=>{
    setTitle('Updated!');
    console.log('Updated!');
  }

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div>
          <h2 className="expense-item__description">{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
}

export default ExpenseItem;