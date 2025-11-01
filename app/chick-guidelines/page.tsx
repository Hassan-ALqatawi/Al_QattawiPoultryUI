// "use client"

// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { PageHeader } from "@/components/page-header"
// import { FAQAccordion } from "@/components/faq-accordion"
// import { useLanguage } from "@/lib/language-context"
// import { usePrintOrPdf } from "@/lib/use-print-pdf"
// import Link from "next/link"
// import { Download, Phone } from "lucide-react"

// export default function ChickGuidelinesPage() {
//   const { language } = useLanguage()
//   const { downloadPdf } = usePrintOrPdf()

//   const isArabic = language === "ar"

//   // Daily plan data - 45 days
//   const dailyPlan = [
//     {
//       day: 1,
//       stage: "حضانة",
//       temp: "34–35",
//       feed: "ماء + محلول سكري + فيتامين C",
//       vaccination: "—",
//       notes: "تأكد من التدفئة الجيدة، راقب توزيع الكتاكيت",
//     },
//     {
//       day: 2,
//       stage: "حضانة",
//       temp: "34",
//       feed: "بادئ (Starter 23%)",
//       vaccination: "فيتامين AD3E",
//       notes: "تأكد أن الكتاكيت بدأت تأكل وتشرب",
//     },
//     { day: 3, stage: "حضانة", temp: "33", feed: "بادئ", vaccination: "—", notes: "نظف المساقي والمعالف" },
//     {
//       day: 4,
//       stage: "حضانة",
//       temp: "33",
//       feed: "بادئ",
//       vaccination: "فيتامينات + أملاح معدنية",
//       notes: "تأكد من جفاف الفرشة",
//     },
//     { day: 5, stage: "حضانة", temp: "32", feed: "بادئ", vaccination: "—", notes: "لاحظ الحركة والنشاط" },
//     { day: 6, stage: "حضانة", temp: "32", feed: "بادئ", vaccination: "—", notes: "احسب النفوق وسجله" },
//     {
//       day: 7,
//       stage: "حضانة",
//       temp: "32",
//       feed: "بادئ",
//       vaccination: "تحصين نيوكاسل (لاسوتا) بالماء",
//       notes: "أغلق التهوية أثناء التحصين",
//     },
//     {
//       day: 8,
//       stage: "حضانة",
//       temp: "31",
//       feed: "بادئ",
//       vaccination: "فيتامين C بعد التحصين",
//       notes: "افتح التهوية بعد ساعتين من التحصين",
//     },
//     { day: 9, stage: "حضانة", temp: "31", feed: "بادئ", vaccination: "—", notes: "أضف نشارة جديدة إن لزم" },
//     { day: 10, stage: "حضانة", temp: "30", feed: "بادئ", vaccination: "—", notes: "راقب استهلاك العلف والماء" },
//     { day: 11, stage: "حضانة", temp: "30", feed: "بادئ", vaccination: "فيتامين AD3E", notes: "الفحص العام للصحة" },
//     { day: 12, stage: "حضانة", temp: "29", feed: "بادئ", vaccination: "—", notes: "تأكد من توزيع الحرارة" },
//     { day: 13, stage: "حضانة", temp: "29", feed: "بادئ", vaccination: "—", notes: "قلل الحرارة تدريجيًا" },
//     {
//       day: 14,
//       stage: "حضانة",
//       temp: "29",
//       feed: "بادئ",
//       vaccination: "تحصين جمبورو",
//       notes: "بالماء النظيف الخالي من الكلور",
//     },
//     { day: 15, stage: "حضانة", temp: "28", feed: "بادئ", vaccination: "فيتامين C", notes: "بعد التحصين مباشرة" },
//     { day: 16, stage: "حضانة", temp: "28", feed: "بادئ", vaccination: "—", notes: "التهوية الجيدة ضرورية" },
//     { day: 17, stage: "حضانة", temp: "28", feed: "بادئ", vaccination: "—", notes: "نظف المعالف جيدًا" },
//     {
//       day: 18,
//       stage: "حضانة",
//       temp: "27",
//       feed: "بادئ",
//       vaccination: "تحصين نيوكاسل (لاسوتا)",
//       notes: "بالماء النظيف",
//     },
//     { day: 19, stage: "حضانة", temp: "27", feed: "بادئ", vaccination: "—", notes: "أضف فيتامينات في اليوم التالي" },
//     { day: 20, stage: "حضانة", temp: "27", feed: "بادئ", vaccination: "فيتامين AD3E", notes: "نهاية مرحلة الحضانة" },
//     {
//       day: 21,
//       stage: "نمو",
//       temp: "26",
//       feed: "نامي (Grower 21%)",
//       vaccination: "—",
//       notes: "قلل الحرارة إلى 26 ووسع المساحة",
//     },
//     { day: 22, stage: "نمو", temp: "26", feed: "نامي", vaccination: "—", notes: "راقب وزن العينة" },
//     { day: 23, stage: "نمو", temp: "25", feed: "نامي", vaccination: "فيتامينات", notes: "مرة أسبوعيًا" },
//     { day: 24, stage: "نمو", temp: "25", feed: "نامي", vaccination: "—", notes: "تهوية قوية بلا تيار هواء مباشر" },
//     { day: 25, stage: "نمو", temp: "25", feed: "نامي", vaccination: "—", notes: "نظافة يومية" },
//     { day: 26, stage: "نمو", temp: "25", feed: "نامي", vaccination: "—", notes: "وزن عينة للتقييم" },
//     { day: 27, stage: "نمو", temp: "24", feed: "نامي", vaccination: "—", notes: "استقرار الحرارة" },
//     { day: 28, stage: "نمو", temp: "24", feed: "نامي", vaccination: "تحصين جمبورو", notes: "بالماء" },
//     { day: 29, stage: "نمو", temp: "24", feed: "نامي", vaccination: "فيتامين C", notes: "بعد التحصين" },
//     { day: 30, stage: "نمو", temp: "23", feed: "نامي", vaccination: "—", notes: "فحص الريش والنشاط" },
//     { day: 31, stage: "نمو", temp: "23", feed: "نامي", vaccination: "تحصين نيوكاسل", notes: "بالماء" },
//     { day: 32, stage: "نمو", temp: "23", feed: "نامي", vaccination: "—", notes: "نهاية مرحلة النمو" },
//     {
//       day: 33,
//       stage: "تسمين",
//       temp: "22",
//       feed: "ناهي (Finisher 19%)",
//       vaccination: "—",
//       notes: "تغيير العلف تدريجيًا على 3 أيام",
//     },
//     { day: 34, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "راقب استهلاك العلف" },
//     { day: 35, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "فيتامينات", notes: "أسبوعية" },
//     { day: 36, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "تأكد من التهوية" },
//     { day: 37, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "راقب الوزن" },
//     { day: 38, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "قلل الضوء قليلًا" },
//     { day: 39, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "جهّز مكان البيع" },
//     { day: 40, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "فيتامين AD3E", notes: "لتحسين المناعة" },
//     { day: 41, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "وزن عينة جديدة" },
//     { day: 42, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "راقب النفوق" },
//     { day: 43, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "التحضير للنقل" },
//     { day: 44, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "أوقف العلف قبل التسويق بـ12 ساعة" },
//     {
//       day: 45,
//       stage: "تسويق",
//       temp: "—",
//       feed: "—",
//       vaccination: "—",
//       notes: "التسويق 🎯 (الوزن المتوقع 1.8–2.2 كجم)",
//     },
//   ]

//   const stages = [
//     {
//       title: "الحضانة (0–21 يوم)",
//       description: "رعاية مكثفة — تدفئة، تحصين، تغذية بادئة",
//       details: ["درجة حرارة: 34–27°م", "علف بادئ 23% بروتين", "تحصينات: نيوكاسل وجمبورو", "مراقبة مستمرة للصحة"],
//     },
//     {
//       title: "النمو (22–32 يوم)",
//       description: "بناء جسم وريش، ضبط حرارة وتهوية",
//       details: ["درجة حرارة: 26–23°م", "علف نامي 21% بروتين", "توسيع المساحة تدريجيًا", "تحصينات إضافية"],
//     },
//     {
//       title: "التسمين والتسويق (33–45 يوم)",
//       description: "تقليل البروتين تدريجيًا، تحسين تحويل العلف",
//       details: ["درجة حرارة: 22°م", "علف ناهي 19% بروتين", "تحضير للتسويق", "الوزن المتوقع: 1.8–2.2 كجم"],
//     },
//   ]

//   const quickStats = [
//     { label: "النفوق المستهدف", value: "أقل من 5%" },
//     { label: "الوزن عند 4 أسابيع", value: "800–1000 جرام" },
//     { label: "الوزن عند 7 أسابيع", value: "1.8–2.2 كجم" },
//     { label: "بروتين البادئ", value: "22–23%" },
//     { label: "بروتين النامي", value: "20–21%" },
//     { label: "بروتين الناهي", value: "18–19%" },
//   ]

//   const faqItems = [
//     {
//       question: "متى يجب استدعاء الطبيب البيطري؟",
//       answer:
//         "عند زيادة النفوق عن 3% خلال أي أسبوع، أو ظهور أعراض تنفسية أو كحة أو خمول عام. كما يجب استشارة الطبيب عند ملاحظة أي تغيير غير طبيعي في سلوك الكتاكيت.",
//     },
//     {
//       question: "هل يمكن تقليل البروتين لتوفير التكلفة؟",
//       answer:
//         "لا تقلل البروتين في مرحلة الحضانة؛ يمكن التعديل في مرحلة التسمين تدريجيًا لكن باعتدال. تقليل البروتين بشكل كبير قد يؤثر على النمو والأداء الإنتاجي.",
//     },
//     {
//       question: "ما أفضل عمر للتسويق؟",
//       answer:
//         "عادة بين 42–49 يومًا حسب السلالة والسوق المستهدف؛ الوزن المتوقع 1.8–2.2 كجم عند 45 يومًا. يمكن تأخير التسويق قليلًا للحصول على وزن أكبر.",
//     },
//     {
//       question: "كيف أراقب وزن الكتاكيت؟",
//       answer:
//         "وزن عينة من 30 كتكوتًا أسبوعيًا لمراقبة الأداء. قارن الوزن بالمعايير المتوقعة في الجدول اليومي. إذا كان الوزن أقل من المتوقع، راجع التغذية والصحة.",
//     },
//     {
//       question: "ما أهمية التهوية الجيدة؟",
//       answer:
//         "التهوية الجيدة ضرورية لإزالة الرطوبة والغازات الضارة وتوفير هواء نقي. تهوية مستمرة لكن دون تيارات هوائية مباشرة على الكتاكيت. سوء التهوية يزيد من الأمراض التنفسية.",
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <PageHeader title="دليل عملي لتربية الكتاكيت" subtitle="45 يومًا خطوة بخطوة من الحضانة إلى التسويق" />

//       <main className="py-16 bg-background" id="guidelines-content">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Hero Section */}
//           <section className="mb-16 animate-fade-in-up">
//             <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 md:p-12">
//               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//                 دليل عملي لتربية الكتاكيت بطريقة صحيحة
//               </h1>
//               <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
//                 هذا الدليل العملي يقدّم خطة يومية كاملة لمدة 45 يومًا لتربية الكتاكيت (الدجاج اللاحم) بطريقة صحيحة وآمنة.
//                 يتضمن الدليل درجات الحرارة، أنواع الأعلاف، جدول التحصين، الإرشادات اليومية، ونصائح عملية لتحسين الوزن
//                 وتقليل النفوق. صالح للمزارع الصغيرة والمتوسطة.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={downloadPdf}
//                   className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
//                 >
//                   <Download className="w-5 h-5" />
//                   حفظ كملف PDF
//                 </button>
//                 <Link
//                   href="/contact"
//                   className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition font-semibold"
//                 >
//                   <Phone className="w-5 h-5" />
//                   اتصل بخبير
//                 </Link>
//               </div>
//             </div>
//           </section>

//           {/* Quick Stats */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-bold text-foreground mb-8 text-center">الإحصائيات السريعة</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {quickStats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow animate-scale-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <p className="text-foreground/70 mb-2">{stat.label}</p>
//                   <p className="text-3xl font-bold text-primary">{stat.value}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Stages Section */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-bold text-foreground mb-8 text-center">مراحل التربية</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               {stages.map((stage, index) => (
//                 <div
//                   key={index}
//                   className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all hover:border-primary/50 animate-slide-in-right"
//                   style={{ animationDelay: `${index * 0.15}s` }}
//                 >
//                   <h3 className="text-2xl font-bold text-primary mb-3">{stage.title}</h3>
//                   <p className="text-foreground/70 mb-6">{stage.description}</p>
//                   <ul className="space-y-3">
//                     {stage.details.map((detail, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="text-primary font-bold mt-1">✓</span>
//                         <span className="text-foreground/70">{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Daily Plan Table */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-bold text-foreground mb-8 text-center">الجدول اليومي الكامل (45 يوم)</h2>
//             <div className="overflow-x-auto rounded-xl border border-border">
//               <table className="w-full text-sm">
//                 <thead>
//                   <tr className="bg-primary text-primary-foreground">
//                     <th className="px-4 py-3 text-right">اليوم</th>
//                     <th className="px-4 py-3 text-right">المرحلة</th>
//                     <th className="px-4 py-3 text-right">درجة الحرارة</th>
//                     <th className="px-4 py-3 text-right">العلف</th>
//                     <th className="px-4 py-3 text-right">التحصين</th>
//                     <th className="px-4 py-3 text-right">ملاحظات</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dailyPlan.map((row, index) => (
//                     <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
//                       <td className="px-4 py-3 font-semibold text-foreground">{row.day}</td>
//                       <td className="px-4 py-3 text-foreground/70">{row.stage}</td>
//                       <td className="px-4 py-3 text-foreground/70">{row.temp}</td>
//                       <td className="px-4 py-3 text-foreground/70">{row.feed}</td>
//                       <td className="px-4 py-3 text-foreground/70">{row.vaccination}</td>
//                       <td className="px-4 py-3 text-foreground/70">{row.notes}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* Expert Tips */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-bold text-foreground mb-8 text-center">نصائح الخبراء</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-primary mb-4">🌡️ الحرارة</h3>
//                 <p className="text-foreground/70">
//                   استخدم مقياس حرارة أرضي داخل العنبر وراقب السلوك (تجمع تحت الدفاية = برد، تباعد = حرارة مرتفعة).
//                 </p>
//               </div>
//               <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-primary mb-4">💧 المياه</h3>
//                 <p className="text-foreground/70">
//                   الماء النظيف دائمًا — لا تترك ماءًا معلقًا لفترات طويلة. استخدم معقمات الماء عند اللزوم.
//                 </p>
//               </div>
//               <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-primary mb-4">💨 التهوية</h3>
//                 <p className="text-foreground/70">
//                   تهوية مستمرة لكن دون تيارات هوائية مباشرة على الكتاكيت. سوء التهوية يزيد من الأمراض التنفسية.
//                 </p>
//               </div>
//               <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-primary mb-4">🧹 النظافة</h3>
//                 <p className="text-foreground/70">
//                   تغيير الفرشة عند الرطوبة، غسل وتعقيم المعالف والمساقي أسبوعيًا. النظافة تقلل الأمراض.
//                 </p>
//               </div>
//               <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-primary mb-4">🔒 العزل</h3>
//                 <p className="text-foreground/70">
//                   لا تخلط أعمارًا مختلفة معًا. العزل يمنع انتشار الأمراض ويحسن الأداء الإنتاجي.
//                 </p>
//               </div>
//               <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-primary mb-4">⚠️ الطوارئ</h3>
//                 <p className="text-foreground/70">احتفظ بمصدر حرارة احتياطي ومجموعة إسعافات أولية وبيطري للاستشارة.</p>
//               </div>
//             </div>
//           </section>

//           {/* FAQ Section */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-bold text-foreground mb-8 text-center">الأسئلة الشائعة</h2>
//             <FAQAccordion items={faqItems} />
//           </section>

//           {/* CTA Section */}
//           <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
//             <h2 className="text-3xl font-bold text-foreground mb-6">هل تحتاج إلى مساعدة إضافية؟</h2>
//             <p className="text-lg text-foreground/70 mb-8">
//               فريقنا المتخصص جاهز لمساعدتك في أي استفسار أو مشكلة تتعلق بتربية الكتاكيت.
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
//             >
//               <Phone className="w-5 h-5" />
//               اتصل بنا الآن
//             </Link>
//           </section>
//         </div>
//       </main>

//       <Footer />
//     </>
//   )
// }










"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { FAQAccordion } from "@/components/faq-accordion"


import Link from "next/link"
import { Download, Phone } from "lucide-react"
import { Feather, Thermometer, Droplet, ShieldCheck, Truck, BarChart2 } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa"
import { Metadata } from "next"



export default function ChickGuidelinesPage() {
  
  // ---------- Metadata SEO ----------
 const metadata: Metadata = {
  title: "دليل تربية الكتاكيت | القطاوي للدواجن",
  description:
    "أفضل الإرشادات الفنية لتربية الكتاكيت، نصائح الخبراء، الخطة الأسبوعية، ومتابعة النمو لتحسين الإنتاج وتقليل النفوق.",
  keywords: [
    "تربية الكتاكيت",
    "دليل الدواجن",
    "نصائح تربية الدواجن",
    "القطاوي للدواجن",
    "خطة أسبوعية لتربية الكتاكيت",
  ],
  openGraph: {
    title: "دليل تربية الكتاكيت | القطاوي للدواجن",
    description: "إرشادات ومتابعة دورية لضمان نجاح دورة تربية الكتاكيت وتحقيق أفضل النتائج.",
    url: "https://yourwebsite.com/chick-guidelines",
    siteName: "القطاوي للدواجن",
    images: [
      {
        url: "/images/chick-guidelines-og.jpg",
        width: 1200,
        height: 630,
        alt: "دليل تربية الكتاكيت",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
}
  // ---------- data (محتوى محسّن) ----------
  const dailyPlan = [
    /* kept as earlier but we'll show grouped by week; simplified for brevity in UI */
    // We'll still keep days 1..45 for details but UI uses weekly cards
    // For brevity here we'll keep the existing array minimal; in production you can expand
    // (Using the user's earlier full dailyPlan array is fine — you can paste it back if needed)
  ]

  // We'll use the detailed daily plan from user's earlier content (embedded here)
  const fullDailyPlan = [
    { day: 1, stage: "حضانة", temp: "34–35", feed: "ماء + محلول سكري + فيتامين C", vaccination: "—", notes: "تأكد من التدفئة الجيدة، راقب توزيع الكتاكيت" },
    { day: 2, stage: "حضانة", temp: "34", feed: "بادئ (Starter 23%)", vaccination: "—", notes: "تأكد أن الكتاكيت بدأت تأكل وتشرب" },
    { day: 3, stage: "حضانة", temp: "33", feed: "بادئ", vaccination: "—", notes: "نظف المساقي والمعالف" },
    { day: 4, stage: "حضانة", temp: "33", feed: "بادئ", vaccination: "فيتامينات + أملاح معدنية", notes: "تأكد من جفاف الفرشة" },
    { day: 5, stage: "حضانة", temp: "32", feed: "بادئ", vaccination: "—", notes: "لاحظ الحركة والنشاط" },
    { day: 6, stage: "حضانة", temp: "32", feed: "بادئ", vaccination: "—", notes: "احسب النفوق وسجله" },
    { day: 7, stage: "حضانة", temp: "32", feed: "بادئ", vaccination: "تحصين نيوكاسل (لاسوتا) بالماء", notes: "أغلق التهوية أثناء التحصين" },
    { day: 8, stage: "حضانة", temp: "31", feed: "بادئ", vaccination: "فيتامين C بعد التحصين", notes: "افتح التهوية بعد ساعتين من التحصين" },
    { day: 9, stage: "حضانة", temp: "31", feed: "بادئ", vaccination: "—", notes: "أضف نشارة جديدة إن لزم" },
    { day: 10, stage: "حضانة", temp: "30", feed: "بادئ", vaccination: "—", notes: "راقب استهلاك العلف والماء" },
    { day: 11, stage: "حضانة", temp: "30", feed: "بادئ", vaccination: "فيتامين AD3E", notes: "الفحص العام للصحة" },
    { day: 12, stage: "حضانة", temp: "29", feed: "بادئ", vaccination: "—", notes: "تأكد من توزيع الحرارة" },
    { day: 13, stage: "حضانة", temp: "29", feed: "بادئ", vaccination: "—", notes: "قلل الحرارة تدريجيًا" },
    { day: 14, stage: "حضانة", temp: "29", feed: "بادئ", vaccination: "تحصين جمبورو", notes: "بالماء النظيف الخالي من الكلور" },
    { day: 15, stage: "حضانة", temp: "28", feed: "بادئ", vaccination: "فيتامين C", notes: "بعد التحصين مباشرة" },
    { day: 16, stage: "حضانة", temp: "28", feed: "بادئ", vaccination: "—", notes: "التهوية الجيدة ضرورية" },
    { day: 17, stage: "حضانة", temp: "28", feed: "بادئ", vaccination: "—", notes: "نظف المعالف جيدًا" },
    { day: 18, stage: "حضانة", temp: "27", feed: "بادئ", vaccination: "تحصين نيوكاسل (لاسوتا)", notes: "بالماء النظيف" },
    { day: 19, stage: "حضانة", temp: "27", feed: "بادئ", vaccination: "—", notes: "أضف فيتامينات في اليوم التالي" },
    { day: 20, stage: "حضانة", temp: "27", feed: "بادئ", vaccination: "فيتامين AD3E", notes: "نهاية مرحلة الحضانة" },
    { day: 21, stage: "نمو", temp: "26", feed: "نامي (Grower 21%)", vaccination: "—", notes: "قلل الحرارة إلى 26 ووسع المساحة" },
    { day: 22, stage: "نمو", temp: "26", feed: "نامي", vaccination: "—", notes: "راقب وزن العينة" },
    { day: 23, stage: "نمو", temp: "25", feed: "نامي", vaccination: "فيتامينات", notes: "مرة أسبوعيًا" },
    { day: 24, stage: "نمو", temp: "25", feed: "نامي", vaccination: "—", notes: "تهوية قوية بلا تيار هواء مباشر" },
    { day: 25, stage: "نمو", temp: "25", feed: "نامي", vaccination: "—", notes: "نظافة يومية" },
    { day: 26, stage: "نمو", temp: "25", feed: "نامي", vaccination: "—", notes: "وزن عينة للتقييم" },
    { day: 27, stage: "نمو", temp: "24", feed: "نامي", vaccination: "—", notes: "استقرار الحرارة" },
    { day: 28, stage: "نمو", temp: "24", feed: "نامي", vaccination: "تحصين جمبورو", notes: "بالماء" },
    { day: 29, stage: "نمو", temp: "24", feed: "نامي", vaccination: "فيتامين C", notes: "بعد التحصين" },
    { day: 30, stage: "نمو", temp: "23", feed: "نامي", vaccination: "—", notes: "فحص الريش والنشاط" },
    { day: 31, stage: "نمو", temp: "23", feed: "نامي", vaccination: "تحصين نيوكاسل", notes: "بالماء" },
    { day: 32, stage: "نمو", temp: "23", feed: "نامي", vaccination: "—", notes: "نهاية مرحلة النمو" },
    { day: 33, stage: "تسمين", temp: "22", feed: "ناهي (Finisher 19%)", vaccination: "—", notes: "تغيير العلف تدريجيًا على 3 أيام" },
    { day: 34, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "راقب استهلاك العلف" },
    { day: 35, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "فيتامينات", notes: "أسبوعية" },
    { day: 36, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "تأكد من التهوية" },
    { day: 37, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "راقب الوزن" },
    { day: 38, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "قلل الضوء قليلًا" },
    { day: 39, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "جهّز مكان البيع" },
    { day: 40, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "فيتامين AD3E", notes: "لتحسين المناعة" },
    { day: 41, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "وزن عينة جديدة" },
    { day: 42, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "راقب النفوق" },
    { day: 43, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "التحضير للنقل" },
    { day: 44, stage: "تسمين", temp: "22", feed: "ناهي", vaccination: "—", notes: "أوقف العلف قبل التسويق بـ12 ساعة" },
    { day: 45, stage: "تسويق", temp: "—", feed: "—", vaccination: "—", notes: "التسويق 🎯 (الوزن المتوقع 1.8–2.2 كجم)" },
  ]

  const stages = [
    {
      title: "التحضير وتجهيز المكان (قبل استقبال الكتاكيت)",
      description:
        "أساس النجاح يبدأ قبل وصول الكتاكيت: نظافة، تعقيم، اختبار الدفايات، والتهيئة اللوجستية.",
      details: [
        "تطهير وتعقيم العنابر جيدًا (إزالة الفرشة القديمة وتنظيف الأسطح).",
        "فحص و تركيب دفايات/مصابيح حرارية مع اختبار السلامة الكهربائية.",
        "التأكد من وجود مساقي ومعالف كافية (نسبة المساقي 1 لكل 15–20 كتكوت) ومصدر مياه نظيف.",
        "فصل المسارات وتهيئة منطقة استقبال نظيفة ومظللة.",
      ],
    },
    {
      title: "استقبال الكتاكيت (اليوم 0–3)",
      description:
        "الاستقبال الصحيح يقلل النفوق ويعطي بداية قوية: تدفئة، ماء سكري، مراقبة أولية.",
      details: [
        "استقبال خلال الصباح الباكر لتقليل تعرض الطيور للحرارة أو البرد.",
        "ضع ماءً دافئًا مع محلول سكري وملح معدني وفيتامين C لأول 24 ساعة.",
        "توفير مساحات متساوية تحت الدفايات لتفادي التكدس.",
        "فحص سريع لكل دفعة: نشاط، استجابة للمحفزات، وجود أي نفوق.",
      ],
    },
    {
      title: "الرعاية اليومية (الأسبوعان الأولان مهمان)",
      description:
        "متابعة الحرارة، توزيع العلف والماء، والتحصينات المبدئية — هذه الفترة تحدد الأداء اللاحق.",
      details: [
        "مراقبة توزيع الحرارة (تجمع = بُرد، تباعد = حرارة مرتفعة).",
        "تقديم بادئ بروتين 22–23%: متاح في السوق المصري من عدة شركات محلية.",
        "تغيير الماء يوميًا وتعقيم المساقي أسبوعيًا.",
        "سجل يومي للاستهلاك والنفوق، ووزن عينة أسبوعية.",
      ],
    },
  ]

  const quickStats = [
    { label: "النفوق المستهدف", value: "أقل من 5%" },
    { label: "الوزن عند 4 أسابيع", value: "800–1000 جرام" },
    { label: "الوزن عند 7 أسابيع", value: "1.8–2.8 كجم" },
    { label: "بروتين البادئ", value: "22–23%" },
    { label: "بروتين النامي", value: "20–21%" },
    { label: "بروتين الناهي", value: "18–19%" },
  ]

  const faqItems = [
    {
      question: "متى يجب استدعاء الطبيب البيطري؟",
      answer:
        "عند زيادة النفوق عن 3% خلال أي أسبوع، أو ظهور أعراض تنفسية أو كحة أو خمول عام. كما يجب استشارة الطبيب عند ملاحظة أي تغيير غير طبيعي في سلوك الكتاكيت.",
    },
    {
      question: "هل يمكن تقليل البروتين لتوفير التكلفة؟",
      answer:
        "لا تقلل البروتين في مرحلة الحضانة؛ يمكن التعديل في مرحلة التسمين تدريجيًا لكن باعتدال. تقليل البروتين بشكل كبير قد يؤثر على النمو والأداء الإنتاجي.",
    },
    {
      question: "ما أفضل عمر للتسويق؟",
      answer:
        "عادة بين 42–49 يومًا حسب السلالة والسوق المستهدف؛ الوزن المتوقع 1.8–2.2 كجم عند 45 يومًا. يمكن تأخير التسويق قليلًا للحصول على وزن أكبر.",
    },
    {
      question: "كيف أراقب وزن الكتاكيت؟",
      answer:
        "وزن عينة من 30 كتكوتًا أسبوعيًا لمراقبة الأداء. قارن الوزن بالمعايير المتوقعة في الجدول اليومي. إذا كان الوزن أقل من المتوقع، راجع التغذية والصحة.",
    },
    {
      question: "ما أهمية التهوية الجيدة؟",
      answer:
        "التهوية الجيدة ضرورية لإزالة الرطوبة والغازات الضارة وتوفير هواء نقي. تهوية مستمرة لكن دون تيارات هوائية مباشرة على الكتاكيت. سوء التهوية يزيد من الأمراض التنفسية.",
    },
  ]

  // ---------- animation helpers ----------
  const EASING: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: EASING },
    }),
  }

  const floatIcon: Variants = {
    animate: {
      y: [0, -6, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: EASING },
    },
  }

  // ---------- UI state ----------
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  // Helper: split fullDailyPlan into weeks (1..45 -> week 1 contains days 1-7, etc.)
  const weeks = []
  for (let w = 0; w < 7; w++) {
    const start = w * 7 + 1
    const end = Math.min((w + 1) * 7, 45)
    const days = fullDailyPlan.filter((d) => d.day >= start && d.day <= end)
    if (days.length) weeks.push({ week: w + 1, start, end, days })
  }

  // ---------- Simple feasibility calc for 1000 chicks (تقديري) ----------
  // ملاحظات: الأرقام تقريبية لعام 2025 ومُريحة للعرض. ينصح بالمطابقة المحلية.
  // افتراضات سعرية (تقديرية)
  const pricePerChick = 5.5 // جنيه مصري per chick (تقديري) — ضع السعر الصحيح محليًا
  const feedKgPerChickTotal = 6.5 // kg total feed per chick over 45 days (تقريبي)
  const feedPricePerKg = 12 // جنيه/كجم (تقديري)
  const vaccineCostPerChick = 0.8 // إجمالي تكلفة التحصينات لكل كتكوت (تقريبي)
  const medAndSuppPerChick = 0.7 // أدوية/فيتامينات/إلكتروليت لكل كتكوت
  const utilitiesPerBatch = 2500 // كهرباء/غاز/عمالة/نقل (batch of 1000) (تقديري)
  const otherFixed = 3000 // مصاريف ثابتة أخرى (تعقيم، أدوات) (تقديري)
  const mortalityRate = 0.05 // 5% نفوق مستهدف
  const marketPricePerKg = 55 // جنيه للمتر الواحد kg عند البيع (تقديري) — ضع السعر المحلي

  // حسابات
  const chicks = 1000
  const expectedAlive = Math.round(chicks * (1 - mortalityRate))
  const totalChicksCost = chicks * pricePerChick
  const totalFeedCost = chicks * feedKgPerChickTotal * feedPricePerKg
  const totalVaccines = chicks * vaccineCostPerChick
  const totalMeds = chicks * medAndSuppPerChick
  const totalVariable = totalChicksCost + totalFeedCost + totalVaccines + totalMeds
  const totalFixed = utilitiesPerBatch + otherFixed
  const totalCost = Math.round(totalVariable + totalFixed)
  const avgLiveWeightKg = 1.9 // متوسط وزن متوقع عند التسويق
  const expectedKg = expectedAlive * avgLiveWeightKg
  const expectedRevenue = Math.round(expectedKg * marketPricePerKg)
  const expectedProfit = expectedRevenue - totalCost
  const profitPerChick = +(expectedProfit / chicks).toFixed(2)

  // ---------- render ----------
  return (
    <>
      <Header />

      <main className="py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero / CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl border border-primary/20 p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl text-center font-bold text-foreground mb-3">الإرشادات لتربية الصحيحة</h1>
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-1xl text-foreground mb-3">نقدم إرشادات فنية ومتابعة دورية لضمان نجاح دورة التربية وتحقيق أفضل النتائج. فريقنا من الخبراء والأطباء البيطريين على استعداد لتقديم الدعم الفني اللازم في جميع مراحل التربية. نهتم بتوفير المعلومات الحديثة والممارسات الأفضل في مجال تربية الدواجن، مما يساعد المربين على تحقيق أعلى معدلات الإنتاج وتقليل نسب النفوق.</h1>
               

                <div className="flex flex-wrap gap-3 justify-center mt-10">
                  
                  <a
                    href={`${process.env.NEXT_PUBLIC_WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:shadow-lg transition"
                  >
                    <FaWhatsapp className="w-4 h-4" ></FaWhatsapp>
                     "دردشة واتساب" 
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:shadow-lg transition"
                  >
                    <Phone className="w-4 h-4" />
                    { "اتصل بخبير"}
                  </Link>
                </div>
              </div>

              <motion.div
                variants={floatIcon}
                animate="animate"
                className="hidden md:flex items-center gap-4 bg-white/5 p-4 rounded-lg"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Feather className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">{ "التغذية المثلى"}</p>
                  <p className="font-semibold text-foreground">بادئ · نامي · ناهي</p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Quick Stats */}
          <section>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-bold text-center mb-6">
              {"مؤشرات سريعة"}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-4">
              {quickStats.map((s, i) => (
                <motion.div key={i} variants={fadeInUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-xl p-6 text-center">
                  <p className="text-sm text-foreground/70 mb-2">{s.label}</p>
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Stages */}
          <section>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-bold text-center mb-6">
              {"مراحل التربية الأساسية"}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {stages.map((stage, idx) => (
                <motion.div key={idx} variants={fadeInUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-xl p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Thermometer className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{stage.title}</h3>
                      <p className="text-foreground/70 mt-1">{stage.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {stage.details.map((d, i) => (
                      <li key={i} className="text-foreground/70 flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Weekly plan (replaces table) */}
          <section>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-bold text-center mb-6">
              {"الخطة الأسبوعية (عرض مختصر مع تفاصيل يومية قابلة للفتح)"}
            </motion.h2>

            <div className="space-y-4">
              {weeks.map((w, idx) => {
                const isOpen = expandedWeek === idx
                return (
                  <motion.div key={w.week} variants={fadeInUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-xl overflow-hidden border border-border">
                    <div
                      className="flex items-center justify-between p-4 cursor-pointer"
                      onClick={() => setExpandedWeek(isOpen ? null : idx)}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div variants={floatIcon} animate="animate" className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Droplet className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg">{ `الأسبوع ${w.week}`}</h3>
                          <p className="text-foreground/70 text-sm">{ `أيام ${w.start} إلى ${w.end}`}</p>
                        </div>
                      </div>

                      <div className="text-sm text-primary font-semibold">{isOpen ? ("إغلاق") : ( "عرض التفاصيل")}</div>
                    </div>

                    {isOpen && (
                      <div className="p-4 border-t border-border space-y-3 bg-background">
                        {w.days.map((d) => (
                          <div key={d.day} className="grid md:grid-cols-6 gap-2 items-start py-2 border-b last:border-b-0">
                            <div className="md:col-span-1 font-semibold">{`اليوم ${d.day}`}</div>
                            <div className="md:col-span-1 text-foreground/70">{d.stage}</div>
                            <div className="md:col-span-1 text-foreground/70">{d.temp}°م</div>
                            <div className="md:col-span-2 text-foreground/70">{d.feed}</div>
                            <div className="md:col-span-1 text-foreground/70">{d.vaccination}</div>
                            <div className="md:col-span-6 text-foreground/70 text-sm">{d.notes}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Expert Tips */}
          <section>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-bold text-center mb-6">
              { "نصائح الخبراء"}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-xl p-6">
                <h3 className="font-bold text-primary mb-3">🌡️ { "التحكم في الحرارة"}</h3>
                <p className="text-foreground/70">استخدم ترمومتر أرضي وراقب سلوك الطيور لتعديل الدفايات.</p>
              </motion.div>

              <motion.div variants={fadeInUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-xl p-6">
                <h3 className="font-bold text-primary mb-3">💧 {"نظافة الماء"}</h3>
                <p className="text-foreground/70">غير الماء يوميًا وتعقيم المساقي وابتعد عن الكلور الزائد.</p>
              </motion.div>

              <motion.div variants={fadeInUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-xl p-6">
                <h3 className="font-bold text-primary mb-3">🧹 { "النظافة والعزل" }</h3>
                <p className="text-foreground/70">لا تخلط أعمارًا مختلفة وعقم المعدات قبل الاستعمال.</p>
              </motion.div>
            </div>
          </section>


          {/* FAQ */}
          <section>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-bold text-center mb-6">
              {"الأسئلة الشائعة"}
            </motion.h2>
            <FAQAccordion items={faqItems} />
          </section>

          {/* CTA */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3">{"هل تريد برنامج مخصص لمزرعتك؟"}</h3>
              <p className="text-foreground/70 mb-4">{"أرسل لنا بيانات مزرعتك (عدد طيور، نظام تربية، ميزانية) وسنعد خطة مفصّلة."}</p>

              <div className="flex items-center justify-center gap-3">
                <a href={`${process.env.NEXT_PUBLIC_WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex gap-2 items-center px-5 py-3 rounded-lg bg-green-500 text-white font-semibold">
                  <FaWhatsapp className="w-4 h-4" /> {"تواصل عبر واتساب"}
                </a>

                <Link href="/contact" className="inline-flex gap-2 items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">
                  <Phone className="w-4 h-4" /> {"أرسل طلب"}
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
