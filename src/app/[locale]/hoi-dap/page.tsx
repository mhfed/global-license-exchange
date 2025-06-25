import { Metadata } from 'next';
import { Search, HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Hỏi đáp - IAA Vietnam' : 'FAQ - IAA Vietnam',
    description: locale === 'vi' 
      ? 'Câu hỏi thường gặp về dịch vụ chuyển đổi bằng lái xe quốc tế tại IAA Vietnam'
      : 'Frequently asked questions about international driving license conversion services at IAA Vietnam',
  };
}

export default async function FAQPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const faqCategories = [
    {
      id: 'general',
      title: locale === 'vi' ? 'Câu hỏi chung' : 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          q: locale === 'vi' ? 'Bằng lái xe quốc tế là gì?' : 'What is an international driving license?',
          a: locale === 'vi' 
            ? 'Bằng lái xe quốc tế (IDP) là một tài liệu được cấp dựa trên Công ước Vienna 1968 và Geneva 1949, cho phép bạn lái xe hợp pháp tại các quốc gia thành viên. Đây không phải là bằng lái xe thay thế mà là bản dịch chính thức của bằng lái xe quốc gia của bạn.'
            : 'An International Driving Permit (IDP) is a document issued under the 1968 Vienna Convention and 1949 Geneva Convention, allowing you to legally drive in member countries. It is not a replacement license but an official translation of your national driving license.'
        },
        {
          q: locale === 'vi' ? 'Tôi có thể sử dụng bằng lái xe quốc tế ở những nước nào?' : 'Which countries can I use an international driving license in?',
          a: locale === 'vi' 
            ? 'Bằng lái xe quốc tế có thể sử dụng tại hơn 150 quốc gia và vùng lãnh thổ trên thế giới, bao gồm Mỹ, Canada, Australia, các nước EU, Nhật Bản, Hàn Quốc, Singapore, UAE và nhiều nước khác. Danh sách cụ thể có thể thay đổi theo thời gian.'
            : 'International driving licenses can be used in over 150 countries and territories worldwide, including USA, Canada, Australia, EU countries, Japan, South Korea, Singapore, UAE and many others. The specific list may change over time.'
        },
        {
          q: locale === 'vi' ? 'Thời hạn của bằng lái xe quốc tế là bao lâu?' : 'How long is an international driving license valid?',
          a: locale === 'vi' 
            ? 'Bằng lái xe quốc tế có thời hạn tối đa 1 năm kể từ ngày cấp hoặc đến khi bằng lái xe quốc gia hết hạn (tùy theo thời gian nào ngắn hơn). Bạn có thể gia hạn hoặc cấp mới khi hết hạn.'
            : 'International driving licenses are valid for a maximum of 1 year from the date of issue or until your national license expires (whichever comes first). You can renew or get a new one when it expires.'
        }
      ]
    },
    {
      id: 'process',
      title: locale === 'vi' ? 'Quy trình xử lý' : 'Processing Procedure',
      icon: Search,
      questions: [
        {
          q: locale === 'vi' ? 'Tôi cần chuẩn bị những giấy tờ gì?' : 'What documents do I need to prepare?',
          a: locale === 'vi' 
            ? 'Bạn cần: (1) Bằng lái xe Việt Nam gốc còn hạn, (2) Hộ chiếu hoặc CCCD gốc và bản sao, (3) 6 ảnh 4x6 nền trắng, (4) Giấy khám sức khỏe lái xe, (5) Bản dịch công chứng bằng lái xe (nếu cần). Chúng tôi sẽ hỗ trợ kiểm tra và hoàn thiện hồ sơ.'
            : 'You need: (1) Original valid Vietnamese driving license, (2) Original passport or ID card and copies, (3) 6 white background 4x6 photos, (4) Medical certificate for driving, (5) Notarized translation of license (if needed). We will help check and complete your documents.'
        },
        {
          q: locale === 'vi' ? 'Thời gian xử lý mất bao lâu?' : 'How long does processing take?',
          a: locale === 'vi' 
            ? 'Thời gian xử lý tiêu chuẩn là 5-7 ngày làm việc. Chúng tôi cũng có dịch vụ nhanh (3-5 ngày) và hỏa tốc (1-2 ngày) với mức phí khác nhau. Thời gian có thể thay đổi tùy theo độ phức tạp của hồ sơ và lượng đơn xử lý.'
            : 'Standard processing time is 5-7 business days. We also offer express service (3-5 days) and urgent service (1-2 days) with different fees. Time may vary depending on document complexity and processing volume.'
        },
        {
          q: locale === 'vi' ? 'Tôi có thể theo dõi tiến độ xử lý hồ sơ không?' : 'Can I track my application progress?',
          a: locale === 'vi' 
            ? 'Có, sau khi nộp hồ sơ bạn sẽ nhận được mã tra cứu. Bạn có thể theo dõi tiến độ qua website, gọi hotline hoặc nhắn tin. Chúng tôi cũng sẽ gửi thông báo qua SMS/Email khi có cập nhật quan trọng.'
            : 'Yes, after submitting your application you will receive a tracking code. You can track progress via website, hotline or messaging. We will also send SMS/Email notifications for important updates.'
        }
      ]
    },
    {
      id: 'payment',
      title: locale === 'vi' ? 'Thanh toán & phí' : 'Payment & Fees',
      icon: Phone,
      questions: [
        {
          q: locale === 'vi' ? 'Chi phí chuyển đổi bằng lái xe quốc tế là bao nhiêu?' : 'How much does international license conversion cost?',
          a: locale === 'vi' 
            ? 'Chi phí cơ bản từ 2.500.000 VNĐ cho gói tiêu chuẩn, 3.500.000 VNĐ cho gói nhanh, và 5.000.000 VNĐ cho gói VIP. Giá có thể thay đổi tùy theo dịch vụ bổ sung và tỷ giá. Chúng tôi luôn báo giá rõ ràng trước khi thực hiện.'
            : 'Basic cost starts from 2,500,000 VND for standard package, 3,500,000 VND for express package, and 5,000,000 VND for VIP package. Prices may vary depending on additional services and exchange rates. We always provide clear quotes before proceeding.'
        },
        {
          q: locale === 'vi' ? 'Tôi có thể thanh toán bằng cách nào?' : 'What payment methods are available?',
          a: locale === 'vi' 
            ? 'Chúng tôi chấp nhận thanh toán bằng tiền mặt tại văn phòng, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, ví điện tử (MoMo, ZaloPay), và QR Pay. Bạn có thể thanh toán toàn bộ hoặc đặt cọc trước.'
            : 'We accept cash payment at office, bank transfer, credit/debit cards, e-wallets (MoMo, ZaloPay), and QR Pay. You can pay in full or make a deposit first.'
        },
        {
          q: locale === 'vi' ? 'Có chính sách hoàn tiền không?' : 'Is there a refund policy?',
          a: locale === 'vi' 
            ? 'Có, chúng tôi có chính sách hoàn tiền rõ ràng. Nếu hồ sơ không đạt yêu cầu do lỗi từ phía chúng tôi, bạn sẽ được hoàn 100% phí. Nếu bạn hủy đơn trước khi xử lý, hoàn 80% phí. Chi tiết trong hợp đồng dịch vụ.'
            : 'Yes, we have a clear refund policy. If documents don\'t meet requirements due to our fault, you get 100% refund. If you cancel before processing, 80% refund. Details in service contract.'
        }
      ]
    },
    {
      id: 'usage',
      title: locale === 'vi' ? 'Sử dụng bằng lái xe' : 'License Usage',
      icon: Mail,
      questions: [
        {
          q: locale === 'vi' ? 'Tôi có cần mang theo bằng lái xe Việt Nam khi sử dụng bằng quốc tế?' : 'Do I need to carry my Vietnamese license when using the international one?',
          a: locale === 'vi' 
            ? 'Có, bạn phải luôn mang theo cả bằng lái xe Việt Nam gốc và bằng lái xe quốc tế khi lái xe ở nước ngoài. Bằng lái xe quốc tế chỉ là bản dịch chính thức, không thay thế cho bằng lái xe gốc.'
            : 'Yes, you must always carry both your original Vietnamese license and international license when driving abroad. The international license is only an official translation, not a replacement for your original license.'
        },
        {
          q: locale === 'vi' ? 'Tôi có thể thuê xe ở nước ngoài với bằng lái xe quốc tế không?' : 'Can I rent a car abroad with an international driving license?',
          a: locale === 'vi' 
            ? 'Có, hầu hết các công ty cho thuê xe quốc tế chấp nhận bằng lái xe quốc tế. Tuy nhiên, bạn cần kiểm tra yêu cầu cụ thể của từng công ty và quốc gia. Một số nơi có thể yêu cầu thêm điều kiện về tuổi, kinh nghiệm lái xe.'
            : 'Yes, most international car rental companies accept international driving licenses. However, you should check specific requirements of each company and country. Some places may have additional requirements for age and driving experience.'
        },
        {
          q: locale === 'vi' ? 'Bằng lái xe quốc tế có giá trị khi tôi về Việt Nam không?' : 'Is the international license valid when I return to Vietnam?',
          a: locale === 'vi' 
            ? 'Không, bằng lái xe quốc tế không có giá trị sử dụng tại Việt Nam. Khi về nước, bạn sử dụng bằng lái xe Việt Nam bình thường. Bằng quốc tế chỉ dành cho việc lái xe ở các nước khác.'
            : 'No, international driving licenses are not valid for use in Vietnam. When returning home, you use your regular Vietnamese license. International licenses are only for driving in other countries.'
        }
      ]
    }
  ];

  const quickStats = [
    { number: '10,000+', label: locale === 'vi' ? 'Câu hỏi đã giải đáp' : 'Questions answered' },
    { number: '24/7', label: locale === 'vi' ? 'Hỗ trợ trực tuyến' : 'Online support' },
    { number: '95%', label: locale === 'vi' ? 'Khách hàng hài lòng' : 'Customer satisfaction' },
    { number: '<2h', label: locale === 'vi' ? 'Thời gian phản hồi' : 'Response time' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Câu Hỏi Thường Gặp' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              {locale === 'vi' 
                ? 'Tìm câu trả lời cho mọi thắc mắc về dịch vụ chuyển đổi bằng lái xe quốc tế' 
                : 'Find answers to all your questions about international driving license conversion services'}
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={locale === 'vi' ? 'Tìm kiếm câu hỏi...' : 'Search questions...'}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-orange-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
                         {faqCategories.map((category) => (
              <div key={category.id} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl mr-4">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`} className="bg-white rounded-xl shadow-sm">
                        <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Vẫn Cần Hỗ Trợ?' : 'Still Need Help?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'vi' 
                ? 'Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7' 
                : 'Our expert team is always ready to help you 24/7'}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'vi' ? 'Hotline 24/7' : '24/7 Hotline'}
                </h3>
                <p className="text-gray-600 mb-4">1900 1234</p>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  {locale === 'vi' ? 'Gọi ngay' : 'Call now'}
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'vi' ? 'Email hỗ trợ' : 'Support Email'}
                </h3>
                <p className="text-gray-600 mb-4">support@iaavietnam.com</p>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  {locale === 'vi' ? 'Gửi email' : 'Send email'}
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <HelpCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'vi' ? 'Chat trực tuyến' : 'Live Chat'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {locale === 'vi' ? 'Phản hồi ngay lập tức' : 'Instant response'}
                </p>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  {locale === 'vi' ? 'Bắt đầu chat' : 'Start chat'}
                </Button>
              </div>
            </div>

            <div className="bg-orange-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                {locale === 'vi' ? 'Đặt Lịch Tư Vấn Miễn Phí' : 'Schedule Free Consultation'}
              </h3>
              <p className="text-orange-100 mb-6">
                {locale === 'vi' 
                  ? 'Gặp gỡ trực tiếp với chuyên viên để được tư vấn chi tiết và cá nhân hóa' 
                  : 'Meet directly with experts for detailed and personalized consultation'}
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                {locale === 'vi' ? 'Đặt lịch ngay' : 'Book now'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 