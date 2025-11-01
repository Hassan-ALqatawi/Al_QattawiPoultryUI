// "use client"

// import { motion } from "framer-motion"
// import { useState, useEffect } from "react"
// import { MessageCircle, Phone, Facebook } from "lucide-react"
// import { apiClient } from "@/lib/api-client"
// import Link from "next/link"
// import Image from "next/image"

// interface Product {
//   id: number
//   name: string
//   price: number
//   image?: string
//   key: string
// }

// const CACHE_KEY = "productsCache"

// export function ProductsSection() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
//   const [loading, setLoading] = useState(true)
//   const phone = process.env.NEXT_PUBLIC_PHONE
//   const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP
//   const messenger = process.env.NEXT_PUBLIC_MESSENGER

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await apiClient.get<Product[]>("/api/Protacted/GetAllChicks")
//         const mapped = data.map((item) => ({
//           ...item,
//           key: item.name.replace(/\s+/g, "").toLowerCase(),
//         }))
//         setProducts(mapped)
//         localStorage.setItem(CACHE_KEY, JSON.stringify(mapped))
//       } catch (err) {
//         console.error("Failed to fetch products:", err)
//         const cached = localStorage.getItem(CACHE_KEY)
//         if (cached) {
//           setProducts(JSON.parse(cached))
//           console.warn("Loaded products from cache")
//         }
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   if (loading) {
//     return (
//       <section id="products" className="py-20 text-center">
//         <p>جاري تحميل المنتجات...</p>
//       </section>
//     )
//   }

//   if (!products.length) {
//     return (
//       <section id="products" className="py-20 text-center">
//         <p>لا توجد منتجات حاليا.</p>
//       </section>
//     )
//   }

//   return (
//     <section id="products" className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             انواع الكتاكيت و البط
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, scale: 0.9, y: 30 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               onMouseEnter={() => setHoveredProduct(product.key)}
//               onMouseLeave={() => setHoveredProduct(null)}
//               className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-orange-100 shadow-xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={`${product.name} - ${product.price} جنيه | الكتاكيت والبط من القطاوي للدواجن`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-110 animate-float"
//                   priority={index < 3} // يجعل أول 3 صور تُحمّل بسرعة
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>

//               <div className="p-6 flex flex-col">
//                 <h3 className="text-xl text-center font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition">
//                   {product.name}
//                 </h3>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-2xl font-bold text-orange-600">{product.price} جنيه</span>
//                 </div>

//                 <p
//                    className="w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300">
//                     اطلب الآن
                  
//                 </p>

//                 <div className="flex gap-3 mt-3">
//                   <a
//                     href={whatsapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//                     title="واتساب"
//                   >
//                     <MessageCircle className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={messenger}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                     title="ماسنجر"
//                   >
//                     <Facebook className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={`tel:${phone}`}
//                     className="flex-1 flex items-center justify-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
//                     title="الهاتف"
//                   >
//                     <Phone className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
//         .animate-float { animation: float 5s ease-in-out infinite; }
//       `}</style>
//     </section>
//   )
// }










"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, Phone, Facebook } from "lucide-react"
import { apiClient } from "@/lib/api-client"
import Image from "next/image"
import Script from "next/script"

interface Product {
  id: number
  name: string
  price: number
  image?: string
  key: string
}

const CACHE_KEY = "productsCache"

export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const phone = process.env.NEXT_PUBLIC_PHONE
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP
  const messenger = process.env.NEXT_PUBLIC_MESSENGER

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiClient.get<Product[]>("/api/Protacted/GetAllChicks")
        const mapped = data.map((item) => ({
          ...item,
          key: item.name.replace(/\s+/g, "").toLowerCase(),
        }))
        setProducts(mapped)
        localStorage.setItem(CACHE_KEY, JSON.stringify(mapped))
      } catch (err) {
        console.error("Failed to fetch products:", err)
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) setProducts(JSON.parse(cached))
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading)
    return (
      <section id="products" className="py-20 text-center">
        <p>جاري تحميل المنتجات...</p>
      </section>
    )

  if (!products.length)
    return (
      <section id="products" className="py-20 text-center">
        <p>لا توجد منتجات حاليا.</p>
      </section>
    )

  // ✅ بيانات JSON-LD المنظمة (Structured Data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    "name": "أنواع الكتاكيت والبط",
    "url": "https://alqatawi.com/products",
    "description": "أنواع الكتاكيت والبط عالية الجودة من القطاوي للدواجن.",
    "image": products.map((p) => p.image),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "منتجات القطاوي",
      "itemListElement": products.map((product) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": product.name,
          "image": product.image,
          "description": `كتاكيت ${product.name} من أفضل السلالات.`,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "EGP",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "القطاوي للدواجن",
              "url": "https://alqatawi.com",
            },
          },
        },
      })),
    },
  }

  return (
    <section
      id="products"
      aria-label="أنواع الكتاكيت والبط من القطاوي"
      className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden"
    >
      {/* ✅ JSON-LD Schema */}
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* خلفية ناعمة */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            أنواع الكتاكيت والبط
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نوفر أجود أنواع الكتاكيت والبط بسلالات مضمونة من القطاوي للدواجن.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* بطاقات المنتجات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-orange-100 
                         shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* صورة المنتج */}
              <div className="relative h-70 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} - ${product.price} جنيه | الكتاكيت والبط من القطاوي`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 animate-float"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl text-center font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-600">
                    {product.price} جنيه
                  </span>
                </div>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
                >
                  اطلب الآن
                </a>

                {/* وسائل التواصل */}
                <div className="flex gap-3 mt-3">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                    title="واتساب"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href={messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    title="ماسنجر"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="flex-1 flex items-center justify-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    title="الهاتف"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* حركة الصورة */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
