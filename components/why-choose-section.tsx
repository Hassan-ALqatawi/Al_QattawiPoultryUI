
"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Headphones, Award } from "lucide-react"
import { Fragment } from "react"

export function WhyChooseSection() {
  const reasons = [
    {
      key: "quality",
      icon: ShieldCheck,
      color: "from-green-500 to-emerald-600",
      title: "الجودة العالية في الكتاكيت والأعلاف",
      description:
        "نلتزم بتقديم أفضل أنواع الكتاكيت والأعلاف عالية الجودة لضمان نمو صحي وإنتاج مرتفع. نعتمد على سلالات مميزة وأعلاف معتمدة من كبرى الشركات لضمان نجاح كل دورة تربية.",
    },
    {
      key: "support",
      icon: Headphones,
      color: "from-orange-500 to-amber-600",
      title: "دعم فني واستشارات مستمرة",
      description:
        "نوفر لك فريق دعم فني متخصص لمساعدتك في جميع مراحل التربية، من بداية الدورة حتى التسويق، لتضمن أفضل النتائج وتحقيق أعلى الأرباح.",
    },
    {
      key: "experience",
      icon: Award,
      color: "from-blue-500 to-cyan-600",
      title: "خبرة طويلة في مجال تربية الدواجن",
      description:
        "تمتلك مؤسسة القطاوي للدواجن سنوات من الخبرة في السوق المصري، مما يجعلها شريكًا موثوقًا لكل مربي دواجن يبحث عن التميز والجودة والخبرة.",
    },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "لماذا تختار القطاوي للدواجن",
    itemListElement: reasons.map((r, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: r.title,
      description: r.description,
    })),
  }

  return (
    <Fragment>
      <section
        className="py-20 bg-background relative overflow-hidden"
        aria-labelledby="why-choose-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              id="why-choose-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
            >
            لماذا تختار <span className="text-orange-600">القطاوي للدواجن؟</span>
           </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
           transition={{ duration: 0.6, delay: 0.3 }}
         className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full origin-left"
       />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.article
                  key={reason.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  itemScope
                  itemType="https://schema.org/Thing"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${reason.color} text-white shadow-lg`}
                  >
                    <Icon size={40} />
                  </motion.div>

                  <h3
                    className="text-2xl font-semibold text-foreground mb-3"
                    itemProp="name"
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="text-foreground/70 leading-relaxed"
                    itemProp="description"
                  >
                    {reason.description}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Fragment>
  )
}
