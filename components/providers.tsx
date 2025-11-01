"use client"

import type React from "react"
import { NotificationProvider } from "@/lib/notification-context"
import { NotificationToast } from "@/components/notification-toast"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      {children}
      <NotificationToast />
    </NotificationProvider>
  )
}