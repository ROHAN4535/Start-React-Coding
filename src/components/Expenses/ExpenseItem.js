import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
   
    return (
        <Card>
            <div className="expense-item"> 
                <ExpenseDate date = {props.date}/>
                <ExpenseDetails title = {props.title} amount={props.amount}/>
            </div>
        </Card>
    );
}

export default ExpenseItem;