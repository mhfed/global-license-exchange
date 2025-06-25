"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Headphones } from "lucide-react";

export function HeroHighlights() {
  const t = useTranslations();

  const highlights = [
    {
      icon: Clock,
      title: t("highlights.fast.title"),
      description: t("highlights.fast.description"),
    },
    {
      icon: Shield,
      title: t("highlights.secure.title"),
      description: t("highlights.secure.description"),
    },
    {
      icon: Headphones,
      title: t("highlights.support.title"),
      description: t("highlights.support.description"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="h-full">
                  <Card className="h-full text-center p-6 hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                    <CardContent className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
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