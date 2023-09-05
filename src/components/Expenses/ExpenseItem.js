import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import './ExpenseDetails';
import ExpenseDetails from './ExpenseDetails';

 const ExpenseItem = (props) => {
//    const [title,setTitle] = useState(props.title);

//    const clickHandler = () => {
//     setTitle("Updated!");
//     console.log(title);
//    };
   
//    /*const expenseDeleted = () => {
//      console.log("Deleted!");
//    };*/
//    const [expense,setExpense] = useState(props.amount);
   
//    const changeExpense = () => {
//     setExpense("100$");
//    }
   
    return (
      <li>
        <div className="expense-item">
          <ExpenseDate date={props.date}/>
          <ExpenseDetails title = {props.title} amount={props.amount}/>
        </div>
      </li>
    );
}
export default ExpenseItem;