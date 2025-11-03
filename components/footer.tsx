// "use client"

// import Link from "next/link"
// import { motion, Variants } from "framer-motion"
// import { Phone, MapPin } from "lucide-react"
// import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa"

// export function Footer() {
//   const phone = process.env.NEXT_PUBLIC_PHONE
//   const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP
//   const messenger = process.env.NEXT_PUBLIC_MESSENGER
//   const address = process.env.NEXT_PUBLIC_ADDRESS

//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.18,
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     }),
//   }

//   return (
//     <footer className="bg-gradient-to-br from-orange-600 to-amber-500 text-white py-14 mt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-10 mb-10">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             custom={0}
//           >
//             <h4 className="font-extrabold text-2xl mb-3 tracking-wide text-white">
//                القطاوي للدواجن
//             </h4>
//             <p className="opacity-90 leading-relaxed text-sm">
//              الشريك المؤثوق في تربية للدواجن. و نقدم خدمات متكاملة لمزارع الدواجن، من توفير الكتاكيت والمعدات إلى الإرشادات الفنية والدعم المستمر حتى البيع.
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             custom={1}
//           >
//             <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-1 w-fit">
//               روابط سريعة
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href={`/`} className="hover:translate-x-1 inline-block transition-transform">
//                   الرئيسية
//                 </Link>
//               </li>
//               <li>
//                 <Link href={`/chick-guidelines`} className="hover:translate-x-1 inline-block transition-transform">
//                   دليل الكتاكيت
//                 </Link>
//               </li>
//               <li>
//                 <Link href={`/about`} className="hover:translate-x-1 inline-block transition-transform">
//                   من نحن
//                 </Link>
//               </li>
//               <li>
//                 <Link href={`/contact`} className="hover:translate-x-1 inline-block transition-transform">
//                   تواصل معنا
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             custom={2}
//           >
//             <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-1 w-fit">
//               خدماتنا
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href={`/#products`} className="hover:translate-x-1 inline-block transition-transform">
//                   توريد الكتاكيت
//                 </Link>
//               </li>
//               <li>
//                 <Link href={`/#medicines`} className="hover:translate-x-1 inline-block transition-transform">
//                   أدوية بيطرية
//                 </Link>
//               </li>
//               <li>
//                 <Link href={`/#vaccinations`} className="hover:translate-x-1 inline-block transition-transform">
//                   برامج تحصين
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             custom={3}
//           >
//             <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-1 w-fit">
//               تواصل
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-white/90" />
//                 {address}
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-5 h-5 text-white/90" /> {phone}
//               </li>
//               <li>
//                 <a
//                   href={whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-400 transition"
//                 >
//                   <FaWhatsapp className="w-5 h-5" /> واتساب
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={messenger}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-blue-400 transition"
//                 >
//                   <FaFacebookMessenger className="w-5 h-5" /> ماسنجر
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={4}
//           className="border-t border-white/30 pt-6 text-center text-sm opacity-90"
//         >
//           <p>
//             جميع الحقوق محفوظة © 2025 القطاوي للدواجن.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }








"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Phone, MapPin } from "lucide-react"
import { FaWhatsapp, FaFacebookMessenger, FaPhone } from "react-icons/fa"
import { Fragment } from "react"

export function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP
  const messenger = process.env.NEXT_PUBLIC_MESSENGER || "https://m.me/100076990531364"
  const address = process.env.NEXT_PUBLIC_ADDRESS



   const getWhatsAppLink = () => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP || "201062790104";
    if (typeof window !== "undefined" && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      return `https://wa.me/${number}?text=${encodeURIComponent("مرحبًا، أود الاستفسار عن خدماتكم.")}`;
    }
    return `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent("مرحبًا، أود الاستفسار عن خدماتكم.")}`;
  };

  const getPhoneLink = () => {
    const number = process.env.NEXT_PUBLIC_PHONE || "01068662069";
    if (typeof window !== "undefined" && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      // على الهاتف: يفتح تطبيق الاتصال مباشرة
      return `tel:${number}`;
    }
    // على الكمبيوتر: يعرض نافذة لنسخ الرقم أو يعيد توجيه المستخدم مثلًا
    return `javascript:alert("📞 يمكنك الاتصال بنا على الرقم: ${number}");`;
  };



  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.18,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "القطاوي للدواجن",
    url: "https://alqattawi-poultry.vercel.app/", // ضع رابط موقعك الفعلي هنا
    address: address,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        availableLanguage: ["Arabic"],
      },
      {
        "@type": "ContactPoint",
        contactType: "WhatsApp",
        url: whatsapp,
        availableLanguage: ["Arabic"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Messenger",
        url: messenger,
        availableLanguage: ["Arabic"],
      },
    ],
  }

  return (
    <Fragment>
      <footer className="bg-gradient-to-br from-orange-600 to-amber-500 text-white py-14 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* نبذة عن الشركة */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h4 className="font-extrabold text-2xl mb-3 tracking-wide text-white">
                القطاوي للدواجن
              </h4>
              <p className="opacity-90 leading-relaxed text-sm">
                الشريك الموثوق في تربية الدواجن. نقدم خدمات متكاملة لمزارع الدواجن، من توفير الكتاكيت والأعلاف والأدوية إلى الإرشادات الفنية والدعم المستمر حتى تحقيق أعلى إنتاجية وربحية.
              </p>
            </motion.div>

            {/* روابط سريعة */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-1 w-fit">
                روابط سريعة
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={`/`} className="hover:translate-x-1 inline-block transition-transform">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href={`/chick-guidelines`} className="hover:translate-x-1 inline-block transition-transform">
                    دليل التربية
                  </Link>
                </li>
                <li>
                  <Link href={`/about`} className="hover:translate-x-1 inline-block transition-transform">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href={`/contact`} className="hover:translate-x-1 inline-block transition-transform">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* خدماتنا */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-1 w-fit">
                خدماتنا
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={`/#products`} className="hover:translate-x-1 inline-block transition-transform">
                    توريد الكتاكيت
                  </Link>
                </li>
                <li>
                  <Link href={`/#medicines`} className="hover:translate-x-1 inline-block transition-transform">
                    أدوية بيطرية
                  </Link>
                </li>
                <li>
                  <Link href={`/#vaccinations`} className="hover:translate-x-1 inline-block transition-transform">
                    برامج التحصين
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* معلومات الاتصال */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-1 w-fit">
                تواصل معنا
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white/90" aria-hidden="true" />
                  <span>{address}</span>
                </li>
                <li className="flex items-center gap-2">
                  
                  <a
                    href={getPhoneLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="تواصل معنا عبر الهاتف"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                  >
                   <FaPhone className="w-5 h-5 text-white/90" />{phone}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="تواصل معنا عبر واتساب"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                  >
                    <FaWhatsapp className="w-5 h-5" /> واتساب
                  </a>
                </li>
                <li>
                  <a
                    href={messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="تواصل معنا عبر ماسنجر"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <FaFacebookMessenger className="w-5 h-5" /> ماسنجر
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="border-t border-white/30 pt-6 text-center text-sm opacity-90"
          >
            <p>
              جميع الحقوق محفوظة © 2025 القطاوي للدواجن.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Structured Data للـ SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Fragment>
  )
}
