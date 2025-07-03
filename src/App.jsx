import React from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Summary from './components/Summary';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <Summary />
      <ExpenseList />
    </div>
  );
};

export default App;