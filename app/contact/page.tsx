
"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ContactMethods } from "@/components/contact-methods"



function ContactContent() {
  
  return (
    <>
      <Header />
      <PageHeader
        title={"تواصل معنا"}
        subtitle="نحن هنا للإجابة على جميع استفساراتك وتقديم المساعدة اللازمة. يمكنك التواصل معنا من خلال أي من وسائل الاتصال التالية:

" 
      />

      <main className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Methods */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              { "طرق التواصل"}
            </h2>
            <ContactMethods />
          </div>

          
          {/* FAQ Section */}
          <div className="mt-20 bg-primary/10 rounded-xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {"الأسئلة الشائعة"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {"كيف أطلب الكتاكيت؟"}
                </h4>
                <p className="text-foreground/70 text-sm">
                  {"يمكنك التواصل معنا عبر الهاتف أو الواتس آب لتقديم طلبك"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {"ما هي أوقات العمل؟" }
                </h4>
                <p className="text-foreground/70 text-sm">
                  {"نعمل من السبت إلى الخميس من 8 صباحاً إلى 6 مساءً"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {"هل تقدمون خدمة التوصيل؟"}
                </h4>
                <p className="text-foreground/70 text-sm">
                  {"نعم، نوفر خدمة توصيل سريعة وآمنة"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {"هل هناك ضمان على المنتجات؟"}
                </h4>
                <p className="text-foreground/70 text-sm">
                  { "نقدم ضمان جودة شامل على جميع منتجاتنا"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    
      <ContactContent />
    
  )
}
