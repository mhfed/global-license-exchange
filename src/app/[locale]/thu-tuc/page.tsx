import { Metadata } from 'next';
import { CheckCircle, Clock, FileText, Users, ArrowRight, Download, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Thủ tục chuyển đổi - IAA Vietnam' : 'Conversion Procedure - IAA Vietnam',
    description: locale === 'vi' 
      ? 'Hướng dẫn chi tiết thủ tục chuyển đổi bằng lái xe quốc tế, các bước thực hiện và giấy tờ cần thiết'
      : 'detailed guide on international driving license conversion procedures, implementation steps and required documents',
  };
}

export default async function ProcedurePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const steps = [
    {
      step: 1,
      title: locale === 'vi' ? 'Chuẩn bị hồ sơ' : 'Document Preparation',
      description: locale === 'vi' 
        ? 'Chuẩn bị đầy đủ giấy tờ theo yêu cầu và kiểm tra tính hợp lệ' 
        : 'Prepare all required documents and verify their validity',
      icon: FileText,
      time: locale === 'vi' ? '1-2 ngày' : '1-2 days',
      details: locale === 'vi' 
        ? [
            'Bằng lái xe Việt Nam gốc còn hạn',
            'Hộ chiếu/CCCD gốc và bản sao',
            'Ảnh 4x6 nền trắng (6 ảnh)',
            'Giấy khám sức khỏe lái xe',
            'Bản dịch công chứng bằng lái xe'
          ]
        : [
            'Original valid Vietnamese driving license',
            'Original passport/ID card and copies',
            'White background 4x6 photos (6 pieces)',
            'Medical certificate for driving',
            'Notarized translation of driving license'
          ]
    },
    {
      step: 2,
      title: locale === 'vi' ? 'Nộp hồ sơ' : 'Submit Application',
      description: locale === 'vi' 
        ? 'Nộp hồ sơ tại văn phòng hoặc gửi qua đường bưu điện' 
        : 'Submit documents at office or send by mail',
      icon: Users,
      time: locale === 'vi' ? '30 phút' : '30 minutes',
      details: locale === 'vi' 
        ? [
            'Điền đầy đủ đơn đăng ký',
            'Nộp hồ sơ và thanh toán phí',
            'Nhận biên lai và mã tra cứu',
            'Chụp ảnh sinh trắc học',
            'Xác nhận thông tin cá nhân'
          ]
        : [
            'Complete the registration form',
            'Submit documents and pay fees',
            'Receive receipt and tracking code',
            'Take biometric photos',
            'Confirm personal information'
          ]
    },
    {
      step: 3,
      title: locale === 'vi' ? 'Xử lý hồ sơ' : 'Document Processing',
      description: locale === 'vi' 
        ? 'Kiểm tra và xử lý hồ sơ bởi đội ngũ chuyên viên' 
        : 'Review and process documents by specialist team',
      icon: Clock,
      time: locale === 'vi' ? '5-7 ngày làm việc' : '5-7 business days',
      details: locale === 'vi' 
        ? [
            'Kiểm tra tính hợp lệ của giấy tờ',
            'Xác minh thông tin với cơ quan có thẩm quyền',
            'Dịch thuật và công chứng tài liệu',
            'Chuẩn bị hồ sơ theo chuẩn quốc tế',
            'Kiểm tra chất lượng cuối cùng'
          ]
        : [
            'Verify document validity',
            'Confirm information with authorities',
            'Translate and notarize documents',
            'Prepare documents to international standards',
            'Final quality check'
          ]
    },
    {
      step: 4,
      title: locale === 'vi' ? 'Nhận kết quả' : 'Receive Results',
      description: locale === 'vi' 
        ? 'Nhận bằng lái xe quốc tế và hướng dẫn sử dụng' 
        : 'Receive international driving license and usage instructions',
      icon: CheckCircle,
      time: locale === 'vi' ? '1 ngày' : '1 day',
      details: locale === 'vi' 
        ? [
            'Nhận thông báo hoàn thành qua SMS/Email',
            'Đến văn phòng nhận bằng lái xe',
            'Kiểm tra thông tin trên bằng lái xe',
            'Nhận hướng dẫn sử dụng chi tiết',
            'Hỗ trợ sau bán hàng'
          ]
        : [
            'Receive completion notification via SMS/Email',
            'Come to office to collect license',
            'Check information on license',
            'Receive detailed usage instructions',
            'After-sales support'
          ]
    }
  ];

  const documents = [
    {
      title: locale === 'vi' ? 'Bằng lái xe Việt Nam' : 'Vietnamese Driving License',
      description: locale === 'vi' ? 'Bản gốc còn hiệu lực' : 'Original valid license',
      required: true
    },
    {
      title: locale === 'vi' ? 'Hộ chiếu/CCCD' : 'Passport/ID Card',
      description: locale === 'vi' ? 'Bản gốc và bản sao' : 'Original and copies',
      required: true
    },
    {
      title: locale === 'vi' ? 'Ảnh 4x6' : '4x6 Photos',
      description: locale === 'vi' ? '6 ảnh nền trắng' : '6 white background photos',
      required: true
    },
    {
      title: locale === 'vi' ? 'Giấy khám sức khỏe' : 'Medical Certificate',
      description: locale === 'vi' ? 'Khám sức khỏe lái xe' : 'Driving medical check',
      required: true
    },
    {
      title: locale === 'vi' ? 'Bản dịch công chứng' : 'Notarized Translation',
      description: locale === 'vi' ? 'Bằng lái xe được dịch' : 'Translated license',
      required: false
    }
  ];

  const fees = [
    {
      type: locale === 'vi' ? 'Gói cơ bản' : 'Basic Package',
      price: '2,500,000 VNĐ',
      features: locale === 'vi' 
        ? [
            'Chuyển đổi bằng lái xe cơ bản',
            'Hỗ trợ dịch thuật',
            'Thời gian: 7-10 ngày',
            'Bảo hành 1 năm'
          ]
        : [
            'Basic license conversion',
            'Translation support',
            'Duration: 7-10 days',
            '1 year warranty'
          ]
    },
    {
      type: locale === 'vi' ? 'Gói nhanh' : 'Express Package',
      price: '3,500,000 VNĐ',
      features: locale === 'vi' 
        ? [
            'Chuyển đổi nhanh trong 3-5 ngày',
            'Hỗ trợ ưu tiên',
            'Miễn phí dịch thuật',
            'Bảo hành 2 năm'
          ]
        : [
            'Express conversion in 3-5 days',
            'Priority support',
            'Free translation',
            '2 year warranty'
          ]
    },
    {
      type: locale === 'vi' ? 'Gói VIP' : 'VIP Package',
      price: '5,000,000 VNĐ',
      features: locale === 'vi' 
        ? [
            'Xử lý siêu tốc trong 1-2 ngày',
            'Đến tận nơi nhận hồ sơ',
            'Hỗ trợ 24/7',
            'Bảo hành trọn đời'
          ]
        : [
            'Super express in 1-2 days',
            'Door-to-door service',
            '24/7 support',
            'Lifetime warranty'
          ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Thủ Tục Chuyển Đổi' : 'Conversion Procedure'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              {locale === 'vi' 
                ? 'Quy trình đơn giản, nhanh chóng và minh bạch để có được bằng lái xe quốc tế hợp pháp' 
                : 'Simple, fast and transparent process to obtain a legal international driving license'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" />
                {locale === 'vi' ? 'Tải hướng dẫn PDF' : 'Download PDF Guide'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
                <Phone className="w-5 h-5 mr-2" />
                {locale === 'vi' ? 'Tư vấn miễn phí' : 'Free Consultation'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Quy Trình 4 Bước' : '4-Step Process'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Quy trình chuẩn hóa được thiết kế để đảm bảo tính chính xác và hiệu quả cao nhất' 
                : 'Standardized process designed to ensure maximum accuracy and efficiency'}
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="text-emerald-600 font-medium">{step.time}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-emerald-600 absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden" />
                    )}
                  </div>

                  {/* Placeholder for balance */}
                  <div className="flex-1 lg:max-w-md hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Giấy Tờ Cần Thiết' : 'Required Documents'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Danh sách đầy đủ các giấy tờ cần chuẩn bị cho quá trình chuyển đổi' 
                : 'Complete list of documents needed for the conversion process'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className={`w-6 h-6 rounded-full mr-4 mt-1 flex items-center justify-center text-white text-sm ${doc.required ? 'bg-red-500' : 'bg-gray-400'}`}>
                    {doc.required ? '!' : '?'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${doc.required ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                      {doc.required ? (locale === 'vi' ? 'Bắt buộc' : 'Required') : (locale === 'vi' ? 'Tùy chọn' : 'Optional')}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Bảng Giá Dịch Vụ' : 'Service Pricing'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Lựa chọn gói dịch vụ phù hợp với nhu cầu và thời gian của bạn' 
                : 'Choose the service package that suits your needs and timeline'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {fees.map((fee, index) => (
              <Card key={index} className={`p-8 relative hover:shadow-xl transition-all ${index === 1 ? 'ring-2 ring-emerald-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {locale === 'vi' ? 'Phổ biến' : 'Popular'}
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{fee.type}</h3>
                  <div className="text-3xl font-bold text-emerald-600">{fee.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {fee.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${index === 1 ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}>
                  {locale === 'vi' ? 'Chọn gói này' : 'Choose this package'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {locale === 'vi' ? 'Sẵn sàng bắt đầu?' : 'Ready to get started?'}
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            {locale === 'vi' 
              ? 'Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá chi tiết' 
              : 'Contact us today for free consultation and detailed quote'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
              {locale === 'vi' ? 'Bắt đầu ngay' : 'Get Started Now'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
              {locale === 'vi' ? 'Tải form đăng ký' : 'Download Application Form'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 