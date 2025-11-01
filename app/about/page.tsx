
"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"
import { FaEye, FaBullseye, FaWhatsapp, FaUsers, FaTools, FaHandshake } from "react-icons/fa"
import VisionMissionSection from "@/components/visionMission-Section"
import Link from "next/link"
import { motion } from "framer-motion"

// ---------- بيانات الأسئلة الشائعة ----------
const faqItems = [
  {
    question: "ما هي أنواع الكتاكيت التي تقدمها شركة القطاوي للدواجن؟",
    answer: "نقدم أفضل سلالات الكتاكيت البيضاء والبلادي والساسو والجيمزة لضمان جودة الإنتاج.",
  },
  {
    question: "هل تقدمون الدعم الفني للمربين؟",
    answer: "نعم، نقدم إرشادات ودعم فني كامل لضمان نجاح دورات التربية وتحقيق أفضل النتائج.",
  },
  {
    question: "ما هي طرق التواصل مع الشركة؟",
    answer: "يمكن التواصل معنا عبر الهاتف، الواتساب، أو نموذج الاتصال على الموقع.",
  },
  {
    question: "هل توفرون شحن للكميات الكبيرة؟",
    answer: "نعم، لدينا حلول لتوصيل الدواجن للعملاء في جميع أنحاء مصر بطريقة آمنة وفعالة.",
  },
]

// ---------- Structured Data للأسئلة ----------
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
        الأسئلة الشائعة / FAQ
      </h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => toggle(index)}
          >
            <h3 className="font-semibold text-lg">{item.question}</h3>
            {openIndex === index && (
              <p className="mt-2 text-foreground/70">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutContent() {
  const { language } = useLanguage()
  const t = translations[language]

  const values = [
    {
      title: language === "ar" ? "الجودة" : "Quality",
      description:
        language === "ar"
          ? "نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا"
          : "We commit to the highest quality standards in all our products and services",
    },
    {
      title: language === "ar" ? "الموثوقية" : "Reliability",
      description:
        language === "ar"
          ? "يمكنك الاعتماد على خدماتنا المستمرة والموثوقة"
          : "You can rely on our consistent and dependable services",
    },
    {
      title: language === "ar" ? "الابتكار" : "Innovation",
      description:
        language === "ar"
          ? "نستمر في تطوير حلول جديدة لتحسين صناعة الدواجن"
          : "We continuously develop new solutions to improve the poultry industry",
    },
    {
      title: language === "ar" ? "الاستدامة" : "Sustainability",
      description:
        language === "ar"
          ? "نعمل على ممارسات مستدامة وصديقة للبيئة"
          : "We practice sustainable and environmentally friendly operations",
    },
  ]

  const experienceStats = [
    { number: "10+", label: language === "ar" ? "سنة خبرة" : "Years of Experience" },
    { number: "10,000+", label: language === "ar" ? "عميل راضي" : "Satisfied Customers" },
    { number: "+1,000,000", label: language === "ar" ? "كتكوت تم توريده" : "Chicks Supplied" },
    { number: "100%", label: language === "ar" ? "ضمان الجودة" : "Quality Guarantee" },
  ]

  return (
    <>
      <Header />
      <PageHeader
        title={"شركة القطاوي للدواجن"}
        subtitle={
          language === "ar"
            ? "ريادتنا في مجال الدواجن تبدأ من الثقة وتنتهي بالنجاح المشترك"
            : "Learn about our story and values"
        }
      />

      <main className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Section */}
          <div className="mb-20 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  شركة القطاوي للدواجن هي شركة رائدة في مجال توزيع الدواجن في مصر. نحن متخصصون في توفير أفضل سلالات الكتاكيت والبط، مع التزامنا بأعلى معايير الجودة والرعاية الصحية.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  مهمتنا هي دعم المربين في جميع أنحاء مصر من خلال توفير دواجن صحية ومنتجة، بالإضافة إلى تقديم الإرشاد والدعم الفني لضمان نجاح دورات التربية.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  نحن نؤمن بأهمية الشراكة مع عملائنا، ونسعى دائمًا لتقديم أفضل خدمة ومنتجات تلبي احتياجاتهم وتتجاوز توقعاتهم.
                </p>
              </div>
              <img
                src="/about_us.webp?height=400&width=400"
                alt="About Al-Qattawi"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <VisionMissionSection />

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              {language === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-8 text-center hover:shadow-lg transition-all hover:border-primary/50 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              {language === "ar" ? "إحصائياتنا" : "Our Statistics"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experienceStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 p-8 text-center hover:shadow-lg transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-5xl font-bold text-primary mb-3">{stat.number}</p>
                  <p className="text-foreground/70 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection />

          {/* Contact Button */}
          <div className="mt-16 flex justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-12 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xl rounded-full shadow-lg transition-all"
              >
                {language === "ar" ? "تواصل معنا" : "Contact Us"}
              </motion.button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  )
}
