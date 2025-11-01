// "use client"

// import { motion } from "framer-motion"
// import {
//   FlaskConical,
//   ShieldCheck,
//   Droplet,
//   Activity,
//   Stethoscope,
//   Syringe,
// } from "lucide-react"

// const medicineIcons = {
//   vitamins: <FlaskConical className="w-10 h-10 text-white" />,
//   antibiotics: <Syringe className="w-10 h-10 text-white" />,
//   immune_stimulants: <ShieldCheck className="w-10 h-10 text-white" />,
//   solutions: <Droplet className="w-10 h-10 text-white" />,
//   disinfectants: <Activity className="w-10 h-10 text-white" />,
//   general_preparations: <Stethoscope className="w-10 h-10 text-white" />,
// }

// const medicineColors = {
//   vitamins: "from-amber-400 to-orange-500",
//   antibiotics: "from-red-400 to-rose-600",
//   immune_stimulants: "from-green-400 to-green-600",
//   solutions: "from-teal-400 to-cyan-600",
//   disinfectants: "from-slate-400 to-gray-600",
//   general_preparations: "from-lime-400 to-green-600",
// }

// const medicines = [
//     {
//         key: "vitamins",
//         name: "فيتامينات وأملاح",
//         usage: "لتحسين النمو والإنتاجية والوقاية من نقص الفيتامينات.",
//         ageRange: "جميع الأعمار",
//         notes: "تضاف إلى مياه الشرب أو العلف حسب التعليمات.",
//         icon: medicineIcons.vitamins,
//         color: medicineColors.vitamins
//     },
//     {
//         key: "antibiotics",
//         name: "مضادات حيوية",
//         usage: "لعلاج الأمراض البكتيرية التنفسية والمعوية.",
//         ageRange: "حسب توجيهات الطبيب البيطري",
//         notes: "يجب الالتزام بفترة السحب المحددة.",
//         icon: medicineIcons.antibiotics,
//         color: medicineColors.antibiotics
//     },
//     {
//         key: "immune_stimulants",
//         name: "منشطات المناعة",
//         usage: "لرفع كفاءة الجهاز المناعي ومقاومة الأمراض.",
//         ageRange: "قبل وبعد التحصينات وفي فترات الإجهاد.",
//         notes: "فعالة في تقليل تأثير الإجهاد على الطيور.",
//         icon: medicineIcons.immune_stimulants,
//         color: medicineColors.immune_stimulants
//     },
//     {
//         key: "solutions",
//         name: "محاليل معالجة الجفاف",
//         usage: "لتعويض السوائل والأملاح المفقودة في حالات الإسهال والإجهاد الحراري.",
//         ageRange: "جميع الأعمار",
//         notes: "ضرورية للحفاظ على حيوية الطيور.",
//         icon: medicineIcons.solutions,
//         color: medicineColors.solutions
//     },
//     {
//         key: "disinfectants",
//         name: "مطهرات",
//         usage: "لتطهير مياه الشرب والمعدات والحظائر.",
//         ageRange: "N/A",
//         notes: "أساسية للوقاية من الأمراض والعدوى.",
//         icon: medicineIcons.disinfectants,
//         color: medicineColors.disinfectants
//     },
//     {
//         key: "general_preparations",
//         name: "مستحضرات عامة",
//         usage: "تشمل مضادات الكوكسيديا ومضادات الفطريات ومنشطات النمو.",
//         ageRange: "حسب نوع المستحضر",
//         notes: "استشر الطبيب البيطري لاختيار المستحضر المناسب.",
//         icon: medicineIcons.general_preparations,
//         color: medicineColors.general_preparations
//     }
// ];

// export function MedicinesSection() {
//   const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP?.split("/").pop()

//   return (
//     <section id="medicines" className="py-20 bg-gradient-to-b from-background to-muted/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             الأدوية والتحصينات
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-6 leading-relaxed">
//             نقدم مجموعة واسعة من الأدوية البيطرية والتحصينات لضمان صحة دواجنك.
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {medicines.map((medicine, index) => (
//             <motion.div
//               key={medicine.key}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               className="group relative bg-card rounded-2xl border border-border overflow-hidden 
//                         hover:border-green-500 transition-all duration-300 hover:shadow-2xl"
//             >
//               <div className={`bg-gradient-to-r ${medicine.color} p-6 flex flex-col items-start`}>
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   {medicine.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-bold mt-3 text-white">{medicine.name}</h3>
//               </div>

//               <div className="p-6 space-y-4">
//                 <div>
//                   <h4 className="text-sm font-semibold text-green-600 mb-1">الاستخدام</h4>
//                   <p className="text-foreground/80">{medicine.usage}</p>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-semibold text-green-600 mb-1">العمر المناسب</h4>
//                   <p className="text-foreground/80">{medicine.ageRange}</p>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-semibold text-green-600 mb-1">ملاحظات</h4>
//                   <p className="text-foreground/80">{medicine.notes}</p>
//                 </div>

//                 <a
//                   href={`https://wa.me/${whatsappNumber}?text=استفسار بخصوص ${medicine.name}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold text-center hover:bg-green-600 transition group-hover:shadow-lg"
//                 >
//                   استفسر الآن
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="bg-amber-50 border-r-4 border-amber-500 p-6 rounded-lg mb-8"
//         >
//           <div className="flex gap-4 items-start">
//             <div className="text-3xl">⚠️</div>
//             <div>
//               <h4 className="font-bold text-amber-900 mb-2">تحذير هام</h4>
//               <ul className="text-amber-800 space-y-1 text-sm">
//                 <li>• استشارة الطبيب البيطري ضرورية قبل استخدام أي دواء.</li>
//                 <li>• الجرعات والتعليمات قد تختلف حسب حالة الطيور.</li>
//                 <li>• تأكد من فترة السحب قبل استهلاك اللحوم أو البيض.</li>
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
  FlaskConical,
  ShieldCheck,
  Droplet,
  Activity,
  Stethoscope,
  Syringe,
} from "lucide-react"
import Head from "next/head"

const medicineIcons = {
  vitamins: <FlaskConical className="w-10 h-10 text-white" aria-label="فيتامينات وأملاح للدواجن" />,
  antibiotics: <Syringe className="w-10 h-10 text-white" aria-label="مضادات حيوية للدواجن" />,
  immune_stimulants: <ShieldCheck className="w-10 h-10 text-white" aria-label="منشطات المناعة للدواجن" />,
  solutions: <Droplet className="w-10 h-10 text-white" aria-label="محاليل معالجة الجفاف" />,
  disinfectants: <Activity className="w-10 h-10 text-white" aria-label="مطهرات بيطرية" />,
  general_preparations: <Stethoscope className="w-10 h-10 text-white" aria-label="مستحضرات عامة للدواجن" />,
}

const medicineColors = {
  vitamins: "from-amber-400 to-orange-500",
  antibiotics: "from-red-400 to-rose-600",
  immune_stimulants: "from-green-400 to-green-600",
  solutions: "from-teal-400 to-cyan-600",
  disinfectants: "from-slate-400 to-gray-600",
  general_preparations: "from-lime-400 to-green-600",
}

const medicines = [
  {
    key: "vitamins",
    name: "فيتامينات وأملاح للدواجن",
    usage: "تحسين النمو والإنتاجية والوقاية من نقص الفيتامينات والمعادن في الكتاكيت والبط.",
    ageRange: "جميع الأعمار",
    notes: "تضاف إلى مياه الشرب أو العلف حسب تعليمات الطبيب البيطري.",
    icon: medicineIcons.vitamins,
    color: medicineColors.vitamins,
  },
  {
    key: "antibiotics",
    name: "مضادات حيوية للدواجن",
    usage: "علاج الأمراض البكتيرية التنفسية والمعوية وتحسين مقاومة الجهاز المناعي.",
    ageRange: "حسب توصية الطبيب البيطري",
    notes: "يجب الالتزام بفترة السحب المحددة قبل ذبح الطيور.",
    icon: medicineIcons.antibiotics,
    color: medicineColors.antibiotics,
  },
  {
    key: "immune_stimulants",
    name: "منشطات المناعة للكتاكيت",
    usage: "رفع كفاءة الجهاز المناعي ومساعدة الطيور على مقاومة الأمراض.",
    ageRange: "قبل وبعد التحصينات وفترات الإجهاد.",
    notes: "تقلل من تأثير التغيرات البيئية والإجهاد الحراري.",
    icon: medicineIcons.immune_stimulants,
    color: medicineColors.immune_stimulants,
  },
  {
    key: "solutions",
    name: "محاليل معالجة الجفاف",
    usage: "تعويض السوائل والأملاح المفقودة في حالات الإسهال أو الإجهاد الحراري.",
    ageRange: "جميع الأعمار",
    notes: "تستخدم للحفاظ على التوازن المائي والطاقة.",
    icon: medicineIcons.solutions,
    color: medicineColors.solutions,
  },
  {
    key: "disinfectants",
    name: "مطهرات بيطرية",
    usage: "لتطهير المياه والمعدات والحظائر وتقليل العدوى بين الطيور.",
    ageRange: "يُستخدم حسب الحاجة",
    notes: "ضرورية للوقاية من الأمراض البكتيرية والفيروسية.",
    icon: medicineIcons.disinfectants,
    color: medicineColors.disinfectants,
  },
  {
    key: "general_preparations",
    name: "مستحضرات عامة للدواجن",
    usage: "تشمل مضادات الكوكسيديا ومضادات الفطريات ومنشطات النمو.",
    ageRange: "حسب نوع المستحضر",
    notes: "استشر الطبيب البيطري لتحديد الجرعة المناسبة.",
    icon: medicineIcons.general_preparations,
    color: medicineColors.general_preparations,
  },
]

export function MedicinesSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP?.split("/").pop()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "الأدوية والتحصينات للدواجن - القطاوي للدواجن",
    "description": "مجموعة من الأدوية والتحصينات البيطرية للدواجن تشمل الفيتامينات والمطهرات ومنشطات المناعة.",
    "itemListElement": medicines.map((m, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": m.name,
      "description": m.usage,
      "brand": "القطاوي للدواجن",
      "category": "الأدوية البيطرية للدواجن",
    })),
  }

  return (
    <section id="medicines" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <Head>
        <title>الأدوية والتحصينات للدواجن | القطاوي للدواجن</title>
        <meta
          name="description"
          content="تعرف على أفضل الأدوية والتحصينات والفيتامينات الخاصة بالدواجن من القطاوي للدواجن. منتجات مضمونة لصحة أفضل ونمو أسرع."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            الأدوية والتحصينات للدواجن
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-6 leading-relaxed">
            نوفر مجموعة شاملة من الأدوية والتحصينات البيطرية لضمان صحة وإنتاجية دواجنك.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {medicines.map((medicine, index) => (
            <motion.article
              key={medicine.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-2xl"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className={`bg-gradient-to-r ${medicine.color} p-6 flex flex-col items-start`}>
                {medicine.icon}
                <h3 className="text-2xl font-bold mt-3 text-white" itemProp="name">
                  {medicine.name}
                </h3>
              </div>

              <div className="p-6 space-y-4" itemProp="description">
                <p className="text-foreground/80"><strong>الاستخدام:</strong> {medicine.usage}</p>
                <p className="text-foreground/80"><strong>العمر المناسب:</strong> {medicine.ageRange}</p>
                <p className="text-foreground/80"><strong>ملاحظات:</strong> {medicine.notes}</p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=استفسار بخصوص ${medicine.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold text-center hover:bg-green-600 transition group-hover:shadow-lg"
                >
                  استفسر الآن
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
