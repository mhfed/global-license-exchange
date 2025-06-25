import { Suspense } from 'react';
import { Metadata } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { postsByLocaleQuery } from '@/lib/queries';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogCardSkeleton } from '@/components/blog/blog-card-skeleton';
import { BlogHeader } from '@/components/blog/blog-header';
import type { SanityDocument } from 'next-sanity';

const options = { next: { revalidate: 60 } };

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Blog - Tin tức và bài viết' : 'Blog - News and Articles',
    description: locale === 'vi' 
      ? 'Khám phá những bài viết mới nhất về công nghệ, lập trình và phát triển web'
      : 'Discover the latest articles about technology, programming and web development',
    openGraph: {
      title: locale === 'vi' ? 'Blog - Tin tức và bài viết' : 'Blog - News and Articles',
      description: locale === 'vi' 
        ? 'Khám phá những bài viết mới nhất về công nghệ, lập trình và phát triển web'
        : 'Discover the latest articles about technology, programming and web development',
      type: 'website',
    },
  };
}

async function BlogPosts({ locale }: { locale: string }) {
  const posts = await sanityClient.fetch<SanityDocument[]>(
    postsByLocaleQuery,
    { locale },
    options
  );

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          {locale === 'vi' ? 'Chưa có bài viết nào.' : 'No posts available yet.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} locale={locale} />
      ))}
    </div>
  );
}

export const revalidate = 60;

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <BlogHeader />

        <Suspense
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <BlogPosts locale={locale} />
        </Suspense>
      </div>
    </div>
  );
} 