"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href
    const defaultClasses = "text-foreground hover:text-orange-500 hover:underline transition font-medium"
    const activeClasses = "text-orange-500 font-extrabold underline"

    return isActive
      ? `${activeClasses} ${defaultClasses.replace("text-foreground", "").replace("font-medium", "")}`
      : defaultClasses
  }

  const getMobileLinkClasses = (href: string) => {
    const isActive = pathname === href
    const defaultClasses = "px-4 py-2 text-foreground hover:bg-muted rounded transition font-medium"
    const activeClasses = "bg-orange-100 text-orange-600 font-bold"

    return isActive
      ? `${activeClasses} ${defaultClasses.replace("text-foreground", "").replace("font-medium", "")}`
      : defaultClasses
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group select-none">
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg"
            >
                <Image
                src="/header_image.webp" // تأكد أن الصورة داخل مجلد public
                alt="شعار القطاوي للدواجن"
                width={40} // ← ضروري
                height={40} // ← ضروري
                className="rounded-lg object-cover"
              />
              {/* <span className="text-white font-bold text-lg">🐔</span> */}
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-base sm:text-lg text-black inline group-hover:text-orange-500 transition ms-2 "
            >
               القطاوي للدواجن
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={getLinkClasses("/")}>
              الرئيسية
            </Link>
            <Link href="/chick-guidelines" className={getLinkClasses("/chick-guidelines")}>
              دليل التربية
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              من نحن
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              تواصل معنا
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden pb-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2"
          >
            <Link href="/" className={getMobileLinkClasses("/")}>
              الرئيسية
            </Link>
            <Link
              href="/chick-guidelines"
              className={getMobileLinkClasses("/chick-guidelines")}
            >
              دليل الكتاكيت
            </Link>
            <Link href="/about" className={getMobileLinkClasses("/about")}>
              من نحن
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              تواصل معنا
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  )
}