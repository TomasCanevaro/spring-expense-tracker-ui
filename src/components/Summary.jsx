import React, { useState } from 'react';
import { getSummary } from '../services/api';

const Summary = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [summary, setSummary] = useState({});

  const fetchSummary = () => {
    getSummary(year, month)
      .then(res => setSummary(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Monthly Summary</h2>
      <div className="summary-controls">
        <input
          type="number"
          value={year}
          onChange={e => setYear(parseInt(e.target.value))}
          placeholder="Year"
        />
        <input
          type="number"
          value={month}
          min={1}
          max={12}
          onChange={e => setMonth(parseInt(e.target.value))}
          placeholder="Month"
        />
        <button onClick={fetchSummary}>Get Summary</button>
      </div>
      <ul>
        {Object.entries(summary).map(([category, total]) => (
          <li key={category}>{category}: ${total}</li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;