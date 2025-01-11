'use client'

export interface Expense {
  id: string
  amount: number
  category: string
  description: string
  date: string
}

export interface Budget {
  id: string
  category: string
  amount: number
}

interface Data {
  expenses: Expense[]
  budgets: Budget[]
}

const LOCAL_STORAGE_KEY = 'expense_tracker_data'

function getData(): Data {
  if (typeof window === 'undefined') {
    return { expenses: [], budgets: [] }
  }
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  return data ? JSON.parse(data) : { expenses: [], budgets: [] }
}

function setData(data: Data): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

export function getExpenses(): Expense[] {
  return getData().expenses
}

export function getBudgets(): Budget[] {
  return getData().budgets
}

export function addExpense(expense: Omit<Expense, 'id'>): void {
  const data = getData()
  const newExpense = { ...expense, id: Date.now().toString() }
  data.expenses.push(newExpense)
  setData(data)
}

export function addBudget(budget: Omit<Budget, 'id'>): void {
  const data = getData()
  const newBudget = { ...budget, id: Date.now().toString() }
  data.budgets.push(newBudget)
  setData(data)
}

