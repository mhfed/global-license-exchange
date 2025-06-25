import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Liên hệ - IAA Vietnam' : 'Contact - IAA Vietnam',
    description: locale === 'vi' 
      ? 'Liên hệ với IAA Vietnam để được tư vấn và hỗ trợ về dịch vụ chuyển đổi bằng lái xe quốc tế'
      : 'Contact IAA Vietnam for consultation and support on international driving license conversion services',
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const contactInfo = [
    {
      icon: Phone,
      title: locale === 'vi' ? 'Hotline' : 'Hotline',
      details: [
        '1900 1234 (24/7)',
        '+84 28 1234 5678'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@iaavietnam.com',
        'support@iaavietnam.com'
      ],
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: locale === 'vi' ? 'Địa chỉ' : 'Address',
      details: [
        locale === 'vi' 
          ? '123 Nguyễn Huệ, Quận 1, TP.HCM' 
          : '123 Nguyen Hue, District 1, Ho Chi Minh City',
        locale === 'vi' 
          ? '456 Hoàng Diệu, Quận Hai Bà Trưng, Hà Nội' 
          : '456 Hoang Dieu, Hai Ba Trung District, Hanoi'
      ],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: locale === 'vi' ? 'Giờ làm việc' : 'Working Hours',
      details: [
        locale === 'vi' ? 'T2-T6: 8:00 - 18:00' : 'Mon-Fri: 8:00 - 18:00',
        locale === 'vi' ? 'T7: 8:00 - 12:00' : 'Sat: 8:00 - 12:00'
      ],
      color: 'text-purple-600'
    }
  ];

  const offices = [
    {
      city: locale === 'vi' ? 'TP. Hồ Chí Minh' : 'Ho Chi Minh City',
      address: locale === 'vi' 
        ? '123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM'
        : '123 Nguyen Hue, Ben Nghe Ward, District 1, Ho Chi Minh City',
      phone: '+84 28 1234 5678',
      email: 'hcm@iaavietnam.com',
      manager: locale === 'vi' ? 'Trần Văn An' : 'An Tran',
      isMain: true
    },
    {
      city: locale === 'vi' ? 'Hà Nội' : 'Hanoi',
      address: locale === 'vi' 
        ? '456 Hoàng Diệu, Phường Ngọc Khánh, Quận Ba Đình, Hà Nội'
        : '456 Hoang Dieu, Ngoc Khanh Ward, Ba Dinh District, Hanoi',
      phone: '+84 24 1234 5678',
      email: 'hanoi@iaavietnam.com',
      manager: locale === 'vi' ? 'Nguyễn Thị Lan' : 'Lan Nguyen',
      isMain: false
    },
    {
      city: locale === 'vi' ? 'Đà Nẵng' : 'Da Nang',
      address: locale === 'vi' 
        ? '789 Trần Phú, Phường Thạch Thang, Quận Hải Châu, Đà Nẵng'
        : '789 Tran Phu, Thach Thang Ward, Hai Chau District, Da Nang',
      phone: '+84 236 1234 567',
      email: 'danang@iaavietnam.com',
      manager: locale === 'vi' ? 'Lê Minh Đức' : 'Duc Le',
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Liên Hệ Với Chúng Tôi' : 'Contact Us'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 leading-relaxed">
              {locale === 'vi' 
                ? 'Chúng tôi sẵn sàng hỗ trợ bạn 24/7 với đội ngũ chuyên viên giàu kinh nghiệm' 
                : 'We are ready to support you 24/7 with our experienced team of specialists'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {['🏢', '📞', '📧', '💬'].map((icon, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-sm text-indigo-200">
                    {index === 0 && (locale === 'vi' ? '3 văn phòng' : '3 offices')}
                    {index === 1 && (locale === 'vi' ? 'Hotline 24/7' : '24/7 Hotline')}
                    {index === 2 && (locale === 'vi' ? 'Email hỗ trợ' : 'Email support')}
                    {index === 3 && (locale === 'vi' ? 'Chat trực tuyến' : 'Live chat')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Thông Tin Liên Hệ' : 'Contact Information'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Nhiều cách để bạn có thể liên hệ và nhận được hỗ trợ nhanh chóng' 
                : 'Multiple ways for you to contact and receive quick support'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${info.color}`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === 'vi' ? 'Gửi Tin Nhắn' : 'Send Message'}
              </h2>
              <p className="text-gray-600 mb-8">
                {locale === 'vi' 
                  ? 'Điền form dưới đây và chúng tôi sẽ phản hồi trong vòng 24 giờ' 
                  : 'Fill out the form below and we will respond within 24 hours'}
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder={locale === 'vi' ? 'Nhập họ và tên' : 'Enter your full name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'vi' ? 'Số điện thoại *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder={locale === 'vi' ? 'Nhập số điện thoại' : 'Enter phone number'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={locale === 'vi' ? 'Nhập địa chỉ email' : 'Enter email address'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'vi' ? 'Dịch vụ quan tâm' : 'Service of Interest'}
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="">
                      {locale === 'vi' ? 'Chọn dịch vụ' : 'Select service'}
                    </option>
                    <option value="conversion">
                      {locale === 'vi' ? 'Chuyển đổi bằng lái xe quốc tế' : 'International License Conversion'}
                    </option>
                    <option value="translation">
                      {locale === 'vi' ? 'Dịch thuật và công chứng' : 'Translation & Notarization'}
                    </option>
                    <option value="consultation">
                      {locale === 'vi' ? 'Tư vấn chuyên sâu' : 'Expert Consultation'}
                    </option>
                    <option value="express">
                      {locale === 'vi' ? 'Dịch vụ hỏa tốc' : 'Express Service'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'vi' ? 'Tin nhắn *' : 'Message *'}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={locale === 'vi' ? 'Nhập tin nhắn của bạn...' : 'Enter your message...'}
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree"
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                    {locale === 'vi' 
                      ? 'Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật' 
                      : 'I agree to the terms of use and privacy policy'}
                  </label>
                </div>

                <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <Send className="w-5 h-5 mr-2" />
                  {locale === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Map & Quick Actions */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'vi' ? 'Tìm Chúng Tôi' : 'Find Us'}
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>{locale === 'vi' ? 'Bản đồ Google Maps' : 'Google Maps'}</p>
                    <p className="text-sm">
                      {locale === 'vi' ? '123 Nguyễn Huệ, Q1, TP.HCM' : '123 Nguyen Hue, District 1, HCMC'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'vi' ? 'Liên Hệ Nhanh' : 'Quick Contact'}
                </h3>
                
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-3" />
                  {locale === 'vi' ? 'Gọi hotline: 1900 1234' : 'Call hotline: 1900 1234'}
                </Button>

                <Button variant="outline" className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  {locale === 'vi' ? 'Chat với chuyên viên' : 'Chat with specialist'}
                </Button>

                <Button variant="outline" className="w-full justify-start border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Calendar className="w-5 h-5 mr-3" />
                  {locale === 'vi' ? 'Đặt lịch tư vấn' : 'Schedule consultation'}
                </Button>

                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-600 hover:bg-gray-50">
                  <Mail className="w-5 h-5 mr-3" />
                  {locale === 'vi' ? 'Gửi email: info@iaavietnam.com' : 'Email: info@iaavietnam.com'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Văn Phòng Của Chúng Tôi' : 'Our Offices'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Hệ thống văn phòng trên toàn quốc để phục vụ khách hàng tốt nhất' 
                : 'Nationwide office system to serve customers best'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`p-6 hover:shadow-xl transition-shadow ${office.isMain ? 'ring-2 ring-indigo-500' : ''}`}>
                {office.isMain && (
                  <div className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                    {locale === 'vi' ? 'Trụ sở chính' : 'Main Office'}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-500">
                      {locale === 'vi' ? 'Trưởng văn phòng:' : 'Office Manager:'} <span className="font-medium text-gray-700">{office.manager}</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {locale === 'vi' ? 'Có Thắc Mắc?' : 'Have Questions?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {locale === 'vi' 
              ? 'Xem câu hỏi thường gặp hoặc liên hệ trực tiếp với chúng tôi để được hỗ trợ' 
              : 'Check our FAQ or contact us directly for support'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              {locale === 'vi' ? 'Xem câu hỏi thường gặp' : 'View FAQ'}
            </Button>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              {locale === 'vi' ? 'Liên hệ ngay' : 'Contact Now'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 