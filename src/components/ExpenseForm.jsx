import React, { useState } from 'react';
import { addExpense } from '../services/api';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense({
      ...expense,
      amount: parseFloat(expense.amount)
    });
    setExpense({ title: '', category: '', amount: '', date: '' });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={expense.title} onChange={handleChange} placeholder="Title" required />
      <input name="category" value={expense.category} onChange={handleChange} placeholder="Category" required />
      <input name="amount" type="number" step="0.01" value={expense.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="date" type="date" value={expense.date} onChange={handleChange} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;