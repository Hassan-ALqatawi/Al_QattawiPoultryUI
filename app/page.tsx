

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ProductsSection } from "@/components/products-section";
import { MedicinesSection } from "@/components/medicines-section";
import { VaccinationSection } from "@/components/vaccination-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { Footer } from "@/components/footer";
import { ContactCTA } from "@/components/CTA-Section";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import SchemaSite from "@/components/SchemaSite";


// ✅ بيانات SEO (خاصة بـ Next.js 15.2.4)
export const metadata = {
  title: "القطاوي للدواجن | أسعار الكتاكيت اليوم وبورصة الكتاكيت",
  description:
    "القطاوي للدواجن — رائد في بيع الكتاكيت والبط وتوفير أحدث أسعار الكتاكيت اليوم في مصر. اكتشف خدماتنا في الأدوية والتحصينات ودليل التربية الكامل للدواجن.",
  keywords: [
    "القطاوي للدواجن",
    "أسعار الكتاكيت اليوم",
    "بورصة الكتاكيت",
    "الكتاكيت البيضاء",
    "الكتاكيت الساسو",
    "الكتاكيت البلدي",
    "أسعار البط اليوم",
    "دليل تربية الكتاكيت",
    "الأدوية البيطرية",
    "التحصينات للدواجن",
  ],
  openGraph: {
    title: "القطاوي للدواجن | أسعار الكتاكيت اليوم",
    description:
      "تابع أحدث أسعار الكتاكيت في مصر من القطاوي للدواجن. خدماتنا تشمل بيع الكتاكيت، الأدوية البيطرية، والتحصينات بدعم فني متكامل.",
    url: "https://alqattawi-poultry.vercel.app/",
    siteName: "القطاوي للدواجن",
    images: [
      {
        url: "https://alqattawi-poultry.vercel.app/images/hero-og.jpg",
        width: 1200,
        height: 630,
        alt: "القطاوي للدواجن - أسعار الكتاكيت اليوم",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "القطاوي للدواجن | أسعار الكتاكيت اليوم",
    description:
      "تابع معنا أسعار الكتاكيت والبط يوميًا من القطاوي للدواجن — خبرة، جودة، ودعم بيطري شامل.",
  },
};

// ✅ الصفحة الرئيسية
export default function Home() {
  return (
    <>
      {/* بيانات JSON-LD لمساعدة Google في فهم نشاط الموقع */}
      <SchemaLocalBusiness />
      <SchemaSite />
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <MedicinesSection />
      <VaccinationSection />
      <WhyChooseSection />
      <ContactCTA />
      <Footer />
    </>
  );
}
