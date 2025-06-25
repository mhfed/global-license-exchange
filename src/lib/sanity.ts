import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "vki2acig",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
});

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Re-export from the new client for backward compatibility
export { sanityClient } from './sanity.client';
export * from './queries';

// Legacy queries for backward compatibility
export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && locale == $locale
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  excerpt,
  coverImage,
  publishedAt
}`;

export const POST_QUERY = `*[
  _type == "post" 
  && slug.current == $slug 
  && locale == $locale
][0]{
  _id,
  title,
  slug,
  content,
  coverImage,
  publishedAt,
  excerpt
}`;

export const FEATURED_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && locale == $locale
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt
}`; 