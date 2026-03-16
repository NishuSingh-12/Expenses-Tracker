import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./components/expenseData";

function App() {
    const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: "",
    });
  const [expenses, setExpenses] = useState(expenseData);
  const [editRowId, setEditRowId] = useState("");
  return (
    <main>
      <h1>Track Your Expense</h1>
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
