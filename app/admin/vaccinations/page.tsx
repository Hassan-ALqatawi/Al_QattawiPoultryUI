/**
 * File: app/(admin)/vaccinations/page.tsx
 * Purpose: Vaccination programs timeline editor
 * Maps to: GET /api/VaccinationProgram, POST /api/VaccinationProgram, PUT /api/VaccinationProgram/{id}
 */

"use client"

import type React from "react"

import { useState } from "react"
import { useFetch } from "@/hooks/use-fetch"
import { useMutation } from "@/hooks/use-mutation"
import { Plus, Trash2 } from "lucide-react"

interface VaccinationDay {
  day: number
  vaccine: string
  method: string
  notes: string
}

interface VaccinationProgram {
  id: string
  name: string
  days: VaccinationDay[]
  createdAt: string
}

export default function VaccinationsPage() {
  const { data: programs = [], isLoading, refetch } = useFetch<VaccinationProgram[]>("/api/VaccinationProgram")
  const { mutate: saveProgram } = useMutation("/api/VaccinationProgram", "POST")
  const [editingProgram, setEditingProgram] = useState<VaccinationProgram | null>(null)
  const [days, setDays] = useState<VaccinationDay[]>([])

  const handleAddDay = () => {
    setDays([...days, { day: 0, vaccine: "", method: "", notes: "" }])
  }

  const handleRemoveDay = (index: number) => {
    setDays(days.filter((_, i) => i !== index))
  }

  const handleDayChange = (index: number, field: keyof VaccinationDay, value: any) => {
    const newDays = [...days]
    newDays[index] = { ...newDays[index], [field]: value }
    setDays(newDays)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await saveProgram(
        {
          name: editingProgram?.name || "برنامج تحصين جديد",
          days,
        },
        {
          onSuccess: () => {
            setEditingProgram(null)
            setDays([])
            refetch()
          },
        },
      )
    } catch (error) {
      console.error("Failed to save program:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">برامج التحصين</h1>
          <p className="text-muted-foreground mt-2">إدارة جداول التحصين</p>
        </div>
        <button
          onClick={() => {
            setEditingProgram({ id: "", name: "", days: [], createdAt: "" })
            setDays([])
          }}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          برنامج جديد
        </button>
      </div>

      {editingProgram ? (
        <div className="bg-card rounded-lg border border-border p-6">
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">اسم البرنامج</label>
              <input
                type="text"
                value={editingProgram.name}
                onChange={(e) => setEditingProgram({ ...editingProgram, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="اسم البرنامج"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">أيام التحصين</h3>
                <button
                  type="button"
                  onClick={handleAddDay}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Plus className="w-4 h-4" />
                  إضافة يوم
                </button>
              </div>

              {days.map((day, index) => (
                <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">اليوم</label>
                      <input
                        type="number"
                        value={day.day}
                        onChange={(e) => handleDayChange(index, "day", Number.parseInt(e.target.value))}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="اليوم"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">اللقاح</label>
                      <input
                        type="text"
                        value={day.vaccine}
                        onChange={(e) => handleDayChange(index, "vaccine", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="اسم اللقاح"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">طريقة الإعطاء</label>
                    <input
                      type="text"
                      value={day.method}
                      onChange={(e) => handleDayChange(index, "method", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="طريقة الإعطاء"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">ملاحظات</label>
                    <textarea
                      value={day.notes}
                      onChange={(e) => handleDayChange(index, "notes", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      rows={2}
                      placeholder="ملاحظات إضافية"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveDay(index)}
                    className="flex items-center gap-2 text-destructive hover:underline"
                  >
                    <Trash2 className="w-4 h-4" />
                    حذف
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                حفظ البرنامج
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingProgram(null)
                  setDays([])
                }}
                className="flex-1 bg-muted text-foreground py-2 rounded-lg font-medium hover:bg-muted/80 transition-colors"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid gap-4">
          {programs.map((program) => (
            <div key={program.id} className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{program.name}</h3>
                  <p className="text-sm text-muted-foreground">{program.days.length} أيام</p>
                </div>
                <button
                  onClick={() => {
                    setEditingProgram(program)
                    setDays(program.days)
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  تعديل
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
