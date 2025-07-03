import React, { useEffect, useState } from 'react';
import { getAllExpenses, deleteExpense } from '../services/api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getAllExpenses()
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    deleteExpense(id)
      .then(() => setExpenses(expenses.filter(e => e.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id}>
            <span>{exp.title} - ${exp.amount} on {exp.date} ({exp.category})</span>
            <button onClick={() => handleDelete(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;