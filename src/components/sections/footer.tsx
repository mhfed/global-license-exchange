"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Driver License Conversion</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dịch vụ đổi bằng lái xe quốc tế sang bằng lái xe Việt Nam uy tín và chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("navigation.services")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t("navigation.blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t("navigation.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@drivelicense.vn</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
            </ul>
          </div>

          {/* Language Switcher */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.language")}</h4>
            <div className="space-y-3">
              <Link
                href="/vi"
                className="block w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                🇻🇳 Tiếng Việt
              </Link>
              <Link
                href="/en"
                className="block w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                🇺🇸 English
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Driver License Conversion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 