"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface BrowserNotificationContextType {
  requestPermission: () => Promise<void>
  sendNotification: (title: string, options?: NotificationOptions) => void
  isSupported: boolean
  permission: NotificationPermission | null
}

const BrowserNotificationContext = createContext<BrowserNotificationContextType | undefined>(undefined)

export function BrowserNotificationProvider({ children }: { children: React.ReactNode }) {
  const [permission, setPermission] = useState<NotificationPermission | null>(null)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if browser supports notifications
    const supported = "Notification" in window
    setIsSupported(supported)

    if (supported) {
      setPermission(Notification.permission)
    }
  }, [])

  const requestPermission = async () => {
    if (!isSupported) return

    try {
      const result = await Notification.requestPermission()
      setPermission(result)
    } catch (error) {
      console.error("Error requesting notification permission:", error)
    }
  }

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (!isSupported || permission !== "granted") return

    try {
      new Notification(title, {
        icon: "/favicon.ico",
        ...options,
      })
    } catch (error) {
      console.error("Error sending notification:", error)
    }
  }

  return (
    <BrowserNotificationContext.Provider value={{ requestPermission, sendNotification, isSupported, permission }}>
      {children}
    </BrowserNotificationContext.Provider>
  )
}

export function useBrowserNotification() {
  const context = useContext(BrowserNotificationContext)
  if (!context) {
    throw new Error("useBrowserNotification must be used within BrowserNotificationProvider")
  }
  return context
}
