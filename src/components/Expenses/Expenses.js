import React from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem 
        title={props.items[0].title}
        expenditure={props.items[0].LocationOfExpenditure}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        expenditure={props.items[1].LocationOfExpenditure}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        expenditure={props.items[2].LocationOfExpenditure}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        expenditure={props.items[3].LocationOfExpenditure}
        amount={props.items[3].amount}
        date={props.items[3].date}
        />
    </Card>
  );
}

export default Expenses;