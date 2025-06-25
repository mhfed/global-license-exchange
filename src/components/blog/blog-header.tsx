"use client";

import { useTranslations } from "next-intl";

export function BlogHeader() {
  const t = useTranslations();

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        {t('blog.title')}
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Cập nhật thông tin mới nhất về quy trình đổi bằng lái xe quốc tế
      </p>
    </div>
  );
} 