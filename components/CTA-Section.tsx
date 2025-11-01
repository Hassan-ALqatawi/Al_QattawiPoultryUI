// "use client"

// import { motion } from "framer-motion"
// import { FaFacebookMessenger, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
// import Link from "next/link"

// export function ContactCTA() {
//  const contactMethods = [
//     {
//       name: "واتساب",
//       icon: <FaWhatsapp className="w-6 h-6" />,
//       link: process.env.NEXT_PUBLIC_WHATSAPP,
//       color: "bg-green-500 hover:bg-green-600",
//     },
//     {
//       name: "ماسنجر",
//       icon: <FaFacebookMessenger className="w-6 h-6" />,
//       link: process.env.NEXT_PUBLIC_MESSENGER,
//       color: "bg-blue-500 hover:bg-blue-600",
//     },
//     {
//       name: "الهاتف",
//       icon: <FaPhoneAlt className="w-6 h-6" />,
//       link: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
//       color: "bg-orange-500 hover:bg-orange-600",
//     },
//   ]
//   return (
//     <section className="bg-orange-200 py-16 text-center ">
//       <div className="max-w-3xl mx-auto px-6">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           هل أنت جاهز لبدء مشروعك؟
//         </motion.h2>

//         <motion.p
//           className="text-lg mb-8 text-black/90"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           تواصل معنا الآن للحصول على استشارة مجانية وعرض مميز خاص بك
//         </motion.p>

//         <motion.h3
//           className="text-2xl font-semibold underline underline-offset-4 mb-10 text-orange-600"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           تواصل معنا
//         </motion.h3>

      

//         <motion.div
//           className="flex justify-center gap-3 sm:gap-5 sm:mb-6 mb-4"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           {contactMethods.map((method) => (
//             <motion.a
//               key={method.name}
//               href={method.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`${method.color} text-white p-2 sm:p-4 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-110 flex items-center justify-center`}
//               title={method.name}
//               whileHover={{ rotate: 10, scale: 1.15 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {method.icon}
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }







"use client"

import { motion } from "framer-motion"
import { FaFacebookMessenger, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { Fragment } from "react"

export function ContactCTA() {
  const contactMethods = [
    {
      name: "واتساب",
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: process.env.NEXT_PUBLIC_WHATSAPP,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "ماسنجر",
      icon: <FaFacebookMessenger className="w-6 h-6" />,
      link: process.env.NEXT_PUBLIC_MESSENGER,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "الهاتف",
      icon: <FaPhoneAlt className="w-6 h-6" />,
      link: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "مؤسسة القطاوي للدواجن",
    url: "https://alqattawi-poultry.vercel.app/", // ضع رابط موقعك الفعلي هنا
    contactPoint: contactMethods.map((method) => ({
      "@type": "ContactPoint",
      contactType: method.name,
      url: method.link,
      availableLanguage: ["Arabic"],
    })),
  }

  return (
    <Fragment>
      <section
        className="bg-orange-100 py-16 text-center"
        aria-labelledby="contact-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            id="contact-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            هل أنت جاهز لبدء مشروعك في تربية الدواجن؟
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            تواصل معنا الآن للحصول على استشارة مجانية وعرض مميز خاص بك لضمان نجاح مشروعك.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold underline underline-offset-4 mb-10 text-orange-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            قنوات الاتصال
          </motion.h3>

          <motion.div
            className="flex justify-center gap-3 sm:gap-5 sm:mb-6 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${method.color} text-white p-2 sm:p-4 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-110 flex items-center justify-center`}
                title={`تواصل عبر ${method.name}`}
                aria-label={`تواصل معنا عبر ${method.name}`}
                whileHover={{ rotate: 10, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {method.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Structured Data لتوضيح معلومات الاتصال لمحركات البحث */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Fragment>
  )
}
