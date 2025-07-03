import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/expenses';

export const getAllExpenses = () => axios.get(API_BASE_URL);
export const addExpense = (expense) => axios.post(API_BASE_URL, expense);
export const deleteExpense = (id) => axios.delete(`${API_BASE_URL}/${id}`);
export const updateExpense = (id, expense) => axios.put(`${API_BASE_URL}/${id}`, expense);
export const getSummary = (year, month) =>
  axios.get(`${API_BASE_URL}/summary`, { params: { year, month } });