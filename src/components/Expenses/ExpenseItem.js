import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log("Clicked!!!");
       };

    const expenseDeleted = () => {
        console.log("Deleted!");
       };
   
    return (
        <Card>
            <div className="expense-item"> 
                <ExpenseDate date = {props.date}/>
                <ExpenseDetails title = {props.title} amount={props.amount}/>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={expenseDeleted}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;