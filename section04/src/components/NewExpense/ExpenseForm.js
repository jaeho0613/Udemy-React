import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

  // 각각 state 값을 만들어 관리 하는 방법
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // 객채로 묶어서 관리하는 방법
  // const [userInput, setUserInput] = useState({
  //   enteredTitle : "",
  //   enteredAmount: "",
  //   enteredDate  : ""
  // });

  const titleChangeHandler = (event) => {
    // 방법 1.
    setEnteredTitle(event.target.value);

    // 방법 2.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // 방법 3. 오래되었거나 잘못된 상태 스냅샷에 대한 오류 방지
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };


  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
  };


  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount: enteredAmount,
      date  : new Date(enteredDate)
    };
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2011-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;