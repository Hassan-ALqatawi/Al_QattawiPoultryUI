// "use client"

// import { motion } from "framer-motion"
// import {
//   Syringe,
//   ShieldCheck,
//   Droplet,
//   ThermometerSun,
//   Stethoscope,
//   AlertCircle,
// } from "lucide-react"

// const vaccinationIcons = [
//   <Droplet className="w-12 h-12 text-sky-100 drop-shadow-md" />,
//   <Syringe className="w-12 h-12 text-violet-100 drop-shadow-md" />,
//   <ShieldCheck className="w-12 h-12 text-indigo-100 drop-shadow-md" />,
//   <ThermometerSun className="w-12 h-12 text-purple-100 drop-shadow-md" />,
//   <Stethoscope className="w-12 h-12 text-pink-100 drop-shadow-md" />,
// ]

// const vaccinationColors = [
//   "from-sky-500 to-sky-700",
//   "from-violet-500 to-violet-700",
//   "from-indigo-500 to-indigo-700",
//   "from-purple-500 to-purple-700",
//   "from-pink-500 to-pink-700",
// ]

// const vaccinations = [
//     {
//         day: "اليوم السابع",
//         vaccine: "هاتشنر B1 + كولون 30",
//         method: "تقطير في العين أو ماء الشرب",
//         notes: "جرعة أولى للوقاية من النيوكاسل والتهاب الشعب الهوائية (IB).",
//         icon: vaccinationIcons[0],
//         color: vaccinationColors[0]
//     },
//     {
//         day: "اليوم 12-14",
//         vaccine: "جمبورو (متوسطة)",
//         method: "ماء الشرب",
//         notes: "جرعة أولى للوقاية من مرض الجمبورو (IBD).",
//         icon: vaccinationIcons[1],
//         color: vaccinationColors[1]
//     },
//     {
//         day: "اليوم 18-20",
//         vaccine: "لاشتا + كولون",
//         method: "ماء الشرب أو الرش",
//         notes: "جرعة منشطة للنيوكاسل والتهاب الشعب الهوائية.",
//         icon: vaccinationIcons[2],
//         color: vaccinationColors[2]
//     },
//     {
//         day: "اليوم 22-24",
//         vaccine: "جمبورو (متوسطة)",
//         method: "ماء الشرب",
//         notes: "جرعة منشطة للجمبورو لضمان مناعة قوية.",
//         icon: vaccinationIcons[3],
//         color: vaccinationColors[3]
//     },
//     {
//         day: "اليوم 28",
//         vaccine: "لاشتا (جرعة أخيرة)",
//         method: "ماء الشرب",
//         notes: "جرعة أخيرة لتعزيز المناعة ضد النيوكاسل.",
//         icon: vaccinationIcons[4],
//         color: vaccinationColors[4]
//     }
// ];

// export function VaccinationSection() {
//   return (
//     <section id="vaccinations" className="py-20 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
//             برنامج التحصين
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-6 leading-relaxed">
//             برنامج مقترح لتحصين دجاج التسمين لضمان أفضل وقاية.
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="relative">
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 transform -translate-y-1/2 origin-left opacity-50"
//           ></motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
//             {vaccinations.map((vac, index) => (
//               <motion.div
//                 key={vac.day}
//                 initial={{ opacity: 0, y: 80 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 className={`relative bg-gradient-to-br ${vac.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, -6, 0],
//                     rotate: [0, 3, -3, 0],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="flex justify-center mb-4"
//                 >
//                   {vac.icon}
//                 </motion.div>

//                 <h3 className="text-2xl font-bold mb-2 text-center tracking-wide">{vac.day}</h3>

//                 <div className="space-y-3 text-sm">
//                   <div>
//                     <h4 className="font-semibold mb-1 opacity-90">التحصين</h4>
//                     <p className="opacity-95">{vac.vaccine}</p>
//                   </div>

//                   <div>
//                     <h4 className="font-semibold mb-1 opacity-90">طريقة الاستخدام</h4>
//                     <p className="opacity-95">{vac.method}</p>
//                   </div>

//                   <div className="pt-2 border-t border-white/30">
//                     <h4 className="font-semibold mb-1 opacity-90">ملاحظات هامة</h4>
//                     <p className="opacity-95 text-xs leading-relaxed">{vac.notes}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="mt-16 bg-gradient-to-r from-sky-50 to-pink-50 border-l-4 border-primary p-8 rounded-lg shadow-md"
//         >
//           <div className="flex gap-4 items-start">
//             <AlertCircle className="w-8 h-8 text-primary mt-1" />
//             <div>
//               <h4 className="font-bold text-foreground mb-2 text-xl">نصيحة بيطرية</h4>
//               <ul className="text-foreground/80 space-y-2 text-sm leading-relaxed">
//                 <li>• هذا البرنامج إرشادي وقد يختلف حسب المنطقة والوضع الوبائي.</li>
//                 <li>• يجب استخدام ماء شرب خالي من الكلور والمعقمات قبل وبعد التحصين بـ 24 ساعة.</li>
//                 <li>• ينصح بإضافة رافع مناعة قبل وبعد التحصين لزيادة الفعالية.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }








"use client"

import { motion } from "framer-motion"
import {
  Syringe,
  ShieldCheck,
  Droplet,
  ThermometerSun,
  Stethoscope,
  AlertCircle,
} from "lucide-react"
import Script from "next/script"

const vaccinations = [
  {
    day: "اليوم السابع",
    vaccine: "هاتشنر B1 + كولون 30",
    method: "تقطير في العين أو ماء الشرب",
    notes: "جرعة أولى للوقاية من النيوكاسل والتهاب الشعب الهوائية (IB).",
    icon: <Droplet className="w-12 h-12 text-sky-100 drop-shadow-md" aria-label="اليوم السابع" />,
    color: "from-sky-500 to-sky-700",
  },
  {
    day: "اليوم 12-14",
    vaccine: "جمبورو (متوسطة)",
    method: "ماء الشرب",
    notes: "جرعة أولى للوقاية من مرض الجمبورو (IBD).",
    icon: <Syringe className="w-12 h-12 text-violet-100 drop-shadow-md" aria-label="اليوم 12-14" />,
    color: "from-violet-500 to-violet-700",
  },
  {
    day: "اليوم 18-20",
    vaccine: "لاشتا + كولون",
    method: "ماء الشرب أو الرش",
    notes: "جرعة منشطة للنيوكاسل والتهاب الشعب الهوائية.",
    icon: <ShieldCheck className="w-12 h-12 text-indigo-100 drop-shadow-md" aria-label="اليوم 18-20" />,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    day: "اليوم 22-24",
    vaccine: "جمبورو (متوسطة)",
    method: "ماء الشرب",
    notes: "جرعة منشطة للجمبورو لضمان مناعة قوية.",
    icon: <ThermometerSun className="w-12 h-12 text-purple-100 drop-shadow-md" aria-label="اليوم 22-24" />,
    color: "from-purple-500 to-purple-700",
  },
  {
    day: "اليوم 28",
    vaccine: "لاشتا (جرعة أخيرة)",
    method: "ماء الشرب",
    notes: "جرعة أخيرة لتعزيز المناعة ضد النيوكاسل.",
    icon: <Stethoscope className="w-12 h-12 text-pink-100 drop-shadow-md" aria-label="اليوم 28" />,
    color: "from-pink-500 to-pink-700",
  },
]

export function VaccinationSection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "برنامج تحصين دجاج التسمين",
    "description": "جدول تحصين متكامل لدجاج التسمين لضمان الوقاية من الأمراض مثل النيوكاسل والجمبورو.",
    "step": vaccinations.map((vac) => ({
      "@type": "HowToStep",
      "name": vac.day,
      "text": `${vac.vaccine} - ${vac.method} - ${vac.notes}`,
    })),
  }

  return (
    <section id="vaccinations" className="py-20 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <Script
        id="vaccination-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            برنامج التحصين
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-6 leading-relaxed">
            برنامج مقترح لتحصين دجاج التسمين لضمان أفضل وقاية.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.header>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 transform -translate-y-1/2 origin-left opacity-50"
          ></motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {vaccinations.map((vac, index) => (
              <motion.article
                key={vac.day}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br ${vac.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex justify-center mb-4"
                >
                  {vac.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-center tracking-wide">{vac.day}</h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1 opacity-90">التحصين</h4>
                    <p className="opacity-95">{vac.vaccine}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1 opacity-90">طريقة الاستخدام</h4>
                    <p className="opacity-95">{vac.method}</p>
                  </div>

                  <div className="pt-2 border-t border-white/30">
                    <h4 className="font-semibold mb-1 opacity-90">ملاحظات هامة</h4>
                    <p className="opacity-95 text-xs leading-relaxed">{vac.notes}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-sky-50 to-pink-50 border-l-4 border-primary p-8 rounded-lg shadow-md"
        >
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-8 h-8 text-primary mt-1" aria-label="نصيحة بيطرية" />
            <div>
              <h4 className="font-bold text-foreground mb-2 text-xl">نصيحة بيطرية</h4>
              <ul className="text-foreground/80 space-y-2 text-sm leading-relaxed">
                <li>• البرنامج إرشادي وقد يختلف حسب المنطقة والوضع الوبائي.</li>
                <li>• استخدم ماء خالي من الكلور قبل وبعد التحصين بـ 24 ساعة.</li>
                <li>• يُفضل إضافة رافع مناعة لزيادة فعالية اللقاح.</li>
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
