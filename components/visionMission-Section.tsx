"use client"

import { motion } from "framer-motion"
import { FaEye, FaBullseye } from "react-icons/fa"

export default function VisionMissionSection() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* رؤيتنا */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <FaEye className="text-orange-600 text-3xl ml-3" />
              <h3 className="text-2xl font-semibold ">رؤيتنا</h3>
            </div>
            <p className=" leading-relaxed text-lg">
              نسعى لأن نكون روادًا في مجال تربية وتوزيع الدواجن عبر تقديم منتجات ذات جودة عالية
              تساهم في تطوير قطاع الثروة الحيوانية وتلبية احتياجات السوق المحلي والعالمي.
            </p>
          </motion.div>

          {/* رسالتنا */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <FaBullseye className="text-orange-600 text-3xl ml-3" />
              <h3 className="text-2xl font-semibold">رسالتنا</h3>
            </div>
            <p className=" leading-relaxed text-lg">
              التزامنا هو توفير خدمات متكاملة في مجال الدواجن تعتمد على الجودة، الشفافية، والابتكار،
              لضمان رضا عملائنا وتحقيق تنمية مستدامة لمجتمعنا وبيئتنا.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
