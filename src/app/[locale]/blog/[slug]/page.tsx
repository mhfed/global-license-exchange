import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { sanityClient } from '@/lib/sanity.client';
import { postBySlugQuery, allPostSlugsQuery } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import { Button } from '@/components/ui/button';
import { portableTextComponents } from '@/components/portable-text-components';
import type { SanityDocument } from 'next-sanity';

const options = { next: { revalidate: 60 } };

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<{ slug: string; locale: string }[]>(
    allPostSlugsQuery
  );

  return slugs.map(({ slug, locale }) => ({
    slug,
    locale,
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  
  const post = await sanityClient.fetch<SanityDocument>(
    postBySlugQuery,
    { slug },
    options
  );

  if (!post) {
    return {};
  }

  const title = post.title?.[locale] || post.title?.en || post.title?.vi || 'Blog Post';
  const description = post.excerpt?.[locale] || post.excerpt?.en || post.excerpt?.vi || '';
  const seoTitle = post.seo?.metaTitle?.[locale] || title;
  const seoDescription = post.seo?.metaDescription?.[locale] || description;
  
  const imageUrl = post.coverImage 
    ? urlFor(post.coverImage)?.width(1200).height(630).url()
    : null;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export const revalidate = 60;

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  
  const post = await sanityClient.fetch<SanityDocument>(
    postBySlugQuery,
    { slug },
    options
  );

  if (!post) {
    notFound();
  }

  const title = post.title?.[locale] || post.title?.en || post.title?.vi || 'Blog Post';
  const excerpt = post.excerpt?.[locale] || post.excerpt?.en || post.excerpt?.vi || '';
  
  const imageUrl = post.coverImage 
    ? urlFor(post.coverImage)?.width(1200).height(600).url()
    : null;

  return (
    <article className="min-h-screen py-20">
      <div className="container max-w-4xl">
        {/* Back button */}
        <Link href={`/${locale}/blog`} className="inline-flex items-center mb-8">
          <Button variant="ghost" className="p-0 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {locale === 'vi' ? 'Quay lại Blog' : 'Back to Blog'}
          </Button>
        </Link>

        {/* Cover Image */}
        {imageUrl && (
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {title}
          </h1>
          
          {excerpt && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            {post.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
                             {post.categories.map((category: { _id: string; title: { [key: string]: string }; color: string }) => (
                <span
                  key={category._id}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    category.color === 'green' ? 'bg-green-100 text-green-800' :
                    category.color === 'red' ? 'bg-red-100 text-red-800' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    category.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {category.title?.[locale] || category.title?.en || category.title?.vi}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
          {Array.isArray(post.content) && (
            <PortableText 
              value={post.content}
              components={portableTextComponents}
            />
          )}
        </div>
      </div>
    </article>
  );
} 