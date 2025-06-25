import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { sanityClient } from '@/lib/sanity.client';
import { featuredPostsQuery } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import type { SanityDocument } from 'next-sanity';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Kinh nghiệm - IAA Vietnam' : 'Experience - IAA Vietnam',
    description: locale === 'vi' 
      ? 'Chia sẻ kinh nghiệm, câu chuyện và bài viết từ khách hàng và chuyên gia về chuyển đổi bằng lái xe quốc tế'
      : 'Share experiences, stories and articles from customers and experts about international driving license conversion',
  };
}

export default async function ExperiencePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Fetch featured posts from blog
  const featuredPosts = await sanityClient.fetch<SanityDocument[]>(
    featuredPostsQuery,
    { locale },
    { next: { revalidate: 60 } }
  ).catch(() => []);

  const experienceTypes = [
    {
      id: 'customer-stories',
      title: locale === 'vi' ? 'Câu chuyện khách hàng' : 'Customer Stories',
      description: locale === 'vi' 
        ? 'Những trải nghiệm thực tế của khách hàng khi sử dụng dịch vụ' 
        : 'Real experiences of customers using our services',
      icon: '👥',
      count: '500+'
    },
    {
      id: 'travel-guides',
      title: locale === 'vi' ? 'Hướng dẫn du lịch' : 'Travel Guides',
      description: locale === 'vi' 
        ? 'Kinh nghiệm lái xe và du lịch tại các quốc gia khác nhau' 
        : 'Driving and travel experiences in different countries',
      icon: '🌍',
      count: '100+'
    },
    {
      id: 'expert-tips',
      title: locale === 'vi' ? 'Lời khuyên chuyên gia' : 'Expert Tips',
      description: locale === 'vi' 
        ? 'Chia sẻ từ các chuyên gia về quy định và thủ tục' 
        : 'Insights from experts about regulations and procedures',
      icon: '💡',
      count: '200+'
    },
    {
      id: 'country-guides',
      title: locale === 'vi' ? 'Cẩm nang theo quốc gia' : 'Country Guides',
      description: locale === 'vi' 
        ? 'Hướng dẫn chi tiết về quy định lái xe từng quốc gia' 
        : 'Detailed driving regulations guide for each country',
      icon: '📚',
      count: '50+'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Chia Sẻ Kinh Nghiệm' : 'Share Experiences'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              {locale === 'vi' 
                ? 'Khám phá những câu chuyện, kinh nghiệm và lời khuyên từ cộng đồng khách hàng và chuyên gia' 
                : 'Discover stories, experiences and advice from our community of customers and experts'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/blog`}>
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                  {locale === 'vi' ? 'Xem tất cả bài viết' : 'View all articles'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                {locale === 'vi' ? 'Chia sẻ câu chuyện' : 'Share your story'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Khám Phá Theo Chủ Đề' : 'Explore by Category'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Tìm hiểu kinh nghiệm theo từng lĩnh vực cụ thể' 
                : 'Learn experiences by specific areas'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceTypes.map((type) => (
              <Card key={type.id} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <div className="text-green-600 font-bold mb-4">{type.count}</div>
                <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                  {locale === 'vi' ? 'Khám phá' : 'Explore'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {locale === 'vi' ? 'Bài Viết Nổi Bật' : 'Featured Articles'}
              </h2>
              <p className="text-xl text-gray-600">
                {locale === 'vi' 
                  ? 'Những bài viết mới nhất và được quan tâm nhiều nhất' 
                  : 'Latest and most popular articles'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 6).map((post) => {
                const title = post.title?.[locale] || post.title?.en || post.title?.vi || 'Untitled';
                const excerpt = post.excerpt?.[locale] || post.excerpt?.en || post.excerpt?.vi || '';
                const imageUrl = post.coverImage ? urlFor(post.coverImage)?.width(400).height(300).url() : null;

                return (
                  <Card key={post._id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    {imageUrl && (
                      <div className="relative h-48">
                        <Image
                          src={imageUrl}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {title}
                      </h3>
                      {excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US')}
                        </div>
                        {post.author && (
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author.name}
                          </div>
                        )}
                      </div>
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                          {locale === 'vi' ? 'Đọc tiếp' : 'Read more'}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href={`/${locale}/blog`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  {locale === 'vi' ? 'Xem tất cả bài viết' : 'View all articles'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Câu Chuyện Thành Công' : 'Success Stories'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Những câu chuyện truyền cảm hứng từ khách hàng đã sử dụng dịch vụ' 
                : 'Inspiring stories from customers who have used our services'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: locale === 'vi' ? 'Nguyễn Minh An' : 'Minh An Nguyen',
                story: locale === 'vi' 
                  ? 'Nhờ có bằng lái xe quốc tế, tôi đã có thể thuê xe và du lịch khắp nước Úc trong 6 tháng. Trải nghiệm tuyệt vời!' 
                  : 'Thanks to the international license, I was able to rent a car and travel across Australia for 6 months. Amazing experience!',
                destination: 'Australia 🇦🇺',
                image: '/api/placeholder/300/300'
              },
              {
                name: locale === 'vi' ? 'Trần Thị Mai' : 'Mai Tran',
                story: locale === 'vi' 
                  ? 'Dịch vụ nhanh chóng và chuyên nghiệp. Chỉ 3 ngày là tôi đã có bằng lái xe để đi công tác tại Singapore.' 
                  : 'Fast and professional service. In just 3 days I had my license for business trip to Singapore.',
                destination: 'Singapore 🇸🇬',
                image: '/api/placeholder/300/300'
              },
              {
                name: locale === 'vi' ? 'Lê Văn Hùng' : 'Hung Le',
                story: locale === 'vi' 
                  ? 'Đội ngũ hỗ trợ rất tận tình. Họ đã giúp tôi hiểu rõ quy định lái xe tại Canada trước khi du học.' 
                  : 'Very dedicated support team. They helped me understand driving regulations in Canada before studying abroad.',
                destination: 'Canada 🇨🇦',
                image: '/api/placeholder/300/300'
              },
              {
                name: locale === 'vi' ? 'Phạm Thị Lan' : 'Lan Pham',
                story: locale === 'vi' 
                  ? 'Cảm ơn IAA Vietnam đã giúp gia đình tôi có những chuyến du lịch an toàn và thuận tiện tại châu Âu.' 
                  : 'Thank you IAA Vietnam for helping my family have safe and convenient trips in Europe.',
                destination: 'Europe 🇪🇺',
                image: '/api/placeholder/300/300'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600 font-medium">{testimonial.destination}</p>
                  </div>
                </div>
                                 <p className="text-gray-600 italic leading-relaxed">&ldquo;{testimonial.story}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {locale === 'vi' ? 'Bạn Có Câu Chuyện Để Chia Sẻ?' : 'Do You Have a Story to Share?'}
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            {locale === 'vi' 
              ? 'Hãy chia sẻ trải nghiệm của bạn để giúp đỡ những người khác trong cộng đồng' 
              : 'Share your experience to help others in the community'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {locale === 'vi' ? 'Gửi câu chuyện' : 'Submit your story'}
            </Button>
            <Link href={`/${locale}/blog`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                <ExternalLink className="w-5 h-5 mr-2" />
                {locale === 'vi' ? 'Đọc blog' : 'Read blog'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 