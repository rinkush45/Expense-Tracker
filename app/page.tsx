'use client'

import { useEffect, useState } from 'react'
import ExpenseList from './components/ExpenseList'
import BudgetList from './components/BudgetList'
import AddExpenseForm from './components/AddExpenseForm'
import AddBudgetForm from './components/AddBudgetForm'
import { getExpenses, getBudgets, Expense, Budget } from './lib/data'

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [budgets, setBudgets] = useState<Budget[]>([])

  useEffect(() => {
    setExpenses(getExpenses())
    setBudgets(getBudgets())
  }, [])

  const refreshData = () => {
    setExpenses(getExpenses())
    setBudgets(getBudgets())
  }

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
          <AddExpenseForm onAddExpense={refreshData} />
          <ExpenseList expenses={expenses} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Budgets</h2>
          <AddBudgetForm onAddBudget={refreshData} />
          <BudgetList budgets={budgets} expenses={expenses} />
        </div>
      </div>
    </main>
  )
}

