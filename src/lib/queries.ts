import { groq } from 'next-sanity';

// Query để lấy danh sách posts theo locale
export const postsByLocaleQuery = groq`
  *[_type == "post" && locale == $locale] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    locale,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color
    },
    "slug": slug.current
  }[0...20]
`;

// Query để lấy post theo slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    content,
    publishedAt,
    locale,
    seo,
    author->{
      name,
      slug,
      image,
      bio
    },
    categories[]->{
      title,
      slug,
      color
    },
    "slug": slug.current
  }
`;

// Query để lấy tất cả slugs cho generateStaticParams
export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    locale
  }
`;

// Query để lấy related posts
export const relatedPostsQuery = groq`
  *[_type == "post" && locale == $locale && slug.current != $slug && count(categories[@._ref in $categories]) > 0] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    locale,
    author->{
      name,
      slug,
      image
    },
    "slug": slug.current
  }[0...3]
`;

// Query để lấy featured posts
export const featuredPostsQuery = groq`
  *[_type == "post" && locale == $locale] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    locale,
    author->{
      name,
      slug,
      image
    },
    "slug": slug.current
  }[0...6]
`;

// Query để lấy posts theo category
export const postsByCategoryQuery = groq`
  *[_type == "post" && locale == $locale && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    locale,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color
    },
    "slug": slug.current
  }
`;

// Query để lấy all categories
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title.en asc) {
    _id,
    title,
    slug,
    description,
    color,
    "slug": slug.current,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`; 