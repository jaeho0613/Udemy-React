import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id    : "e1",
    title : "제목1",
    amount: 100,
    date  : new Date(2022, 4, 30)
  },
  {
    id    : "e2",
    title : "제목2",
    amount: 200,
    date  : new Date(2022, 4, 31)
  },
  {
    id    : "e3",
    title : "제목3",
    amount: 500,
    date  : new Date(2022, 5, 1)
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
