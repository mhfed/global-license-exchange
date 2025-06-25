import { BannerHero } from '@/components/sections/banner-hero';
import { HeroHighlights } from '@/components/sections/hero-highlights';
import { ServiceHighlight } from '@/components/sections/service-highlight';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { FieldsOfOperation } from '@/components/sections/fields-of-operation';
import { CustomersGallery } from '@/components/sections/customers-gallery';
import { FAQ } from '@/components/sections/faq';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <BannerHero />
      <HeroHighlights />
      <ServiceHighlight />
      <WhyChooseUs />
      <FieldsOfOperation />
      <CustomersGallery />
      <FAQ />
    </main>
  );
} 