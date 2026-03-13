import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
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
      errorsData.title = "Title is required.";
    }
    if (!formData.category) {
      errorsData.category = "Please select a category.";
    }
    if (!formData.amount) {
      errorsData.amount = "Please enter an Amount.";
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
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handeChange}
        firstValue="Select category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={errors.category}
      />
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
