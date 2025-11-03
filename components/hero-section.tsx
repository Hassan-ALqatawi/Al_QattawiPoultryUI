
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export function HeroSection() {
  const [contactMethods, setContactMethods] = useState<
    { name: string; icon: JSX.Element; link: string; color: string }[]
  >([]);

 useEffect(() => {
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

  setContactMethods([
    {
      name: "واتساب",
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: getWhatsAppLink(),
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "ماسنجر",
      icon: <FaFacebookMessenger className="w-6 h-6" />,
      link: process.env.NEXT_PUBLIC_MESSENGER || "https://m.me/100076990531364",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "الهاتف",
      icon: <FaPhoneAlt className="w-6 h-6" />,
      link: getPhoneLink(),
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]);
}, []);

  return (
    <section
      className="relative h-auto min-h-[30vh] sm:min-h-[60vh] md:min-h-[80vh] lg:h-[85vh] flex items-end justify-center overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        animate={{
          scale: [1, 1.05, 1],
          filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/main_amge.webp" // صورة موجودة في public
          alt="القطاوي للدواجن - أسعار الكتاكيت اليوم وخدمات بيطرية"
          fill
          className="object-cover object-center"
          priority // لتحميل أسرع على الهيرو
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/30"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-16 text-center">
        <h1
          className="text-3xl sm:text-6xl font-extrabold text-white mb-3 leading-tight drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]"
          itemProp="name"
        >
           القطاوي للدواجن
        </h1>

        <p
          className="text-base sm:text-xl md:text-2xl text-white mb-3 leading-relaxed text-center"
          itemProp="description"
        >
          خدمات بيطرية متميزة. نوفر كتاكيت و بط بأنواعه، أدوية، تحصينات، وإرشادات تربية احترافية لزيادة إنتاجك وجودة مزرعتك.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 flex flex-row flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#products"
            className="bg-orange-500 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg"
          >
            استكشف منتجاتنا
          </Link>

          <Link
            href="#contact"
            className="bg-white text-orange-600 font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:bg-orange-100 transition-colors duration-300 shadow-lg"
          >
            تواصل معنا مباشرة
          </Link>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-5 mb-4"
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
              title={method.name}
              whileHover={{ rotate: 10, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {method.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
