/**
 * File: app/(admin)/page.tsx
 * Purpose: Admin dashboard overview with KPIs and quick actions
 * Maps to: GET /api/Analytics, GET /api/Analytics/active-users
 */

"use client"

import { useFetch } from "@/hooks/use-fetch"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import Link from "next/link"

interface Analytics {
  totalContacts: number
  totalServices: number
  totalProducts: number
  activeUsers: number
}

interface ChartData {
  name: string
  value: number
}



export default function AdminDashboard() {
  const { data: analytics, isLoading } = useFetch<Analytics>("/api/Analytics")
  const { data: activeUsers, isLoading: usersLoading } = useFetch<ChartData[]>("/api/Analytics/active-users")

  const kpis = [
    { label: "إجمالي الرسائل", value: analytics?.totalContacts || 0, color: "bg-blue-500" },
    { label: "الخدمات", value: analytics?.totalServices || 0, color: "bg-green-500" },
    { label: "المنتجات", value: analytics?.totalProducts || 0, color: "bg-orange-500" },
    { label: "المستخدمون النشطون", value: analytics?.activeUsers || 0, color: "bg-purple-500" },
  ]
console.log("🔹 activeUsers:", activeUsers)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">مرحبا بك في لوحة التحكم</h1>
        <p className="text-muted-foreground mt-2">إدارة محتوى موقع القطاوي للدواجن</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                <p className="text-3xl font-bold mt-2">{kpi.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg ${kpi.color} opacity-20`} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4">النشاط الأسبوعي</h3>
          {!usersLoading && activeUsers ? (
            <ResponsiveContainer width="100%" height={300}>
<LineChart
  data={
    Array.isArray(activeUsers)
      ? activeUsers
      : [
          { name: "الإجمالي", value: activeUsers?.totalUsers || 0 },
          { name: "النشطون", value: activeUsers?.activeUsers || 0 },
        ]
  }
>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ff6600" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-300 bg-muted rounded animate-pulse" />
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4">الإجراءات السريعة</h3>
          <div className="space-y-3">
            <Link
              href="/admin/contacts"
              className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <p className="font-medium text-primary">عرض الرسائل</p>
              <p className="text-sm text-muted-foreground">إدارة رسائل العملاء</p>
            </Link>
            <Link
              href="/admin/services"
              className="block p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors"
            >
              <p className="font-medium text-green-600">إضافة خدمة جديدة</p>
              <p className="text-sm text-muted-foreground">إنشاء خدمة جديدة</p>
            </Link>
            <Link
              href="/admin/notifications"
              className="block p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
            >
              <p className="font-medium text-purple-600">إرسال إشعار</p>
              <p className="text-sm text-muted-foreground">إرسال إشعار للمستخدمين</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
