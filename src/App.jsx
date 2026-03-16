import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./components/expenseData";
import useLocalStorage from "./components/hooks/useLocalStorage";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
  const [editRowId, setEditRowId] = useLocalStorage("editRowId", "");
  return (
    <main>
      <h1 className="heading">Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editRowId={editRowId}
          setEditRowId={setEditRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditRowId={setEditRowId}
        />
      </div>
    </main>
  );
}

export default App;
