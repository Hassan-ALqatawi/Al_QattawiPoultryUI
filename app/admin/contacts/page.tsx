/**
 * File: app/(admin)/contacts/page.tsx
 * Purpose: Contacts management page with list, search, and actions
 * Maps to: GET /api/Contact, DELETE /api/Contact/{id}
 */

"use client"
import { useFetch } from "@/hooks/use-fetch"
import { useMutation } from "@/hooks/use-mutation"
import { AdminTable } from "@/components/admin-table"
import Link from "next/link"
import { Plus } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export default function ContactsPage() {
  const { data: contacts = [], isLoading, refetch } = useFetch<Contact[]>("/api/Contact")
  const { mutate: deleteContact } = useMutation("/api/Contact", "DELETE")

  const handleDelete = async (contact: Contact) => {
    if (confirm(`هل تريد حذف الرسالة من ${contact.name}؟`)) {
      try {
        await deleteContact(undefined, {
          onSuccess: () => refetch(),
        })
      } catch (error) {
        console.error("Failed to delete contact:", error)
      }
    }
  }

  const columns = [
    { key: "name" as const, label: "الاسم" },
    { key: "email" as const, label: "البريد الإلكتروني" },
    { key: "phone" as const, label: "الهاتف" },
    {
      key: "message" as const,
      label: "الرسالة",
      render: (value: string) => <span className="truncate max-w-xs">{value}</span>,
    },
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
          <h1 className="text-3xl font-bold">الرسائل</h1>
          <p className="text-muted-foreground mt-2">إدارة رسائل العملاء</p>
        </div>
        <Link
          href="/admin/contacts/new"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          رسالة جديدة
        </Link>
      </div>

      <AdminTable
        columns={columns}
        data={contacts}
        isLoading={isLoading}
        onDelete={handleDelete}
        onView={(contact) => {
          // Handle view
        }}
      />
    </div>
  )
}
