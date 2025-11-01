/**
 * File: app/(admin)/services/page.tsx
 * Purpose: Services management page
 * Maps to: GET /api/Service, POST /api/Service, PUT /api/Service/{id}, DELETE /api/Service/{id}
 */

"use client"

import { useFetch } from "@/hooks/use-fetch"
import { useMutation } from "@/hooks/use-mutation"
import { AdminTable } from "@/components/admin-table"
import Link from "next/link"
import { Plus } from "lucide-react"

interface Service {
  id: string
  name: string
  description: string
  price: number
  createdAt: string
}

export default function ServicesPage() {
  const { data: services = [], isLoading, refetch } = useFetch<Service[]>("/api/Service")
  const { mutate: deleteService } = useMutation("/api/Service", "DELETE")

  const handleDelete = async (service: Service) => {
    if (confirm(`هل تريد حذف الخدمة ${service.name}؟`)) {
      try {
        await deleteService(undefined, {
          onSuccess: () => refetch(),
        })
      } catch (error) {
        console.error("Failed to delete service:", error)
      }
    }
  }

  const columns = [
    { key: "name" as const, label: "اسم الخدمة" },
    { key: "description" as const, label: "الوصف" },
    { key: "price" as const, label: "السعر", render: (value: number) => `${value} ريال` },
    {
      key: "createdAt" as const,
      label: "التاريخ",
      render: (value: string) => new Date(value).toLocaleDateString("ar-SA"),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">الخدمات</h1>
          <p className="text-muted-foreground mt-2">إدارة خدمات الموقع</p>
        </div>
        <Link
          href="/admin/services/new"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          خدمة جديدة
        </Link>
      </div>

      <AdminTable
        columns={columns}
        data={services}
        isLoading={isLoading}
        onDelete={handleDelete}
        onEdit={(service) => {
          // Handle edit
        }}
      />
    </div>
  )
}
