'use client'
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

