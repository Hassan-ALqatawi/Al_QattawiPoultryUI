// "use client"

// import { motion } from "framer-motion"
// import {
//   Feather,
//   FlaskRound,
//   ShieldCheck,
//   Lightbulb,
// } from "lucide-react"
// import Link from "next/link"

// const services = [
//   {
//     key: "supply",
//     icon: <Feather className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
//     title: "توريد الكتاكيت",
//     description: "نوفر أفضل سلالات الكتاكيت عالية الجودة."
//   },
//   {
//     key: "medicines",
//     icon: <FlaskRound className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
//     title: "الأدوية واللقاحات",
//     description: "مجموعة متكاملة من الأدوية واللقاحات البيطرية."
//   },
//   {
//     key: "vaccination",
//     icon: <ShieldCheck className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
//     title: "برامج تحصين",
//     description: "برامج تحصين مخصصة لضمان صحة القطيع."
//   },
//   {
//     key: "guidance",
//     icon: <Lightbulb className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
//     title: "إرشادات فنية",
//     description: "دعم فني وإرشادات من خبراء في تربية الدواجن."
//   },
// ]

// export function ServicesSection() {
//   return (
//     <section
//       id="services"
//       className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden"
//     >
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             خدماتنا
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//               <Link href={`/contact`} passHref key={service.key}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="group block relative p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-orange-100 
//                              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full"
//                 >
//                   <div className="flex flex-col items-center text-center space-y-4">
//                     {service.icon}
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </Link>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   )
// }






"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Feather, FlaskRound, ShieldCheck, Lightbulb } from "lucide-react"
import Script from "next/script"

const services = [
  {
    key: "supply",
    icon: <Feather className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
    title: "توريد الكتاكيت",
    description: "نوفر أفضل سلالات الكتاكيت عالية الجودة من مزارع معتمدة لتحقيق أعلى إنتاجية للمربين.",
    url: "#products",
  },
  {
    key: "medicines",
    icon: <FlaskRound className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
    title: "الأدوية واللقاحات",
    description: "نوفر مجموعة شاملة من الأدوية البيطرية واللقاحات الأصلية لضمان صحة الطيور والوقاية من الأمراض.",
    url: "#medicines",
  },
  {
    key: "vaccination",
    icon: <ShieldCheck className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
    title: "برامج التحصين",
    description: "نقدم برامج تحصين مصممة خصيصًا لضمان سلامة القطيع ومكافحة الأمراض الشائعة.",
    url: "#vaccinations",
  },
  {
    key: "guidance",
    icon: <Lightbulb className="w-12 h-12 text-orange-500 group-hover:text-amber-500 transition-colors duration-300 animate-float" />,
    title: "الإرشادات الفنية",
    description: "استشارات فنية من خبراء متخصصين لمساعدتك في تربية الدواجن بشكل علمي واقتصادي ناجح.",
    url: "/chick-guidelines",
  },
]

export function ServicesSection() {
  // إنشاء بيانات structured data الخاصة بالخدمات
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "خدمات الدواجن",
    "provider": {
      "@type": "Organization",
      "name": "القطاوي للدواجن",
      "url": "https://alqattawi-poultry.vercel.app/",
      "logo": "https://alqattawi-poultry.vercel.app/header_image.webp"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدماتنا",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://https://alqattawi-poultry.vercel.app/${service.url}`,
        },
      })),
    },
  }

  return (
    <section
      id="services"
      aria-label="خدمات القطاوي للدواجن"
      className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden"
    >
      {/* ✅ Structured Data */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* خلفيات خفيفة للتصميم */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* المحتوى */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-relaxed">
            خدماتنا
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نوفر مجموعة شاملة من الخدمات لدعم المزارعين والمربين في جميع مراحل تربية الدواجن.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* بطاقات الخدمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-orange-100 
                         shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <Link
                  href={service.url}
                  className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg 
                            hover:bg-orange-600 transition-colors duration-300"
                >
                  تعرف على المزيد
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* حركة الأيقونات */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
