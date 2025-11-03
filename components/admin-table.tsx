
"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Trash2, Edit2, Eye } from "lucide-react"

interface Column<T> {
  key: keyof T
  label: string
  render?: (value: any, row: T) => React.ReactNode
}

interface AdminTableProps<T> {
  columns: Column<T>[]
  data: T[]
  isLoading?: boolean
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  onView?: (item: T) => void
  onPriceEdit?: (item: T) => void
  pageSize?: number
}

// ✅ دعم id كـ number أو string
export function AdminTable<T extends { id: string | number }>({
  columns,
  data,
  isLoading,
  onEdit,
  onDelete,
  onView,
  onPriceEdit,
  pageSize = 10,
}: AdminTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  // تأكد أن data مصفوفة دائمًا
  const safeData = Array.isArray(data) ? data : []

  const filteredData = safeData.filter((item) =>
    columns.some((col) => String(item[col.key] ?? "").toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize)

  return (
    <div className="space-y-4">
      {/* 🔍 مربع البحث */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="بحث..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className="flex-1 px-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* 📋 الجدول */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} className="px-6 py-3 text-right text-sm font-semibold">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-sm font-semibold">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-muted-foreground">
                  جاري التحميل...
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-muted-foreground">
                  لا توجد بيانات
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => (
                <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  {columns.map((col) => (
                    <td key={String(col.key)} className="px-6 py-4 text-sm">
                      {col.render ? col.render(item[col.key], item) : String(item[col.key] ?? "")}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-600 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                     {onEdit && (
  <button
    onClick={() => onEdit(item)}
    className="p-2 hover:bg-green-500/10 rounded-lg text-green-600 transition-colors"
    title="تعديل المنتج"
  >
    <Edit2 className="w-4 h-4" />
  </button>
)}
{onPriceEdit && (
  <button
    onClick={() => onPriceEdit(item)}
    className="p-2 hover:bg-yellow-500/10 rounded-lg text-yellow-600 transition-colors"
    title="تعديل السعر"
  >
    💰
  </button>
)}

                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="p-2 hover:bg-red-500/10 rounded-lg text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 🔢 الترقيم */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض {startIndex + 1} إلى {Math.min(startIndex + pageSize, filteredData.length)} من {filteredData.length}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 hover:bg-muted rounded-lg disabled:opacity-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  currentPage === page ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-muted rounded-lg disabled:opacity-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
