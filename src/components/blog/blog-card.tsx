"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import type { SanityDocument } from "next-sanity";

interface BlogCardProps {
  post: SanityDocument;
  locale: string;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const imageUrl = post.coverImage 
    ? urlFor(post.coverImage)?.width(600).height(400).url()
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="h-full">
        <Link href={`/${locale}/blog/${post.slug.current}`}>
          <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white">
            {imageUrl && (
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
                {post.title}
              </h3>
            </CardHeader>
            
            <CardContent className="pt-0">
              {post.excerpt && (
                <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </motion.div>
  );
} 