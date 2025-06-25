import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "vki2acig",
  dataset: "production",
  apiVersion: "2025-01-25",
  useCdn: true,
});

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// GROQ Queries
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
  body,
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