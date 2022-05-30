import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.getMonth() + 1;
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}년</div>
      <div className="expense-date__month">{month}월</div>
      <div className="expense-date__day">{day}일</div>
    </div>
  );
};

export default ExpenseDate;
