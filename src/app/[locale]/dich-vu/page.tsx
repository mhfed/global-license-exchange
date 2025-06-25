import { Metadata } from 'next';
import { Car, Globe, Shield, Clock, CheckCircle, Star, Zap, HeadphonesIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Dịch vụ - IAA Vietnam' : 'Services - IAA Vietnam',
    description: locale === 'vi' 
      ? 'Các dịch vụ chuyển đổi bằng lái xe quốc tế chuyên nghiệp, nhanh chóng và uy tín tại IAA Vietnam'
      : 'Professional, fast and reliable international driving license conversion services at IAA Vietnam',
  };
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const services = [
    {
      id: 'conversion',
      title: locale === 'vi' ? 'Chuyển đổi bằng lái xe quốc tế' : 'International License Conversion',
      description: locale === 'vi' 
        ? 'Chuyển đổi bằng lái xe Việt Nam sang bằng lái xe quốc tế được công nhận toàn cầu' 
        : 'Convert Vietnamese driving license to internationally recognized driving license',
      icon: Globe,
      features: locale === 'vi' 
        ? [
            'Được công nhận tại 150+ quốc gia',
            'Thời gian xử lý 3-7 ngày',
            'Bảo hành chính thức',
            'Hỗ trợ nhiều loại bằng lái xe'
          ]
        : [
            'Recognized in 150+ countries',
            'Processing time 3-7 days',
            'Official warranty',
            'Support multiple license types'
          ],
      price: locale === 'vi' ? 'Từ 2.500.000 VNĐ' : 'From 2,500,000 VND',
      popular: true
    },
    {
      id: 'translation',
      title: locale === 'vi' ? 'Dịch thuật và công chứng' : 'Translation & Notarization',
      description: locale === 'vi' 
        ? 'Dịch thuật chính thức và công chứng các giấy tờ liên quan đến bằng lái xe' 
        : 'Official translation and notarization of driving license related documents',
      icon: FileText,
      features: locale === 'vi' 
        ? [
            'Dịch thuật chuẩn quốc tế',
            'Công chứng hợp pháp',
            'Nhiều ngôn ngữ hỗ trợ',
            'Giao hàng tận nơi'
          ]
        : [
            'International standard translation',
            'Legal notarization',
            'Multiple language support',
            'Door-to-door delivery'
          ],
      price: locale === 'vi' ? 'Từ 500.000 VNĐ' : 'From 500,000 VND',
      popular: false
    },
    {
      id: 'consultation',
      title: locale === 'vi' ? 'Tư vấn chuyên sâu' : 'Expert Consultation',
      description: locale === 'vi' 
        ? 'Tư vấn chi tiết về quy định lái xe tại các quốc gia và hỗ trợ pháp lý' 
        : 'Detailed consultation on driving regulations in various countries and legal support',
      icon: HeadphonesIcon,
      features: locale === 'vi' 
        ? [
            'Tư vấn 1-1 với chuyên gia',
            'Hỗ trợ 24/7',
            'Cập nhật quy định mới',
            'Giải đáp mọi thắc mắc'
          ]
        : [
            '1-on-1 expert consultation',
            '24/7 support',
            'Latest regulation updates',
            'Answer all questions'
          ],
      price: locale === 'vi' ? 'Miễn phí' : 'Free',
      popular: false
    },
    {
      id: 'express',
      title: locale === 'vi' ? 'Dịch vụ hỏa tốc' : 'Express Service',
      description: locale === 'vi' 
        ? 'Xử lý siêu nhanh trong 24-48 giờ cho những trường hợp khẩn cấp' 
        : 'Super fast processing within 24-48 hours for urgent cases',
      icon: Zap,
      features: locale === 'vi' 
        ? [
            'Xử lý trong 24-48 giờ',
            'Ưu tiên cao nhất',
            'Hỗ trợ đặc biệt',
            'Đảm bảo chất lượng'
          ]
        : [
            'Processing within 24-48 hours',
            'Highest priority',
            'Special support',
            'Quality guarantee'
          ],
      price: locale === 'vi' ? 'Từ 5.000.000 VNĐ' : 'From 5,000,000 VND',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: locale === 'vi' ? 'Uy tín hàng đầu' : 'Top Reputation',
      description: locale === 'vi' 
        ? '10+ năm kinh nghiệm với 99% tỷ lệ thành công' 
        : '10+ years experience with 99% success rate'
    },
    {
      icon: Clock,
      title: locale === 'vi' ? 'Tiết kiệm thời gian' : 'Time Saving',
      description: locale === 'vi' 
        ? 'Quy trình tối ưu giúp bạn tiết kiệm tối đa thời gian' 
        : 'Optimized process helps you save maximum time'
    },
    {
      icon: Star,
      title: locale === 'vi' ? 'Chất lượng đảm bảo' : 'Quality Guaranteed',
      description: locale === 'vi' 
        ? 'Cam kết chất lượng với chính sách hoàn tiền' 
        : 'Quality commitment with money-back policy'
    },
    {
      icon: Car,
      title: locale === 'vi' ? 'Hỗ trợ toàn diện' : 'Comprehensive Support',
      description: locale === 'vi' 
        ? 'Từ tư vấn đến hoàn thành, chúng tôi luôn đồng hành' 
        : 'From consultation to completion, we are always with you'
    }
  ];

  const countries = [
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Korea', flag: '🇰🇷' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Switzerland', flag: '🇨🇭' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Dịch Vụ Chuyên Nghiệp' : 'Professional Services'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              {locale === 'vi' 
                ? 'Giải pháp toàn diện cho việc chuyển đổi bằng lái xe quốc tế với chất lượng hàng đầu' 
                : 'Comprehensive solution for international driving license conversion with top quality'}
            </p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              {locale === 'vi' ? 'Khám phá dịch vụ' : 'Explore Services'}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Dịch Vụ Của Chúng Tôi' : 'Our Services'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Chúng tôi cung cấp đầy đủ các dịch vụ liên quan đến bằng lái xe quốc tế' 
                : 'We provide comprehensive services related to international driving licenses'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className={`p-8 relative hover:shadow-2xl transition-all ${service.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {locale === 'vi' ? 'Phổ biến' : 'Popular'}
                  </div>
                )}
                
                <div className="flex items-start mb-6">
                  <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl mr-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-600 mb-6">{service.price}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${service.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
                  {locale === 'vi' ? 'Chọn dịch vụ này' : 'Choose this service'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Tại Sao Chọn Chúng Tôi?' : 'Why Choose Us?'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Những lợi ích vượt trội khi sử dụng dịch vụ của IAA Vietnam' 
                : 'Outstanding benefits when using IAA Vietnam services'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-4 group-hover:-translate-y-2 transition-transform">
                  <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Được Công Nhận Toàn Cầu' : 'Globally Recognized'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'vi' 
                ? 'Bằng lái xe quốc tế của chúng tôi được công nhận tại hơn 150 quốc gia trên thế giới' 
                : 'Our international driving licenses are recognized in over 150 countries worldwide'}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {countries.map((country, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-2">{country.flag}</div>
                <div className="text-sm font-medium text-gray-700">{country.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
              {locale === 'vi' ? 'Và nhiều quốc gia khác...' : 'And many other countries...'}
            </p>
            <Button variant="outline">
              {locale === 'vi' ? 'Xem danh sách đầy đủ' : 'View complete list'}
            </Button>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {locale === 'vi' ? 'Quy Trình Đơn Giản' : 'Simple Process'}
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              {locale === 'vi' 
                ? 'Chỉ 4 bước đơn giản để có được bằng lái xe quốc tế hợp pháp' 
                : 'Just 4 simple steps to get a legal international driving license'}
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: '01', title: locale === 'vi' ? 'Chuẩn bị' : 'Prepare' },
                { step: '02', title: locale === 'vi' ? 'Nộp hồ sơ' : 'Submit' },
                { step: '03', title: locale === 'vi' ? 'Xử lý' : 'Process' },
                { step: '04', title: locale === 'vi' ? 'Nhận kết quả' : 'Receive' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="font-medium">{item.title}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                {locale === 'vi' ? 'Xem quy trình chi tiết' : 'View detailed process'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
                {locale === 'vi' ? 'Bắt đầu ngay' : 'Get started now'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {locale === 'vi' ? 'Sẵn sàng lên đường?' : 'Ready to hit the road?'}
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {locale === 'vi' 
              ? 'Đừng để giấy tờ cản trở hành trình của bạn. Liên hệ ngay để được tư vấn miễn phí!' 
              : 'Don\'t let paperwork stop your journey. Contact us now for free consultation!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              {locale === 'vi' ? 'Liên hệ ngay' : 'Contact now'}
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              {locale === 'vi' ? 'Tính phí dự kiến' : 'Calculate estimate'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 