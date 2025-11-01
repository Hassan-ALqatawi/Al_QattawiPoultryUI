/**
 * File: app/(admin)/notifications/page.tsx
 * Purpose: Notifications management and push notification sending
 * Maps to: POST /api/Notifications/send, GET /api/Notifications/publickey
 */

"use client"

import type React from "react"

import { useState } from "react"
import { useMutation } from "@/hooks/use-mutation"
import { Send } from "lucide-react"

export default function NotificationsPage() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [targetUsers, setTargetUsers] = useState("all")
  const { mutate: sendNotification, isLoading } = useMutation("/api/Notifications/send", "POST")

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await sendNotification({
        title,
        message,
        targetUsers,
      })
      setTitle("")
      setMessage("")
    } catch (error) {
      console.error("Failed to send notification:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">الإشعارات</h1>
        <p className="text-muted-foreground mt-2">إرسال إشعارات للمستخدمين</p>
      </div>

      <div className="bg-card rounded-lg border border-border p-6 max-w-2xl">
        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">عنوان الإشعار</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="عنوان الإشعار"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">نص الإشعار</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              rows={4}
              placeholder="نص الإشعار"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">المستقبلون</label>
            <select
              value={targetUsers}
              onChange={(e) => setTargetUsers(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">جميع المستخدمين</option>
              <option value="subscribed">المشتركون فقط</option>
              <option value="active">المستخدمون النشطون</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {isLoading ? "جاري الإرسال..." : "إرسال الإشعار"}
          </button>
        </form>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          ملاحظة: تأكد من أن المستخدمين قد وافقوا على استقبال الإشعارات قبل الإرسال.
        </p>
      </div>
    </div>
  )
}
