import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id    : "e1",
      title : "제목1",
      amount: "100",
      date  : new Date(2022, 4, 30)
    },
    {
      id    : "e2",
      title : "제목2",
      amount: "200",
      date  : new Date(2022, 4, 31)
    },
    {
      id    : "e3",
      title : "제목3",
      amount: "300",
      date  : new Date(2022, 5, 1)
    }
  ];

  const addExpenseHandler = expense => {
    expenses.push(expense);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
