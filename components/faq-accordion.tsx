"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-right"
          >
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
            <h3 className="text-lg font-semibold text-foreground flex-1 mr-4">{item.question}</h3>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-muted/30 border-t border-border animate-in fade-in slide-in-from-top-2">
              <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
