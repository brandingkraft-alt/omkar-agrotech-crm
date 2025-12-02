'use client'

import { useState, useCallback } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Upload, File, X, Check, AlertCircle, FileText, Image as ImageIcon } from 'lucide-react'

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: 'uploading' | 'processing' | 'completed' | 'error'
  progress: number
  extractedData?: {
    amount?: number
    date?: string
    vendor?: string
    category?: string
  }
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    processFiles(droppedFiles)
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      processFiles(selectedFiles)
    }
  }, [])

  const processFiles = (fileList: File[]) => {
    const newFiles: UploadedFile[] = fileList.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      progress: 0
    }))

    setFiles(prev => [...prev, ...newFiles])

    // Simulate upload and processing
    newFiles.forEach((file) => {
      simulateUpload(file.id)
    })
  }

  const simulateUpload = (fileId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      
      setFiles(prev => prev.map(f => 
        f.id === fileId 
          ? { ...f, progress, status: progress === 100 ? 'processing' : 'uploading' }
          : f
      ))

      if (progress === 100) {
        clearInterval(interval)
        setTimeout(() => {
          setFiles(prev => prev.map(f => 
            f.id === fileId 
              ? { 
                  ...f, 
                  status: 'completed',
                  extractedData: {
                    amount: Math.floor(Math.random() * 100000) + 1000,
                    date: new Date().toISOString().split('T')[0],
                    vendor: 'ABC Suppliers',
                    category: 'Purchase'
                  }
                }
              : f
          ))
        }, 2000)
      }
    }, 300)
  }

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <ImageIcon className="h-8 w-8 text-blue-500" />
    return <FileText className="h-8 w-8 text-gray-500" />
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="h-5 w-5 text-green-500" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upload Documents</h1>
          <p className="text-gray-600 mt-1">Upload invoices, receipts, and transaction documents</p>
        </div>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`bg-white rounded-xl shadow-sm border-2 border-dashed p-12 text-center transition ${
            isDragging 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Upload className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drop files here or click to upload
            </h3>
            <p className="text-gray-600 mb-6">
              Supports PDF, JPG, PNG, Excel, CSV (Max 10MB per file)
            </p>
            <label className="cursor-pointer">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                Select Files
              </span>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.xlsx,.xls,.csv"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Uploaded Files ({files.length})
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {files.map((file) => (
                <div key={file.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* File Icon */}
                    <div className="flex-shrink-0">
                      {getFileIcon(file.type)}
                    </div>

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {file.name}
                          </p>
                          {getStatusIcon(file.status)}
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-2">
                        {formatFileSize(file.size)}
                      </p>

                      {/* Progress Bar */}
                      {(file.status === 'uploading' || file.status === 'processing') && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>
                              {file.status === 'uploading' ? 'Uploading...' : 'Processing...'}
                            </span>
                            <span>{file.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${file.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Extracted Data */}
                      {file.status === 'completed' && file.extractedData && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                          <p className="text-sm font-medium text-green-900 mb-2">
                            ✓ Data Extracted Successfully
                          </p>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-gray-600">Amount:</span>
                              <span className="ml-2 font-semibold text-gray-900">
                                ₹{file.extractedData.amount?.toLocaleString()}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Date:</span>
                              <span className="ml-2 font-semibold text-gray-900">
                                {file.extractedData.date}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Vendor:</span>
                              <span className="ml-2 font-semibold text-gray-900">
                                {file.extractedData.vendor}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Category:</span>
                              <span className="ml-2 font-semibold text-gray-900">
                                {file.extractedData.category}
                              </span>
                            </div>
                          </div>
                          <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Create Transaction →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-2">Automatic OCR</h4>
            <p className="text-sm text-blue-700">
              Documents are automatically scanned to extract transaction details
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-green-900 mb-2">Smart Categorization</h4>
            <p className="text-sm text-green-700">
              AI automatically categorizes transactions based on content
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h4 className="font-semibold text-purple-900 mb-2">Secure Storage</h4>
            <p className="text-sm text-purple-700">
              All documents are encrypted and stored securely in the cloud
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}