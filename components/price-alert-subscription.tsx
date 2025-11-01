"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useNotification } from "@/lib/notification-context"
import { apiClient } from "@/lib/api-client"
import { z } from "zod"

const emailSchema = z.string().email({ message: "البريد الإلكتروني غير صالح" });

export function PriceAlertSubscription() {
  const { language } = useLanguage()
  const { addNotification } = useNotification()
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("priceAlertEmail")
    if (saved) {
      setSubscribed(true)
      setEmail(saved)
    }
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      setError(language === "ar" ? "الرجاء إدخال بريد إلكتروني صالح." : "Please enter a valid email.");
      return;
    }

    setIsLoading(true)

    try {
      await apiClient.post("/api/Notifications/subscribe", { email })

      localStorage.setItem("priceAlertEmail", email)
      setSubscribed(true)

      addNotification({
        type: "success",
        title: language === "ar" ? "تم الاشتراك بنجاح" : "Subscribed Successfully",
        message: language === "ar" ? "ستتلقى تنبيهات عند تغيير الأسعار" : "You will receive alerts when prices change",
      })
    } catch (error) {
      addNotification({
        type: "error",
        title: language === "ar" ? "خطأ" : "Error",
        message: language === "ar" ? "حدث خطأ في الاشتراك. قد يكون هذا البريد مسجلاً بالفعل." : "Failed to subscribe. This email may already be registered.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      await apiClient.post("/api/Notifications/unsubscribe", { email });

      localStorage.removeItem("priceAlertEmail");
      setSubscribed(false);
      setEmail("");

      addNotification({
        type: "info",
        title: language === "ar" ? "تم الإلغاء" : "Unsubscribed",
        message:
          language === "ar"
            ? "لن تتلقى تنبيهات الأسعار بعد الآن"
            : "You will no longer receive price alerts",
      });
    } catch (error) {
      addNotification({
        type: "error",
        title: language === "ar" ? "خطأ" : "Error",
        message:
          language === "ar"
            ? "حدث خطأ أثناء إلغاء الاشتراك."
            : "Failed to unsubscribe.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🔔</span>
        <h3 className="text-xl font-bold text-foreground">
          {language === "ar" ? "تنبيهات تغيير الأسعار" : "Price Change Alerts"}
        </h3>
      </div>

      <p className="text-foreground/70 mb-4">
        {language === "ar"
          ? "اشترك للحصول على تنبيهات فورية عند تغيير أسعار منتجاتنا"
          : "Subscribe to get instant alerts when our product prices change"}
      </p>

      {!subscribed ? (
        <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={language === "ar" ? "بريدك الإلكتروني" : "Your email"}
              className={`flex-grow px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-border'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {isLoading ? "..." : language === "ar" ? "اشترك" : "Subscribe"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </form>
      ) : (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
          <div>
            <p className="text-green-800 font-semibold">{language === "ar" ? "مشترك" : "Subscribed"}</p>
            <p className="text-green-700 text-sm">{email}</p>
          </div>
          <button
            onClick={handleUnsubscribe}
            className="px-4 py-2 text-green-800 hover:bg-green-100 rounded-lg transition"
          >
            {language === "ar" ? "إلغاء" : "Unsubscribe"}
          </button>
        </div>
      )}
    </div>
  )
}