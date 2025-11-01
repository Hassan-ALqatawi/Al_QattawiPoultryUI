"use client"

import { useEffect, useState } from "react"
import { useBrowserNotification } from "@/lib/browser-notification-context"
import { useLanguage } from "@/lib/language-context"

export function NotificationRequest() {
  const { requestPermission, isSupported, permission } = useBrowserNotification()
  const { language } = useLanguage()
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Show notification prompt on first visit if not already requested
    if (isSupported && permission === "default") {
      const hasAskedBefore = localStorage.getItem("notification-prompt-shown")
      if (!hasAskedBefore) {
        setTimeout(() => {
          setShowPrompt(true)
          localStorage.setItem("notification-prompt-shown", "true")
        }, 2000)
      }
    }
  }, [isSupported, permission])

  if (!showPrompt || !isSupported) return null

  const handleAllow = async () => {
    await requestPermission()
    setShowPrompt(false)
  }

  const handleDeny = () => {
    setShowPrompt(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-card border border-border rounded-lg shadow-2xl p-6 max-w-sm animate-in slide-in-from-left-4">
      <h3 className="font-bold text-foreground mb-2">
        {language === "ar" ? "تفعيل الإشعارات" : "Enable Notifications"}
      </h3>
      <p className="text-foreground/70 text-sm mb-4">
        {language === "ar"
          ? "احصل على إشعارات فورية عن تحديثات الأسعار والعروض الخاصة"
          : "Get instant notifications about price updates and special offers"}
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAllow}
          className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
        >
          {language === "ar" ? "نعم" : "Allow"}
        </button>
        <button
          onClick={handleDeny}
          className="flex-1 bg-muted text-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
        >
          {language === "ar" ? "لاحقاً" : "Later"}
        </button>
      </div>
    </div>
  )
}
