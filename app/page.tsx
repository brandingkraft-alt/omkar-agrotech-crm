'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  FileText, 
  TrendingUp, 
  DollarSign, 
  Package, 
  BarChart3,
  Upload,
  MessageSquare,
  BookOpen,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Omkar Agrotech</h1>
                <p className="text-sm text-gray-600">Accounting CRM System</p>
              </div>
            </div>
            <Link 
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Accounting Solution
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your financial operations with automated bookkeeping, 
            real-time reporting, and comprehensive transaction management
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/dashboard"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Get Started
            </Link>
            <Link 
              href="/dashboard/transactions"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition text-lg font-semibold border-2 border-blue-600"
            >
              View Transactions
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Document Upload
            </h4>
            <p className="text-gray-600">
              Upload invoices, receipts, and transaction documents with automatic categorization
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Automated Bookkeeping
            </h4>
            <p className="text-gray-600">
              Maintain journal, ledger, and trial balance with double-entry automation
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Financial Reports
            </h4>
            <p className="text-gray-600">
              Generate P&L, balance sheet, and cash flow statements instantly
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Stock Management
            </h4>
            <p className="text-gray-600">
              Track inventory with real-time valuation and comprehensive analysis
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              GST Compliance
            </h4>
            <p className="text-gray-600">
              Automatic GST calculation and compliance with Indian tax regulations
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Analytics Dashboard
            </h4>
            <p className="text-gray-600">
              Real-time insights with interactive charts and trend analysis
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Transaction Messages
            </h4>
            <p className="text-gray-600">
              Communicate about transactions with team members and maintain audit trail
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-pink-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Search & Filter
            </h4>
            <p className="text-gray-600">
              Powerful search functionality to find any transaction or document instantly
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Automated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Real-time</div>
              <div className="text-blue-100">Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Secure</div>
              <div className="text-blue-100">Data Storage</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Omkar Agrotech Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Built with Next.js, TypeScript, and Supabase
          </p>
        </div>
      </footer>
    </div>
  )
}