"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CustomersGallery() {
  // Mock license images data
  const licenses = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/api/placeholder/300/${200 + (i % 3) * 50}`,
    alt: `Driver License ${i + 1}`,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hình ảnh bằng lái xe đã đổi thành công
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ của chúng tôi
            </p>
          </div>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {licenses.map((license, index) => (
            <motion.div
              key={license.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="break-inside-avoid mb-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={license.src}
                    alt={license.alt}
                    width={300}
                    height={200 + (index % 3) * 50}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">Bằng lái xe #{license.id}</p>
                      <p className="text-xs opacity-80">Đổi thành công</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 