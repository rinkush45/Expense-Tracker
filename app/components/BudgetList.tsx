import { Budget, Expense } from '../lib/data'

export default function BudgetList({ budgets, expenses }: { budgets: Budget[], expenses: Expense[] }) {
  const calculateSpent = (category: string) => {
    return expenses
      .filter(expense => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
  }

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Budget Overview</h3>
      <ul className="space-y-2">
        {budgets.map((budget) => {
          const spent = calculateSpent(budget.category)
          const percentage = (spent / budget.amount) * 100
          return (
            <li key={budget.id} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{budget.category}</span>
                <span>${spent.toFixed(2)} / ${budget.amount.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

