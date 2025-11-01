export const languages = {
  ar: "العربية",
  en: "English",
} as const

export type Language = keyof typeof languages

export const translations = {
  ar: {
    siteName: "القطاوي للدواجن",
    nav: {
      home: "الرئيسية",
      guidelines: "الإرشادات",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    hero: {
      title: "مرحباً بك في القطاوي للدواجن",
      subtitle: "توزيع متخصص للكتاكيت والبط مع خدمات بيطرية شاملة وبرامج تحصين متقدمة",
      cta: "احجز الآن",
      explore: "استكشف المنتجات",
    },
    services: {
      title: "خدماتنا المتميزة",
      supply: "توريد الكتاكيت والبط",
      medicines: "الأدوية البيطرية",
      vaccination: "برامج التحصين",
      guidance: "إرشادات التربية",
    },
    products: {
      title: "أنواع الكتاكيت والبط",
      broilerCompanies: "تسمين شركات",
      sasoo: "ساسو",
      fayoumi: "فيومي",
      baladi: "بلدي",
      gimmeza: "جميزة",
      duckFrench: "بط فرنساوي",
      duckMuscovy: "بط مسكوفي",
      duckPure: "بط بيور",
      duckMullerLocal: "بط مولر محلي",
      duckMullerImported: "بط مولر مستورد",
      quail: "سمان",
      bookNow: "احجز الآن",
      price: "السعر",
      contact: "تواصل معنا",
    },
    vaccination: {
      title: "برامج التحصين المتقدمة",
      description: "برامج تحصين شاملة لضمان صحة وسلامة الدواجن",
      program1: "برنامج التحصين الأساسي",
      program2: "برنامج التحصين المتقدم",
      program3: "برنامج الحماية الكاملة",
    },
    why: {
      title: "لماذا تختار القطاوي؟",
      quality: "جودة عالية",
      support: "دعم فني متخصص",
      experience: "خبرة طويلة في المجال",
    },
    contact: {
      title: "تواصل معنا",
      phone: "الهاتف",
      whatsapp: "واتس آب",
      messenger: "ماسنجر",
      directContact: "تواصل مباشر",
    },
  },
  en: {
    siteName: "Al-Qattawi Poultry",
    nav: {
      home: "Home",
      guidelines: "Guidelines",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "Welcome to Al-Qattawi Poultry",
      subtitle:
        "Specialized distribution of chicks and ducks with comprehensive veterinary services and advanced vaccination programs",
      cta: "Book Now",
      explore: "Explore Products",
    },
    services: {
      title: "Our Premium Services",
      supply: "Chicks & Ducks Supply",
      medicines: "Veterinary Medicines",
      vaccination: "Vaccination Programs",
      guidance: "Breeding Guidance",
    },
    products: {
      title: "Types of Chicks & Ducks",
      broilerCompanies: "Broiler Companies",
      sasoo: "Sasoo",
      fayoumi: "Fayoumi",
      baladi: "Baladi",
      gimmeza: "Gimmeza",
      duckFrench: "French Duck",
      duckMuscovy: "Muscovy Duck",
      duckPure: "Pure Duck",
      duckMullerLocal: "Muller Duck Local",
      duckMullerImported: "Muller Duck Imported",
      quail: "Quail",
      bookNow: "Book Now",
      price: "Price",
      contact: "Contact Us",
    },
    vaccination: {
      title: "Advanced Vaccination Programs",
      description: "Comprehensive vaccination programs to ensure the health and safety of poultry",
      program1: "Basic Vaccination Program",
      program2: "Advanced Vaccination Program",
      program3: "Complete Protection Program",
    },
    why: {
      title: "Why Choose Al-Qattawi?",
      quality: "Premium Quality",
      support: "Expert Technical Support",
      experience: "Years of Experience",
    },
    contact: {
      title: "Contact Us",
      phone: "Phone",
      whatsapp: "WhatsApp",
      messenger: "Messenger",
      directContact: "Direct Contact",
    },
  },
} as const

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}
