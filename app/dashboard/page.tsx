'use client'

import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  Package,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import DashboardLayout from '@/components/DashboardLayout'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalRevenue: 2450000,
    totalExpenses: 1850000,
    netProfit: 600000,
    pendingTransactions: 12,
    stockValue: 850000,
    outstandingReceivables: 320000
  })

  const monthlyData = [
    { month: 'Jan', revenue: 185000, expenses: 142000 },
    { month: 'Feb', revenue: 195000, expenses: 155000 },
    { month: 'Mar', revenue: 220000, expenses: 168000 },
    { month: 'Apr', revenue: 245000, expenses: 185000 },
    { month: 'May', revenue: 268000, expenses: 195000 },
    { month: 'Jun', revenue: 290000, expenses: 210000 },
  ]

  const expenseBreakdown = [
    { name: 'Raw Materials', value: 680000, color: '#3b82f6' },
    { name: 'Salaries', value: 450000, color: '#10b981' },
    { name: 'Utilities', value: 180000, color: '#f59e0b' },
    { name: 'Transportation', value: 220000, color: '#ef4444' },
    { name: 'Others', value: 320000, color: '#8b5cf6' },
  ]

  const recentTransactions = [
    { id: 1, date: '2025-12-01', description: 'Purchase - ABC Suppliers', amount: -45000, type: 'expense' },
    { id: 2, date: '2025-12-01', description: 'Sales - XYZ Distributors', amount: 85000, type: 'income' },
    { id: 3, date: '2025-11-30', description: 'Salary Payment', amount: -125000, type: 'expense' },
    { id: 4, date: '2025-11-29', description: 'Sales - Retail Customer', amount: 32000, type: 'income' },
    { id: 5, date: '2025-11-28', description: 'Utility Bills', amount: -8500, type: 'expense' },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome to Omkar Agrotech CRM</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Revenue */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(stats.totalRevenue / 100000).toFixed(2)}L
                </p>
                <div className="flex items-center mt-2 text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm ml-1">12.5% from last month</span>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          {/* Total Expenses */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Expenses</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(stats.totalExpenses / 100000).toFixed(2)}L
                </p>
                <div className="flex items-center mt-2 text-red-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm ml-1">8.3% from last month</span>
                </div>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </div>

          {/* Net Profit */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(stats.netProfit / 100000).toFixed(2)}L
                </p>
                <div className="flex items-center mt-2 text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm ml-1">24.5% margin</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Pending Transactions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Transactions</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stats.pendingTransactions}
                </p>
                <div className="flex items-center mt-2 text-orange-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm ml-1">Requires approval</span>
                </div>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Stock Value */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Stock Value</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(stats.stockValue / 100000).toFixed(2)}L
                </p>
                <div className="flex items-center mt-2 text-blue-600">
                  <Package className="h-4 w-4" />
                  <span className="text-sm ml-1">245 items in stock</span>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Outstanding Receivables */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Outstanding Receivables</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(stats.outstandingReceivables / 100000).toFixed(2)}L
                </p>
                <div className="flex items-center mt-2 text-yellow-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm ml-1">18 pending invoices</span>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue vs Expenses Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue vs Expenses</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${(value as number / 1000).toFixed(0)}K`} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
                <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${(value as number / 1000).toFixed(0)}K`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        transaction.type === 'income' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}