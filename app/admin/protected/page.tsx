// /**
//  * File: app/(admin)/protected/page.tsx
//  * Purpose: Protected items (medicines/products) management
//  * Maps to: GET /api/Protected, POST /api/Protected, PUT /api/Protected/{id}, DELETE /api/Protected/{id}
//  */

// "use client"

// import { useFetch } from "@/hooks/use-fetch"
// import { useMutation } from "@/hooks/use-mutation"
// import { AdminTable } from "@/components/admin-table"
// import Link from "next/link"
// import { Plus } from "lucide-react"

// interface ProtectedItem {
//   id: number
//   name: string
//   descriptionn?: string | null
//   image?: string
//   price: number
//   serviceId: number
// }


// export default function ProtectedPage() {
//   const { data, isLoading, refetch } = useFetch<ProtectedItem[]>("/api/Protacted/GetAllChicks")
//    const items = Array.isArray(data) ? data : []

//   const { mutate: deleteItem } = useMutation("/api/Protected", "DELETE")

//   const handleDelete = async (item: ProtectedItem) => {
//     if (confirm(`هل تريد حذف ${item.name}؟`)) {
//       try {
//         await deleteItem(undefined, {
//           onSuccess: () => refetch(),
//         })
//       } catch (error) {
//         console.error("Failed to delete item:", error)
//       }
//     }
//   }

//  const columns = [
//   { key: "name" as const, label: "الاسم" },
//   { key: "price" as const, label: "السعر", render: (value: number) => `${value} ريال` },
//   {
//     key: "image" as const,
//     label: "الصورة",
//     render: (value: string) => (
//       <img
//         src={value}
//         alt="صورة المنتج"
//         className="w-12 h-12 object-cover rounded-md border"
//       />
//     ),
//   },
//   {
//     key: "serviceId" as const,
//     label: "رقم الخدمة",
//   },
// ]


//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">المنتجات</h1>
//           <p className="text-muted-foreground mt-2">إدارة الأدوية والمنتجات</p>
//         </div>
//         <Link
//           href="/admin/protected/new"
//           className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
//         >
//           <Plus className="w-5 h-5" />
//           منتج جديد
//         </Link>
//       </div>

//         <AdminTable
//         columns={columns}
//         data={Array.isArray(items) ? items : []}
//         isLoading={isLoading}
//         onDelete={handleDelete}
//         onEdit={(item) => console.log("تعديل:", item)}
//       />
//     </div>
//   )
// }









"use client"

import { useState } from "react"
import { useFetch } from "@/hooks/use-fetch"
import { useMutation } from "@/hooks/use-mutation"
import { AdminTable } from "@/components/admin-table"
import Link from "next/link"
import { Plus } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface ProtectedItem {
  id: number
  name: string
  descriptionn?: string | null
  image?: string
  price: number
  serviceId: number
  imageFile?: File // ✅ مضافة لدعم رفع الصورة
}

export default function ProtectedPage() {
  // 🧠 جلب البيانات
  const { data, isLoading, refetch } = useFetch<ProtectedItem[]>("/api/Protacted/GetAllChicks")
  const items = Array.isArray(data) ? data : []

  // 🧩 عمليات CRUD
  const [newItem, setNewItem] = useState<ProtectedItem | null>(null)
  const { mutate: deleteItem } = useMutation("/api/Protacted/delete", "DELETE")
  // ✅ حالتان للنافذتين
  const [editItem, setEditItem] = useState<ProtectedItem | null>(null)
  const [editPriceItem, setEditPriceItem] = useState<ProtectedItem | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

 // 🗑 حذف المنتج
const handleDelete = async (item: ProtectedItem) => {
  if (!item) return

  if (confirm(`هل تريد حذف ${item.name}؟`)) {
    try {
      await apiClient.delete(`/api/Protacted/Delete/${item.id}`)
      alert("✅ تم حذف المنتج بنجاح")
      refetch()
    } catch (error) {
      console.error("Delete failed:", error)
      alert("❌ فشل في حذف المنتج")
    }
  }
}


  // 📋 أعمدة الجدول
  const columns = [
    { key: "name" as const, label: "الاسم" },
    { key: "price" as const, label: "السعر", render: (value: number) => `${value} ريال` },
    {
      key: "image" as const,
      label: "الصورة",
      render: (value: string) =>
        value ? (
          <img
            src={value}
            alt="صورة المنتج"
            className="w-12 h-12 object-cover rounded-md border"
          />
        ) : (
          <span className="text-gray-400">لا توجد</span>
        ),
    },
    { key: "serviceId" as const, label: "رقم الخدمة" },
  ]

  // 🧩 حفظ تعديل المنتج (مع الصورة) باستخدام apiClient
const handleSaveEdit = async () => {
  if (!editItem) return

  try {
    // إرسال JSON كامل كما يتوقعه السيرفر
    const res = await apiClient.put(`/api/Protacted/update`, {
      id: editItem.id,
      name: editItem.name,
      descriptionn: editItem.descriptionn || "", // أو القيمة الحالية
      image: editItem.image || "", // رابط الصورة
      price: editItem.price,
      serviceId: editItem.serviceId
    })

    alert("✅ تم حفظ التعديلات بنجاح")
    setEditItem(null)
    setPreview(null)
    refetch()
  } catch (error) {
    console.error("Update failed:", error)
    alert("❌ حدث خطأ أثناء الحفظ")
  }
}

  // 💰 حفظ تعديل السعر فقط
  const handleSavePrice = async () => {
  if (!editPriceItem) return
  try {
    const endpoint = `/api/Protacted/UpdatePrice/${editPriceItem.id}`
    const body = { id: editPriceItem.id, price: editPriceItem.price }

    const res = await apiClient.put(endpoint, body)

    if (res) {
      alert("✅ تم تعديل السعر بنجاح")
      setEditPriceItem(null)
      refetch()
    } else {
      alert("❌ حدث خطأ أثناء تعديل السعر")
    }
  } catch (error) {
    console.error("Price update failed:", error)
  }
}

  // 🔄 عرض نافذة تعديل المنتج
  const openEditModal = (item: ProtectedItem) => {
    setEditItem(item)
    setPreview(item.image || null)
  }

  // 🔄 عرض نافذة تعديل السعر فقط
  const openPriceModal = (item: ProtectedItem) => setEditPriceItem(item)


  // ➕ إضافة منتج جديد
const handleAddNew = async () => {
  if (!newItem) return

  try {
    // إرسال JSON كامل كما يتوقعه السيرفر
    const res = await apiClient.post(`/api/Protacted/AddProtact`, {
      id: 0, // عند الإضافة يمكن تركه 0
      name: newItem.name,
      descriptionn: newItem.descriptionn || "",
      image: newItem.image || "", // رابط الصورة
      price: newItem.price,
      serviceId: newItem.serviceId,
    })

    alert("✅ تم إضافة المنتج بنجاح")
    setNewItem(null)
    setPreview(null)
    refetch()
  } catch (error) {
    console.error("Add new product failed:", error)
    alert("❌ حدث خطأ أثناء إضافة المنتج")
  }
}

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">المنتجات</h1>
          <p className="text-muted-foreground mt-2">إدارة الأدوية والمنتجات</p>
        </div>
        <button
          onClick={() => setNewItem({ id: 0, name: "", price: 0, serviceId: 0 })}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          منتج جديد
        </button>
      </div>

      {/* 🧩 الجدول */}
      <AdminTable
        columns={columns}
        data={items}
        isLoading={isLoading}
        onDelete={handleDelete}
        onEdit={openEditModal}
        onPriceEdit={openPriceModal}
      />



          {/* 🪟 نافذة إضافة منتج جديد */}
      {newItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">إضافة منتج جديد</h2>

            <label className="block text-sm font-medium">الاسم</label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />

            <label className="block text-sm font-medium">السعر</label>
            <input
              type="number"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: parseFloat(e.target.value) })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <label className="block text-sm font-medium">رقم الخدمة</label>
            <input
              type="number"
              value={newItem.serviceId}
              onChange={(e) =>
                setNewItem({ ...newItem, serviceId: parseInt(e.target.value) })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <label className="block text-sm font-medium">الصورة</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setNewItem({ ...newItem, imageFile: file })
                  setPreview(URL.createObjectURL(file))
                }
              }}
              className="w-full border rounded-lg px-3 py-2"
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-32 h-32 object-cover rounded-lg mt-2"
              />
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => {
                  setNewItem(null)
                  setPreview(null)
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                إلغاء
              </button>
              <button
                onClick={handleAddNew}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}




      {/* 🪟 نافذة تعديل المنتج */}
      {editItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">تعديل المنتج</h2>

            <label className="block text-sm font-medium">الاسم</label>
            <input
              type="text"
              value={editItem.name}
              onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />

            <label className="block text-sm font-medium">السعر</label>
            <input
              type="number"
              value={editItem.price}
              onChange={(e) =>
                setEditItem({ ...editItem, price: parseFloat(e.target.value) })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <label className="block text-sm font-medium">الصورة</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setEditItem({ ...editItem, imageFile: file })
                  setPreview(URL.createObjectURL(file))
                }
              }}
              className="w-full border rounded-lg px-3 py-2"
            />

            {/* 👁 عرض المعاينة */}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-32 h-32 object-cover rounded-lg mt-2 border"
              />
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => {
                  setEditItem(null)
                  setPreview(null)
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 💰 نافذة تعديل السعر فقط */}
      {editPriceItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">تعديل السعر</h2>

            <label className="block text-sm font-medium">السعر الجديد</label>
            <input
              type="number"
              value={editPriceItem.price}
              onChange={(e) =>
                setEditPriceItem({
                  ...editPriceItem,
                  price: parseFloat(e.target.value),
                })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setEditPriceItem(null)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                إلغاء
              </button>
              <button
                onClick={handleSavePrice}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                حفظ السعر
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
