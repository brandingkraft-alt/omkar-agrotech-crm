'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { FileText, TrendingUp, DollarSign, Download, Printer } from 'lucide-react'

type StatementType = 'trading' | 'profit-loss' | 'balance-sheet' | 'cash-flow'

export default function StatementsPage() {
  const [activeStatement, setActiveStatement] = useState<StatementType>('trading')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Financial Statements</h1>
            <p className="text-gray-600 mt-1">Trading Account, P&L, Balance Sheet, Cash Flow</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download className="h-4 w-4" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto" aria-label="Tabs">
              <button
                onClick={() => setActiveStatement('trading')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition ${
                  activeStatement === 'trading'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Trading Account
              </button>
              <button
                onClick={() => setActiveStatement('profit-loss')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition ${
                  activeStatement === 'profit-loss'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Profit & Loss
              </button>
              <button
                onClick={() => setActiveStatement('balance-sheet')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition ${
                  activeStatement === 'balance-sheet'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Balance Sheet
              </button>
              <button
                onClick={() => setActiveStatement('cash-flow')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition ${
                  activeStatement === 'cash-flow'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Cash Flow
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Trading Account */}
            {activeStatement === 'trading' && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Trading Account</h2>
                  <p className="text-gray-600">For the year ended November 30, 2025</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Debit Side */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-red-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Debit Side (Expenses)</h3>
                    </div>
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Opening Stock</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹7,50,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Purchases</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹12,00,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Direct Expenses</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹2,20,000</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="px-4 py-3 text-sm font-semibold text-green-900">Gross Profit c/d</td>
                          <td className="px-4 py-3 text-sm text-right font-semibold text-green-900">₹7,30,000</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹29,00,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Credit Side */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-green-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Credit Side (Income)</h3>
                    </div>
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Sales</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹24,50,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Closing Stock</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹4,50,000</td>
                        </tr>
                        <tr className="h-16"></tr>
                        <tr className="h-10"></tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹29,00,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Profit & Loss Account */}
            {activeStatement === 'profit-loss' && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Profit & Loss Account</h2>
                  <p className="text-gray-600">For the year ended November 30, 2025</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Debit Side */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-red-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Expenses & Losses</h3>
                    </div>
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Salaries</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹4,50,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Rent</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹1,80,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Utilities</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹85,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Transportation</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹2,20,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Depreciation</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹1,15,000</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="px-4 py-3 text-sm font-semibold text-green-900">Net Profit</td>
                          <td className="px-4 py-3 text-sm text-right font-semibold text-green-900">₹6,00,000</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹16,50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Credit Side */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-green-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Income & Gains</h3>
                    </div>
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Gross Profit b/d</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹7,30,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Commission Received</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹85,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Interest Received</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹35,000</td>
                        </tr>
                        <tr className="h-16"></tr>
                        <tr className="h-16"></tr>
                        <tr className="h-10"></tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹16,50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Balance Sheet */}
            {activeStatement === 'balance-sheet' && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Balance Sheet</h2>
                  <p className="text-gray-600">As on November 30, 2025</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Liabilities */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-red-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Liabilities</h3>
                    </div>
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Capital</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹30,00,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Add: Net Profit</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹6,00,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                          <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">₹36,00,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Creditors</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹2,80,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Bank Loan</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹5,00,000</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹43,80,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Assets */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-green-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Assets</h3>
                    </div>
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Building</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹25,00,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Furniture</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹1,50,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Stock</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹8,50,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Debtors</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹3,20,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Bank</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹5,18,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Cash</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹42,000</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900">₹43,80,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Cash Flow Statement */}
            {activeStatement === 'cash-flow' && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Cash Flow Statement</h2>
                  <p className="text-gray-600">For the year ended November 30, 2025</p>
                </div>
                <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-blue-50">
                        <td colSpan={2} className="px-6 py-3 text-sm font-semibold text-gray-900">
                          Operating Activities
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Net Profit</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">₹6,00,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Add: Depreciation</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">₹1,15,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Increase in Creditors</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">₹45,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Less: Increase in Debtors</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">(₹80,000)</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="px-6 py-3 text-sm text-gray-900">Net Cash from Operating Activities</td>
                        <td className="px-6 py-3 text-sm text-right text-green-600">₹6,80,000</td>
                      </tr>
                      
                      <tr className="bg-blue-50">
                        <td colSpan={2} className="px-6 py-3 text-sm font-semibold text-gray-900">
                          Investing Activities
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Purchase of Furniture</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">(₹50,000)</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="px-6 py-3 text-sm text-gray-900">Net Cash from Investing Activities</td>
                        <td className="px-6 py-3 text-sm text-right text-red-600">(₹50,000)</td>
                      </tr>
                      
                      <tr className="bg-blue-50">
                        <td colSpan={2} className="px-6 py-3 text-sm font-semibold text-gray-900">
                          Financing Activities
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Bank Loan Received</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">₹2,00,000</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="px-6 py-3 text-sm text-gray-900">Net Cash from Financing Activities</td>
                        <td className="px-6 py-3 text-sm text-right text-green-600">₹2,00,000</td>
                      </tr>
                      
                      <tr className="bg-green-100 font-bold">
                        <td className="px-6 py-4 text-sm text-gray-900">Net Increase in Cash</td>
                        <td className="px-6 py-4 text-sm text-right text-green-900">₹8,30,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm text-gray-900">Opening Cash Balance</td>
                        <td className="px-6 py-3 text-sm text-right text-gray-900">₹2,30,000</td>
                      </tr>
                      <tr className="bg-blue-100 font-bold">
                        <td className="px-6 py-4 text-sm text-gray-900">Closing Cash Balance</td>
                        <td className="px-6 py-4 text-sm text-right text-blue-900">₹10,60,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}