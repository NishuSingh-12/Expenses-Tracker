import { useState } from "react";
import Input from "./Input";
function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});

  const validation = (formData) => {
    const errorsData = {};
    if (!formData.title) {
      errorsData.title = "Title is required";
    }
    if (!formData.category) {
      errorsData.category = "Category is required";
    }
    if (!formData.amount) {
      errorsData.amount = "Amount is required";
    }
    setErrors(errorsData);
    return errorsData;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validateResult = validation(expense);
    if (Object.keys(validateResult).length) return;
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }
  const handeChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onchange={handeChange}
        error={errors.title}
      />
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handeChange}
        >
          <option hidden>Select category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onchange={handeChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
