/**
 * File: app/(admin)/uploads/page.tsx
 * Purpose: File upload manager
 * Maps to: POST /api/Upload, GET /api/Upload, DELETE /api/Upload/{id}
 */

"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useFetch } from "@/hooks/use-fetch"
import { useMutation } from "@/hooks/use-mutation"
import { Upload, Trash2, Download } from "lucide-react"

interface UploadedFile {
  id: string
  name: string
  size: number
  url: string
  createdAt: string
}

export default function UploadsPage() {
  const { data: files = [], isLoading, refetch } = useFetch<UploadedFile[]>("/api/Upload")
  const { mutate: uploadFile, isLoading: uploading } = useMutation("/api/Upload", "POST")
  const { mutate: deleteFile } = useMutation("/api/Upload", "DELETE")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      await uploadFile(formData, {
        onSuccess: () => {
          setUploadProgress(0)
          refetch()
          if (fileInputRef.current) {
            fileInputRef.current.value = ""
          }
        },
      })
    } catch (error) {
      console.error("Upload failed:", error)
    }
  }

  const handleDelete = async (file: UploadedFile) => {
    if (confirm(`هل تريد حذف ${file.name}؟`)) {
      try {
        await deleteFile(undefined, {
          onSuccess: () => refetch(),
        })
      } catch (error) {
        console.error("Delete failed:", error)
      }
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة الملفات</h1>
        <p className="text-muted-foreground mt-2">تحميل وإدارة الملفات</p>
      </div>

      {/* Upload Area */}
      <div
        className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <p className="font-medium mb-2">اسحب الملفات هنا أو انقر للتحميل</p>
        <p className="text-sm text-muted-foreground">الحد الأقصى: 50 MB</p>
        <input ref={fileInputRef} type="file" onChange={handleFileSelect} className="hidden" disabled={uploading} />
      </div>

      {uploading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">جاري التحميل...</p>
            <span className="text-sm">{uploadProgress}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} />
          </div>
        </div>
      )}

      {/* Files List */}
      <div className="space-y-2">
        <h3 className="font-semibold">الملفات المحملة</h3>
        {isLoading ? (
          <p className="text-muted-foreground">جاري التحميل...</p>
        ) : files.length === 0 ? (
          <p className="text-muted-foreground">لا توجد ملفات</p>
        ) : (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 bg-card rounded-lg border border-border"
              >
                <div className="flex-1">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(file.size)} • {new Date(file.createdAt).toLocaleDateString("ar-SA")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={file.url}
                    download
                    className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-600 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => handleDelete(file)}
                    className="p-2 hover:bg-red-500/10 rounded-lg text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
