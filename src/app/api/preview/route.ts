import { redirect } from 'next/navigation';
import { draftMode } from 'next/headers';
import { sanityClient } from '@/lib/sanity.client';
import { postBySlugQuery } from '@/lib/queries';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const locale = searchParams.get('locale') || 'en';

  // Check the secret
  if (!secret || secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  // Check if the provided slug exists
  if (!slug) {
    return new Response('No slug provided', { status: 400 });
  }

  // Fetch the post to check if it exists
  const post = await sanityClient.fetch(postBySlugQuery, { slug: slug.replace(`/${locale}/blog/`, '') });

  // If the post doesn't exist prevent preview mode from being enabled
  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  // Enable Preview Mode by setting the cookies
  (await draftMode()).enable();

  // Redirect to the post
  redirect(slug);
}

export async function DELETE() {
  (await draftMode()).disable();
  
  return new Response('Preview mode disabled', { status: 200 });
} 