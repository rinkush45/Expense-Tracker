import { Expense } from '../lib/data'

export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Recent Expenses</h3>
      <ul className="space-y-2">
        {expenses.map((expense) => (
          <li key={expense.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between">
              <span className="font-semibold">{expense.description}</span>
              <span className="text-green-600">${expense.amount.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-500">
              {expense.category} - {new Date(expense.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

