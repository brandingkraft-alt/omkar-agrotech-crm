'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { BookOpen, FileText, Scale, Download, Printer } from 'lucide-react'

type BookType = 'journal' | 'ledger' | 'trial-balance'

export default function BooksPage() {
  const [activeBook, setActiveBook] = useState<BookType>('journal')

  const journalEntries = [
    {
      date: '2025-12-01',
      entryNo: 'JV-001',
      particulars: [
        { account: 'Purchase A/c', debit: 45000, credit: 0 },
        { account: 'GST Input A/c', debit: 8100, credit: 0 },
        { account: 'ABC Suppliers A/c', debit: 0, credit: 53100 },
      ],
      narration: 'Purchase of raw materials from ABC Suppliers with GST'
    },
    {
      date: '2025-12-01',
      entryNo: 'JV-002',
      particulars: [
        { account: 'XYZ Distributors A/c', debit: 100300, credit: 0 },
        { account: 'Sales A/c', debit: 0, credit: 85000 },
        { account: 'GST Output A/c', debit: 0, credit: 15300 },
      ],
      narration: 'Sales to XYZ Distributors with GST'
    },
  ]

  const ledgerAccounts = [
    {
      accountName: 'Cash A/c',
      entries: [
        { date: '2025-11-01', particulars: 'To Opening Balance', debit: 50000, credit: 0, balance: 50000 },
        { date: '2025-11-15', particulars: 'To Sales A/c', debit: 32000, credit: 0, balance: 82000 },
        { date: '2025-11-20', particulars: 'By Purchase A/c', debit: 0, credit: 15000, balance: 67000 },
        { date: '2025-11-30', particulars: 'By Salary A/c', debit: 0, credit: 25000, balance: 42000 },
      ]
    },
    {
      accountName: 'Bank A/c',
      entries: [
        { date: '2025-11-01', particulars: 'To Opening Balance', debit: 500000, credit: 0, balance: 500000 },
        { date: '2025-11-10', particulars: 'To Sales A/c', debit: 150000, credit: 0, balance: 650000 },
        { date: '2025-11-25', particulars: 'By Rent A/c', debit: 0, credit: 50000, balance: 600000 },
        { date: '2025-11-30', particulars: 'By Utilities A/c', debit: 0, credit: 8500, balance: 591500 },
      ]
    },
  ]

  const trialBalance = [
    { account: 'Cash A/c', debit: 42000, credit: 0 },
    { account: 'Bank A/c', debit: 591500, credit: 0 },
    { account: 'Debtors A/c', debit: 320000, credit: 0 },
    { account: 'Stock A/c', debit: 850000, credit: 0 },
    { account: 'Furniture A/c', debit: 150000, credit: 0 },
    { account: 'Building A/c', debit: 2500000, credit: 0 },
    { account: 'Creditors A/c', debit: 0, credit: 280000 },
    { account: 'Capital A/c', debit: 0, credit: 3000000 },
    { account: 'Sales A/c', debit: 0, credit: 2450000 },
    { account: 'Purchase A/c', debit: 1200000, credit: 0 },
    { account: 'Salary A/c', debit: 450000, credit: 0 },
    { account: 'Rent A/c', debit: 180000, credit: 0 },
    { account: 'Utilities A/c', debit: 85000, credit: 0 },
    { account: 'Transportation A/c', debit: 220000, credit: 0 },
    { account: 'GST Input A/c', debit: 142000, credit: 0 },
    { account: 'GST Output A/c', debit: 0, credit: 150500 },
  ]

  const totalDebit = trialBalance.reduce((sum, item) => sum + item.debit, 0)
  const totalCredit = trialBalance.reduce((sum, item) => sum + item.credit, 0)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Books of Accounts</h1>
            <p className="text-gray-600 mt-1">Journal, Ledger, and Trial Balance</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveBook('journal')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeBook === 'journal'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Journal</span>
                </div>
              </button>
              <button
                onClick={() => setActiveBook('ledger')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeBook === 'ledger'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Ledger</span>
                </div>
              </button>
              <button
                onClick={() => setActiveBook('trial-balance')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeBook === 'trial-balance'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Scale className="h-5 w-5" />
                  <span>Trial Balance</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Journal View */}
            {activeBook === 'journal' && (
              <div className="space-y-6">
                {journalEntries.map((entry, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Date: {entry.date}</p>
                        <p className="text-sm font-semibold text-gray-900">Entry No: {entry.entryNo}</p>
                      </div>
                    </div>
                    <table className="w-full mb-4">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Particulars
                          </th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                            Debit (₹)
                          </th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                            Credit (₹)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {entry.particulars.map((particular, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-3 text-sm text-gray-900">
                              {particular.debit > 0 ? 'Dr. ' : 'Cr. '}{particular.account}
                            </td>
                            <td className="px-4 py-3 text-sm text-right text-gray-900">
                              {particular.debit > 0 ? particular.debit.toLocaleString() : '-'}
                            </td>
                            <td className="px-4 py-3 text-sm text-right text-gray-900">
                              {particular.credit > 0 ? particular.credit.toLocaleString() : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-sm text-gray-600 italic">
                      <span className="font-medium">Narration:</span> {entry.narration}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Ledger View */}
            {activeBook === 'ledger' && (
              <div className="space-y-8">
                {ledgerAccounts.map((account, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {account.accountName}
                    </h3>
                    <div className="overflow-x-auto border border-gray-200 rounded-lg">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Date
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Particulars
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                              Debit (₹)
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                              Credit (₹)
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                              Balance (₹)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {account.entries.map((entry, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900">{entry.date}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{entry.particulars}</td>
                              <td className="px-4 py-3 text-sm text-right text-gray-900">
                                {entry.debit > 0 ? entry.debit.toLocaleString() : '-'}
                              </td>
                              <td className="px-4 py-3 text-sm text-right text-gray-900">
                                {entry.credit > 0 ? entry.credit.toLocaleString() : '-'}
                              </td>
                              <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">
                                {entry.balance.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Trial Balance View */}
            {activeBook === 'trial-balance' && (
              <div>
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Trial Balance</h3>
                  <p className="text-sm text-gray-600">As on November 30, 2025</p>
                </div>
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Account Name
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          Debit (₹)
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          Credit (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {trialBalance.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{item.account}</td>
                          <td className="px-6 py-4 text-sm text-right text-gray-900">
                            {item.debit > 0 ? item.debit.toLocaleString() : '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-gray-900">
                            {item.credit > 0 ? item.credit.toLocaleString() : '-'}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50 font-bold">
                        <td className="px-6 py-4 text-sm text-gray-900">Total</td>
                        <td className="px-6 py-4 text-sm text-right text-gray-900">
                          {totalDebit.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-right text-gray-900">
                          {totalCredit.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {totalDebit === totalCredit ? (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold text-center">
                      ✓ Trial Balance is Balanced (Debit = Credit)
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold text-center">
                      ✗ Trial Balance is Not Balanced (Difference: ₹{Math.abs(totalDebit - totalCredit).toLocaleString()})
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}