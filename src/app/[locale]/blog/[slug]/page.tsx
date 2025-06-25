import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { client, POST_QUERY, urlFor } from '@/lib/sanity';
import { Button } from '@/components/ui/button';
import type { SanityDocument } from 'next-sanity';

const options = { next: { revalidate: 60 } };

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug, locale },
    options
  );

  if (!post) {
    notFound();
  }

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
            Back to Blog
          </Button>
        </Link>

        {/* Cover Image */}
        {imageUrl && (
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={imageUrl}
              alt={post.title}
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
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {Array.isArray(post.body) && (
            <PortableText 
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => {
                    const imageUrl = urlFor(value)?.width(800).height(600).url();
                    return imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={value.alt || ''}
                        width={800}
                        height={600}
                        className="rounded-2xl my-8"
                      />
                    ) : null;
                  },
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
} 