import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
function ExpenseForm({
  setExpenses,
  expense,
  setExpense,
  editRowId,
  setEditRowId,
}) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title." },
      { minLength: 3, message: "Title should be at least 5 characters long" },
    ],
    category: [{ required: true, message: "Please select a category." }],
    amount: [
      { required: true, message: "Please enter an amount." },
      { typeof: Number, message: "Please enter a valid number." },
    ],
  };

  const validation = (formData) => {
    const errorsData = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 3) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.typeof && !Number(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validateResult = validation(expense);
    if (Object.keys(validateResult).length) return;

    if (editRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editRowId) {
            return { ...expense, id: editRowId };
          }
          return prevExpense;
        }),
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditRowId("");
      return;
    }
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
        defaultOption="Select category"
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
      <button className="add-btn">{editRowId ? "save" : "Add"}</button>
    </form>
  );
}

export default ExpenseForm;
