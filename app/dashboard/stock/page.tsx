'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Package, TrendingUp, TrendingDown, AlertCircle, Search, Plus, Download } from 'lucide-react'

interface StockItem {
  id: string
  code: string
  name: string
  category: string
  unit: string
  openingStock: number
  purchases: number
  sales: number
  closingStock: number
  rate: number
  value: number
  reorderLevel: number
  status: 'healthy' | 'low' | 'critical'
}

export default function StockPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const stockItems: StockItem[] = [
    {
      id: '1',
      code: 'RM-001',
      name: 'Raw Material A',
      category: 'Raw Materials',
      unit: 'KG',
      openingStock: 500,
      purchases: 1200,
      sales: 1100,
      closingStock: 600,
      rate: 250,
      value: 150000,
      reorderLevel: 200,
      status: 'healthy'
    },
    {
      id: '2',
      code: 'RM-002',
      name: 'Raw Material B',
      category: 'Raw Materials',
      unit: 'KG',
      openingStock: 300,
      purchases: 800,
      sales: 950,
      closingStock: 150,
      rate: 180,
      value: 27000,
      reorderLevel: 200,
      status: 'low'
    },
    {
      id: '3',
      code: 'FG-001',
      name: 'Finished Product X',
      category: 'Finished Goods',
      unit: 'PCS',
      openingStock: 200,
      purchases: 0,
      sales: 180,
      closingStock: 20,
      rate: 1500,
      value: 30000,
      reorderLevel: 50,
      status: 'critical'
    },
    {
      id: '4',
      code: 'FG-002',
      name: 'Finished Product Y',
      category: 'Finished Goods',
      unit: 'PCS',
      openingStock: 150,
      purchases: 0,
      sales: 120,
      closingStock: 30,
      rate: 2200,
      value: 66000,
      reorderLevel: 40,
      status: 'low'
    },
    {
      id: '5',
      code: 'PK-001',
      name: 'Packaging Material',
      category: 'Packaging',
      unit: 'UNITS',
      openingStock: 1000,
      purchases: 2000,
      sales: 1800,
      closingStock: 1200,
      rate: 15,
      value: 18000,
      reorderLevel: 500,
      status: 'healthy'
    },
  ]

  const filteredItems = stockItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const totalStockValue = stockItems.reduce((sum, item) => sum + item.value, 0)
  const lowStockItems = stockItems.filter(item => item.status === 'low' || item.status === 'critical').length
  const healthyItems = stockItems.filter(item => item.status === 'healthy').length

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Healthy</span>
      case 'low':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Low Stock</span>
      case 'critical':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Critical</span>
      default:
        return null
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Stock Management</h1>
            <p className="text-gray-600 mt-1">Track inventory and stock valuation</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Plus className="h-4 w-4" />
              <span>Add Item</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Stock Value</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(totalStockValue / 100000).toFixed(2)}L
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Stock Items</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{lowStockItems}</p>
                <p className="text-xs text-red-600 mt-1">Requires attention</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Healthy Stock</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{healthyItems}</p>
                <p className="text-xs text-green-600 mt-1">Above reorder level</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="Raw Materials">Raw Materials</option>
                <option value="Finished Goods">Finished Goods</option>
                <option value="Packaging">Packaging</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stock Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Opening
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purchases
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Closing
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {item.code}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.openingStock} {item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      +{item.purchases} {item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                      -{item.sales} {item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {item.closingStock} {item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{item.rate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ₹{item.value.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(item.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 border-t-2 border-gray-300">
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-sm font-bold text-gray-900 text-right">
                    Total Stock Value:
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-600">
                    ₹{totalStockValue.toLocaleString()}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Stock Movement Chart Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Stock Valuation Methods
            </h4>
            <p className="text-sm text-blue-700 mb-2">
              Supports FIFO, LIFO, and Weighted Average methods
            </p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• FIFO: First In First Out</li>
              <li>• LIFO: Last In First Out</li>
              <li>• Weighted Average: Average cost method</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6">
            <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Reorder Alerts
            </h4>
            <p className="text-sm text-orange-700 mb-2">
              Automatic notifications when stock falls below reorder level
            </p>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Email alerts to procurement team</li>
              <li>• Dashboard notifications</li>
              <li>• Suggested reorder quantities</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}