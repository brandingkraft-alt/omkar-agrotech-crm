'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import {
  Plus,
  Filter,
  Download,
  Search,
  Calendar,
  DollarSign,
  FileText,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'

interface Transaction {
  id: string
  date: string
  entryNumber: string
  description: string
  accountDebit: string
  accountCredit: string
  amount: number
  type: 'Journal' | 'Purchase' | 'Sales' | 'Cash' | 'Bank'
  status: 'Draft' | 'Pending' | 'Approved' | 'Rejected'
  documents: number
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      date: '2025-12-01',
      entryNumber: 'JV-2025-001',
      description: 'Purchase of raw materials from ABC Suppliers',
      accountDebit: 'Purchase A/c',
      accountCredit: 'ABC Suppliers A/c',
      amount: 45000,
      type: 'Purchase',
      status: 'Approved',
      documents: 2
    },
    {
      id: '2',
      date: '2025-12-01',
      entryNumber: 'JV-2025-002',
      description: 'Sales to XYZ Distributors',
      accountDebit: 'XYZ Distributors A/c',
      accountCredit: 'Sales A/c',
      amount: 85000,
      type: 'Sales',
      status: 'Approved',
      documents: 1
    },
    {
      id: '3',
      date: '2025-11-30',
      entryNumber: 'JV-2025-003',
      description: 'Salary payment for November',
      accountDebit: 'Salary A/c',
      accountCredit: 'Bank A/c',
      amount: 125000,
      type: 'Bank',
      status: 'Approved',
      documents: 0
    },
    {
      id: '4',
      date: '2025-11-29',
      entryNumber: 'JV-2025-004',
      description: 'Cash sales - Retail customer',
      accountDebit: 'Cash A/c',
      accountCredit: 'Sales A/c',
      amount: 32000,
      type: 'Cash',
      status: 'Approved',
      documents: 1
    },
    {
      id: '5',
      date: '2025-11-28',
      entryNumber: 'JV-2025-005',
      description: 'Utility bills payment',
      accountDebit: 'Utilities A/c',
      accountCredit: 'Bank A/c',
      amount: 8500,
      type: 'Bank',
      status: 'Pending',
      documents: 3
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [showNewTransactionModal, setShowNewTransactionModal] = useState(false)

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.entryNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.accountDebit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.accountCredit.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filterType === 'all' || transaction.type === filterType
    const matchesStatus = filterStatus === 'all' || transaction.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Draft':
        return 'bg-gray-100 text-gray-800'
      case 'Rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Sales':
        return 'bg-green-100 text-green-800'
      case 'Purchase':
        return 'bg-blue-100 text-blue-800'
      case 'Cash':
        return 'bg-purple-100 text-purple-800'
      case 'Bank':
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
            <p className="text-gray-600 mt-1">Manage all your financial transactions</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button 
              onClick={() => setShowNewTransactionModal(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Plus className="h-4 w-4" />
              <span>New Transaction</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="Journal">Journal</option>
                <option value="Purchase">Purchase</option>
                <option value="Sales">Sales</option>
                <option value="Cash">Cash</option>
                <option value="Bank">Bank</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="Draft">Draft</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Entry No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Debit Account
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credit Account
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {transaction.entryNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.accountDebit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.accountCredit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ₹{transaction.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(transaction.type)}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{filteredTransactions.length}</span> of{' '}
              <span className="font-medium">{transactions.length}</span> transactions
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}