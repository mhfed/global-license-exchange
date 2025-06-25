# Driver License Conversion - Next.js Application

A modern, multilingual Next.js application for international driver's license conversion services, built with TypeScript, Tailwind CSS, and Sanity CMS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 3
- **CMS**: Sanity v3
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## 📁 Project Structure

```
nextjs-hello-world/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx          # Locale-specific layout
│   │   │   ├── page.tsx            # Landing page
│   │   │   └── blog/
│   │   │       ├── page.tsx        # Blog listing
│   │   │       └── [slug]/page.tsx # Blog detail
│   │   ├── globals.css             # Global styles
│   │   └── layout.tsx              # Root layout (redirects to locale)
│   ├── components/
│   │   ├── sections/               # Landing page sections
│   │   ├── blog/                   # Blog components
│   │   └── ui/                     # Reusable UI components
│   ├── lib/
│   │   ├── sanity.ts              # Sanity client & queries
│   │   └── utils.ts               # Utility functions
│   ├── i18n.ts                    # Internationalization config
│   └── middleware.ts              # Next.js middleware for i18n
├── messages/
│   ├── vi.json                    # Vietnamese translations
│   └── en.json                    # English translations
├── sanity/
│   ├── schemas/                   # Sanity schemas
│   └── sanity.config.ts           # Sanity configuration
└── public/                        # Static assets
```

## 🌐 Supported Languages

- **Vietnamese (vi)** - Default language
- **English (en)**

## 🎨 Landing Page Sections

1. **Banner Hero** - Full-width gradient hero with CTA buttons
2. **Hero Highlights** - Three feature cards with hover animations
3. **Service Highlight** - Two-column layout with service description
4. **Why Choose Us** - 3×2 grid of benefits with icons
5. **Fields of Operation** - Horizontal scrolling tags
6. **Customers Gallery** - Masonry layout of license images
7. **FAQ** - Collapsible accordion
8. **Footer** - Contact info and language switcher

## 🛠 Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

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
   # Sanity
   NEXT_PUBLIC_SANITY_PROJECT_ID=vki2acig
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_token_here
   SANITY_PREVIEW_SECRET=your_preview_secret_here
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management (Sanity)

### Setting up Sanity Studio

1. **Install Sanity CLI**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Initialize Sanity Studio**
   ```bash
   cd sanity
   sanity init
   ```

3. **Start Sanity Studio**
   ```bash
   sanity dev
   ```

### Content Types

- **Post**: Blog posts with title, slug, excerpt, cover image, and body content
- **Block Content**: Rich text content with images and links

## 🌍 Internationalization

### Adding a New Language

1. **Create translation file**
   ```bash
   # Add new language file
   touch messages/fr.json
   ```

2. **Update middleware**
   ```typescript
   // src/middleware.ts
   export default createMiddleware({
     locales: ['vi', 'en', 'fr'], // Add new locale
     defaultLocale: 'vi'
   });
   ```

3. **Update i18n config**
   ```typescript
   // src/i18n.ts
   const locales = ['vi', 'en', 'fr']; // Add new locale
   ```

### Translation Keys Structure

```json
{
  "cta": {
    "getStarted": "...",
    "learnMore": "..."
  },
  "hero": {
    "headline": "...",
    "subheadline": "..."
  },
  "navigation": {
    "home": "...",
    "blog": "..."
  }
}
```

## 🎯 Production Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables for Production

Set these in your deployment platform:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=vki2acig
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_production_token
SANITY_PREVIEW_SECRET=your_production_secret
```

## 🧪 Development Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format with Prettier
pnpm format:check     # Check Prettier formatting
pnpm type-check       # Run TypeScript type checking

# Sanity
cd sanity && sanity dev    # Start Sanity Studio
cd sanity && sanity deploy # Deploy Sanity Studio
```

## 📦 Key Dependencies

### Production Dependencies
- `next` - React framework
- `react` & `react-dom` - React library
- `next-intl` - Internationalization
- `next-sanity` - Sanity integration
- `@sanity/image-url` - Image URL generation
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwind-merge` & `clsx` - CSS utilities

### Development Dependencies
- `typescript` - Type checking
- `eslint` - Code linting
- `prettier` - Code formatting
- `tailwindcss` - CSS framework
- `husky` - Git hooks
- `lint-staged` - Pre-commit linting

## 🎨 Styling Guide

- **Primary Color**: Blue (#0070f3)
- **Accent Color**: Emerald (#10b981)
- **Typography**: Inter font family
- **Spacing**: Tailwind's default spacing scale
- **Border Radius**: Rounded corners (rounded-2xl for cards)
- **Shadows**: Layered shadows for depth

## 🔧 Code Quality

### Pre-commit Hooks

The project uses Husky and lint-staged for:
- ESLint checking and auto-fixing
- Prettier formatting
- TypeScript type checking

### Conventions

- Use TypeScript for all files
- Functional components with hooks
- Server Components by default, Client Components when needed
- Descriptive variable names with auxiliary verbs
- Comment complex logic in English

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Create a pull request

## 🆘 Support

For support, contact the development team or create an issue in the repository.
