"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function FieldsOfOperation() {
  const t = useTranslations();

  const fields = [
    t("fields.center"),
    t("fields.license"),
    t("fields.international"),
    t("fields.domestic"),
    "Tư vấn miễn phí",
    "Dịch vụ uy tín",
    "Thủ tục nhanh gọn",
    "Bảo mật thông tin",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("fields.title")}
            </h2>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "-100%" }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
            viewport={{ once: false }}
          >
            <div className="flex space-x-6 whitespace-nowrap">
              {[...fields, ...fields].map((field, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex-shrink-0">
                    {field}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 