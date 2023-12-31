import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //multiple state approach
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    //used one line approach below
    //const [userInput,setuserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //});
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //setuserInput({
        //    ...userInput,
        //    enteredTitle: e.target.value
        //});
        //If we depend on previous state then use below approach
        //setuserInput((prevstate) => {
        //    return {...prevstate, enteredTitle: e.target.value};
        //})
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setuserInput({
        //    ...userInput,
        //    enteredAmount: e.target.value
        //});
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setuserInput({
        //    ...userInput,
        //    enteredDate: e.target.value
        //});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            "title": enteredTitle,
            "amount": enteredAmount,
            "date": new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>

        </div>
    </form>
}
export default ExpenseForm;