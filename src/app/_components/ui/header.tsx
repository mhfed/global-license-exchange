"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const navigation = [
    { name: t("nav.about"), href: `/${locale}/gioi-thieu` },
    { name: t("nav.procedure"), href: `/${locale}/thu-tuc` },
    { name: t("nav.services"), href: `/${locale}/dich-vu` },
    { name: t("nav.exchange"), href: `/${locale}/doi-bang` },
    { name: t("nav.faq"), href: `/${locale}/hoi-dap` },
    { name: t("nav.experience"), href: `/${locale}/kinh-nghiem` },
    { name: t("nav.contact"), href: `/${locale}/lien-he` },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const switchLocale = (newLocale: string) => {
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                <Image
                  src="/api/placeholder/56/56"
                  alt="IAA Vietnam Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                  {t("header.logoText")}
                </h1>
                <p className="text-xs lg:text-sm text-blue-600 font-medium">
                  IAA VIETNAM
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-full p-1">
                <Button
                  variant={locale === 'vi' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => switchLocale('vi')}
                  className="h-8 px-3 text-xs font-medium rounded-full"
                >
                  VI
                </Button>
                <Button
                  variant={locale === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => switchLocale('en')}
                  className="h-8 px-3 text-xs font-medium rounded-full"
                >
                  EN
                </Button>
              </div>

              {/* Mobile Language Switcher */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => switchLocale(locale === 'vi' ? 'en' : 'vi')}
                  className="h-8 w-8 p-0"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="lg:hidden h-8 w-8 p-0"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
                onClick={toggleMobileMenu}
              />
            </motion.div>

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {t("nav.menu")}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMobileMenu}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMobileMenu}
                          className="block text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-4">{t("nav.language")}</p>
                    <div className="flex space-x-3">
                      <Button
                        variant={locale === 'vi' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          switchLocale('vi');
                          toggleMobileMenu();
                        }}
                        className="flex-1"
                      >
                        Tiếng Việt
                      </Button>
                      <Button
                        variant={locale === 'en' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          switchLocale('en');
                          toggleMobileMenu();
                        }}
                        className="flex-1"
                      >
                        English
                      </Button>
                    </div>
                  </div>
                </nav>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 