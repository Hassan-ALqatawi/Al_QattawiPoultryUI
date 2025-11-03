
"use client"


import { FaPhoneAlt, FaWhatsapp, FaFacebookMessenger, FaMapMarkerAlt } from "react-icons/fa"

export function ContactMethods() {
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
  
  const methods = [
    {
      icon: <FaPhoneAlt className="text-primary" />,
      title: "الهاتف",
      value: "01068662069 - 01062790104",
      link: getPhoneLink(),
      description:  "اتصل بنا مباشرة",
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      title: "واتساب",
      value: "01062790104",
      link: getWhatsAppLink(),
      description: "تواصل عبر واتساب" ,
    },
    {
      icon: <FaFacebookMessenger className="text-blue-500" />,
      title: "مسنجر" ,
      value: "القطاوي للدواجن",
      link: process.env.NEXT_PUBLIC_MESSENGER || "https://m.me/100076990531364",
      description: "تحدث معنا عبر مسنجر" ,
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: "العنوان" ,
      value: "ابوحماد ، الشرقية ، مصر " ,
      link: "#",
      description:  "زرنا في مقرنا" ,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {methods.map((method, index) => (
        <a
          key={index}
          href={method.link}
          target={method.link?.startsWith("http") ? "_blank" : undefined}
          rel={method.link?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group relative overflow-hidden bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        >
          {/* خلفية متدرجة تظهر عند المرور */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          {/* المحتوى */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-5xl mb-5 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-white transition-colors">
              {method.title}
            </h3>
            <p className="text-primary font-medium mb-2 group-hover:text-white transition-colors">
              {method.value}
            </p>
            <p className="text-sm text-foreground/70 group-hover:text-white/90 transition-colors">
              {method.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
