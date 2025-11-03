"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"
import { useState } from "react"

export function DirectContactWidget() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isOpen, setIsOpen] = useState(false)

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: "💬",
      link: "https://wa.me/201062790104",
      color: "bg-green-500",
    },
    {
      name: "Messenger",
      icon: "📱",
      link: "https://m.me/100076990531364",
      color: "bg-blue-500",
    },
    {
      name: "Phone",
      icon: "☎️",
      link: "tel:+201068662069",
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact Buttons */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${method.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center w-14 h-14 font-bold text-xl`}
              title={method.name}
            >
              {method.icon}
            </a>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 w-16 h-16 flex items-center justify-center font-bold text-2xl animate-bounce"
      >
        💬
      </button>
    </div>
  )
}
