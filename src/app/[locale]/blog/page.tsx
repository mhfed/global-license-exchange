import { Suspense } from 'react';
import { client, POSTS_QUERY } from '@/lib/sanity';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogCardSkeleton } from '@/components/blog/blog-card-skeleton';
import { BlogHeader } from '@/components/blog/blog-header';
import type { SanityDocument } from 'next-sanity';

const options = { next: { revalidate: 60 } };

async function BlogPosts({ locale }: { locale: string }) {
  const posts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    { locale },
    options
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} locale={locale} />
      ))}
    </div>
  );
}

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