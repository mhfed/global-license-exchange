"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  DollarSign, 
  Headphones, 
  Users, 
  Truck, 
  Heart 
} from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations();

  const features = [
    {
      icon: Award,
      title: t("whyChooseUs.experience"),
    },
    {
      icon: DollarSign,
      title: t("whyChooseUs.save"),
    },
    {
      icon: Headphones,
      title: t("whyChooseUs.support"),
    },
    {
      icon: Users,
      title: t("whyChooseUs.customers"),
    },
    {
      icon: Truck,
      title: t("whyChooseUs.shipping"),
    },
    {
      icon: Heart,
      title: t("whyChooseUs.commitment"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("whyChooseUs.title")}
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-full">
                  <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 bg-white border-2 border-transparent hover:border-blue-100">
                    <CardContent className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 