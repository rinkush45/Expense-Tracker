import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expense Tracker with Budgeting',
  description: 'Track your expenses and manage your budget',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Expense Tracker</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}

