"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Facebook, MessageCircle, Instagram, Music } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const consultingLinks = [
    { name: t("footer.consulting.license"), href: `/${locale}/tu-van-bang-lai-xe` },
    { name: t("footer.consulting.experience"), href: `/${locale}/kinh-nghiem-doi-bang-lai-xe` },
    { name: t("footer.consulting.service"), href: `/${locale}/dich-vu-doi-bang-lai-xe` },
  ];

  const infoLinks = [
    { name: t("footer.info.security"), href: `/${locale}/bao-mat-thong-tin` },
    { name: t("footer.info.howto"), href: `/${locale}/cach-doi-bang-lai-xe-quoc-te` },
    { name: t("footer.info.payment"), href: `/${locale}/phuong-thuc-thanh-toan` },
    { name: t("footer.info.commitment"), href: `/${locale}/cam-ket-doi-bang-lai-xe` },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/doibanglaixe", color: "hover:text-blue-600" },
    { name: "Zalo", icon: MessageCircle, href: "https://zalo.me/0362904245", color: "hover:text-blue-500" },
    { name: "TikTok", icon: Music, href: "https://tiktok.com/@doibanglaixe", color: "hover:text-gray-800" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/doibanglaixe", color: "hover:text-pink-600" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t("footer.company.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t("footer.company.description")}
              </p>
            </div>

            {/* Consulting Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {t("footer.consulting.title")}
              </h4>
              <ul className="space-y-2">
                {consultingLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Registration Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {t("footer.info.title")}
              </h4>
              <ul className="space-y-2">
                {infoLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {t("footer.contact.title")}
              </h4>
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">{t("footer.contact.address")}:</span><br />
                    Hà Nội: 0362904245
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">{t("footer.contact.phone")}:</span><br />
                    <a href="tel:0362904245" className="hover:text-blue-600 transition-colors">
                      0362904245
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Email:</span><br />
                    <a href="mailto:contact@doibanglaixe.com.vn" className="hover:text-blue-600 transition-colors">
                      contact@doibanglaixe.com.vn
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Website:</span><br />
                    <a href="https://www.doibanglaixe.com.vn" className="hover:text-blue-600 transition-colors">
                      www.doibanglaixe.com.vn
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {t("footer.social.title")}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {t("footer.copyright")}. {t("footer.allRights")}.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href={`/${locale}/chinh-sach-bao-mat`} className="text-gray-500 hover:text-blue-600 transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href={`/${locale}/dieu-khoan-su-dung`} className="text-gray-500 hover:text-blue-600 transition-colors">
                {t("footer.terms")}
              </Link>
              <Link href={`/${locale}/sitemap`} className="text-gray-500 hover:text-blue-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 