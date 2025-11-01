"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function VaccinationPrograms() {
  const { language } = useLanguage()
  const t = translations[language]

  const programs = [
    {
      key: "program1",
      title: language === "ar" ? "برنامج التطعيم الأساسي" : "Basic Vaccination Program",
      icon: "💉",
      vaccines: [
        {
          name: language === "ar" ? "لقاح نيوكاسل" : "Newcastle Vaccine",
          age: language === "ar" ? "اليوم 1" : "Day 1",
        },
        {
          name: language === "ar" ? "لقاح الجمبورو" : "Gumboro Vaccine",
          age: language === "ar" ? "اليوم 10" : "Day 10",
        },
        {
          name: language === "ar" ? "لقاح الإنفلونزا" : "Influenza Vaccine",
          age: language === "ar" ? "اليوم 21" : "Day 21",
        },
      ],
      price: language === "ar" ? "50 ر.س" : "$15",
      color: "from-blue-500 to-blue-600",
    },
    {
      key: "program2",
      title: language === "ar" ? "برنامج التطعيم المتقدم" : "Advanced Vaccination Program",
      icon: "🛡️",
      vaccines: [
        {
          name: language === "ar" ? "لقاح نيوكاسل المحسّن" : "Enhanced Newcastle",
          age: language === "ar" ? "اليوم 1" : "Day 1",
        },
        {
          name: language === "ar" ? "لقاح الجمبورو المحسّن" : "Enhanced Gumboro",
          age: language === "ar" ? "اليوم 10" : "Day 10",
        },
        {
          name: language === "ar" ? "لقاح الإنفلونزا" : "Influenza Vaccine",
          age: language === "ar" ? "اليوم 21" : "Day 21",
        },
        {
          name: language === "ar" ? "لقاح الكوكسيديا" : "Coccidiosis Vaccine",
          age: language === "ar" ? "اليوم 35" : "Day 35",
        },
      ],
      price: language === "ar" ? "100 ر.س" : "$30",
      color: "from-purple-500 to-purple-600",
    },
    {
      key: "program3",
      title: language === "ar" ? "برنامج الحماية الشاملة" : "Complete Protection Program",
      icon: "⭐",
      vaccines: [
        {
          name: language === "ar" ? "لقاح نيوكاسل المحسّن" : "Enhanced Newcastle",
          age: language === "ar" ? "اليوم 1" : "Day 1",
        },
        {
          name: language === "ar" ? "لقاح الجمبورو المحسّن" : "Enhanced Gumboro",
          age: language === "ar" ? "اليوم 10" : "Day 10",
        },
        {
          name: language === "ar" ? "لقاح الإنفلونزا" : "Influenza Vaccine",
          age: language === "ar" ? "اليوم 21" : "Day 21",
        },
        {
          name: language === "ar" ? "لقاح الكوكسيديا" : "Coccidiosis Vaccine",
          age: language === "ar" ? "اليوم 35" : "Day 35",
        },
        { name: language === "ar" ? "لقاح الجدري" : "Pox Vaccine", age: language === "ar" ? "اليوم 45" : "Day 45" },
      ],
      price: language === "ar" ? "150 ر.س" : "$45",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const medicines = [
    {
      name: language === "ar" ? "فيتامينات ومعادن" : "Vitamins & Minerals",
      description:
        language === "ar"
          ? "مكملات غذائية شاملة لتعزيز النمو والمناعة"
          : "Comprehensive supplements for growth and immunity",
      icon: "💊",
    },
    {
      name: language === "ar" ? "مضادات حيوية" : "Antibiotics",
      description:
        language === "ar" ? "علاجات فعالة للعدوى البكتيرية" : "Effective treatments for bacterial infections",
      icon: "🔬",
    },
    {
      name: language === "ar" ? "مضادات الطفيليات" : "Anti-Parasitic",
      description:
        language === "ar" ? "حماية من الطفيليات الداخلية والخارجية" : "Protection from internal and external parasites",
      icon: "🛡️",
    },
    {
      name: language === "ar" ? "محفزات النمو" : "Growth Promoters",
      description: language === "ar" ? "تحسين معدل النمو والإنتاجية" : "Improve growth rate and productivity",
      icon: "📈",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vaccination Programs */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-top-4">
              {t.vaccination.title}
            </h2>
            <p className="text-lg text-foreground/60 mb-4">{t.vaccination.description}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.key}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{program.icon}</div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <div className="text-3xl font-bold mt-2">{program.price}</div>
                </div>

                {/* Vaccines List */}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    {language === "ar" ? "جدول التطعيم:" : "Vaccination Schedule:"}
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {program.vaccines.map((vaccine, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/70 group-hover:text-foreground transition"
                      >
                        <span className="text-primary font-bold mt-1">✓</span>
                        <div>
                          <div className="font-semibold text-foreground">{vaccine.name}</div>
                          <div className="text-sm text-foreground/60">{vaccine.age}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition group-hover:shadow-lg">
                    {language === "ar" ? "اختر البرنامج" : "Choose Program"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medicines Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-top-4">
              {language === "ar" ? "الأدوية البيطرية" : "Veterinary Medicines"}
            </h2>
            <p className="text-lg text-foreground/60 mb-4">
              {language === "ar"
                ? "مجموعة شاملة من الأدوية والمكملات الموثوقة"
                : "Comprehensive range of trusted medicines and supplements"}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicines.map((medicine, index) => (
              <div
                key={medicine.name}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {medicine.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                  {medicine.name}
                </h3>
                <p className="text-foreground/70 text-sm">{medicine.description}</p>
                <button className="w-full mt-4 bg-primary/10 text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition">
                  {language === "ar" ? "استفسر الآن" : "Inquire Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
