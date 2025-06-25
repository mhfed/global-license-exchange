# NextJS Blog - Multilingual CMS Application

A modern, multilingual Next.js blog application with Sanity v3 CMS, built with TypeScript, Tailwind CSS, and comprehensive internationalization support.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 3
- **CMS**: Sanity v3 with self-hosted Studio
- **Content**: Portable Text with custom components
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## 🌐 Multilingual Blog Features

- ✅ Vietnamese (vi) and English (en) support
- ✅ Locale-specific content with `localeString` schema
- ✅ SEO optimized with dynamic metadata
- ✅ ISR (Incremental Static Regeneration) with 60s revalidation
- ✅ Live preview mode for draft content
- ✅ Self-hosted Sanity Studio at `/studio`
- ✅ Rich text content with Portable Text
- ✅ Image optimization with Next.js Image
- ✅ Category system with color coding
- ✅ Author management with bio and images

## 📁 Project Structure

```
nextjs-hello-world/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx              # Locale-specific layout
│   │   │   ├── page.tsx                # Landing page
│   │   │   └── blog/
│   │   │       ├── page.tsx            # Blog listing (supports both languages)
│   │   │       └── [slug]/page.tsx     # Blog detail with ISR
│   │   ├── api/
│   │   │   └── preview/route.ts        # Preview mode API
│   │   ├── studio/[[...index]]/        # Sanity Studio route
│   │   ├── globals.css                 # Global styles
│   │   └── layout.tsx                  # Root layout
│   ├── components/
│   │   ├── portable-text-components.tsx # Custom Portable Text renderers
│   │   ├── sections/                   # Landing page sections
│   │   ├── blog/                       # Blog components
│   │   └── ui/                         # Reusable UI components
│   ├── lib/
│   │   ├── sanity.client.ts           # Sanity client configuration
│   │   ├── sanity.ts                  # Legacy client (backward compatibility)
│   │   ├── queries.ts                 # GROQ queries for all content
│   │   └── utils.ts                   # Utility functions
│   ├── i18n.ts                        # Internationalization config
│   └── middleware.ts                  # i18n middleware
├── messages/
│   ├── vi.json                        # Vietnamese UI translations
│   └── en.json                        # English UI translations
├── sanity/
│   ├── schemas/
│   │   ├── localeString.ts            # Multilingual string schema
│   │   ├── author.ts                  # Author schema
│   │   ├── category.ts                # Category schema
│   │   ├── post.ts                    # Blog post schema
│   │   ├── blockContent.ts            # Rich text schema
│   │   └── index.ts                   # Schema exports
│   ├── deskStructure.ts               # Studio organization by locale
│   └── sanity.config.ts               # Sanity v3 configuration
└── public/                            # Static assets
```

## 🛠 Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)
- Sanity account (free at sanity.io)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-hello-world
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Variables**
   Create a `.env.local` file:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=vki2acig
   NEXT_PUBLIC_SANITY_DATASET=production
   
   # Optional: Token for preview mode and private content
   SANITY_API_READ_TOKEN=your_read_token_here
   
   # Optional: Secret for preview mode
   SANITY_PREVIEW_SECRET=mySecret
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Access Sanity Studio**
   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

6. **View the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management with Sanity v3

### Sanity Studio Access

- **Development**: `http://localhost:3000/studio`
- **Production**: `https://yourdomain.com/studio` or `https://yourdomain.com/api/studio`

### Content Schemas

#### 1. **localeString** - Multilingual Text Fields
```typescript
{
  vi: "Tiếng Việt content",
  en: "English content"
}
```

#### 2. **Post** - Blog Posts
- Multilingual title and excerpt
- Rich content with Portable Text
- Cover images with alt text
- Author references
- Category assignments
- SEO metadata per language
- Locale specification (vi/en)

#### 3. **Author** - Content Authors
- Name and slug
- Profile image with hotspot
- Multilingual bio

#### 4. **Category** - Content Categories
- Multilingual titles
- Color coding for UI
- Auto-generated post counts

### Creating Content

1. **Access Studio**: Go to `/studio`
2. **Posts by Locale**: Content is organized by language
   - 🇻🇳 Vietnamese Posts
   - 🇺🇸 English Posts
   - 📝 All Posts
3. **Create Post**: Select language and fill required fields
4. **Publish**: Content appears immediately with ISR

### Preview Mode

Enable live preview for draft content:

```
http://localhost:3000/api/preview?secret=mySecret&slug=/vi/blog/your-post-slug
```

## 🎯 Available Scripts

```bash
# Development
pnpm dev              # Start Next.js dev server
pnpm sanity:dev       # Start Sanity Studio dev server

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Sanity
pnpm sanity:build     # Build Sanity Studio
pnpm sanity:deploy    # Deploy Studio to Sanity's hosting

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript checking
```

## 📊 Blog Features

### Multi-language Content
- Each post has locale-specific title, excerpt, and content
- SEO metadata per language
- Automatic fallback to available language

### Rich Content Support
- **Text Formatting**: Bold, italic, code
- **Headings**: H1-H4 with custom styling
- **Links**: Internal and external with target control
- **Images**: Optimized with Next.js Image, alt text support
- **Blockquotes**: Styled quote blocks
- **Lists**: Bulleted and numbered

### Performance Optimizations
- **ISR**: 60-second revalidation
- **Image Optimization**: WebP format, responsive sizes
- **Code Splitting**: Dynamic imports
- **Static Generation**: Pre-built pages at build time

### SEO Features
- Dynamic metadata generation
- Open Graph tags
- Twitter Cards
- Structured data ready
- Multilingual sitemap support

## 🌍 Adding New Languages

1. **Add locale to middleware**:
   ```typescript
   // src/middleware.ts
   locales: ['vi', 'en', 'fr'] // Add new locale
   ```

2. **Update schema**:
   ```typescript
   // sanity/schemas/localeString.ts
   fields: [
     { name: 'vi', type: 'string', title: 'Vietnamese' },
     { name: 'en', type: 'string', title: 'English' },
     { name: 'fr', type: 'string', title: 'French' }, // Add new
   ]
   ```

3. **Create translation file**:
   ```bash
   touch messages/fr.json
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables**:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=vki2acig
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_production_token
   SANITY_PREVIEW_SECRET=your_production_secret
   ```
3. **Deploy** automatically on push

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 🔧 Troubleshooting

### Common Issues

1. **Studio not loading**: Check project ID and dataset in environment variables
2. **Images not showing**: Verify Sanity domain in `next.config.ts`
3. **Preview not working**: Ensure preview secret matches environment variable
4. **Build errors**: Run `pnpm type-check` to identify TypeScript issues

### Development Tips

- Use `pnpm sanity:dev` for Studio-only development
- Preview URLs: `/api/preview?secret=mySecret&slug=/locale/blog/slug`
- Disable preview: Send DELETE request to `/api/preview`

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/docs)
