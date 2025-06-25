import { Metadata } from 'next';
import { Calculator, CheckCircle, XCircle, ArrowRight, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Đổi bằng lái xe - IAA Vietnam' : 'License Exchange - IAA Vietnam',
    description: locale === 'vi' 
      ? 'So sánh và tính toán chi phí chuyển đổi bằng lái xe quốc tế từ các quốc gia khác nhau'
      : 'Compare and calculate costs for international driving license conversion from different countries',
  };
}

export default async function ExchangePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const exchangeTypes = [
    {
      id: 'vietnam-to-international',
      title: locale === 'vi' ? 'Việt Nam → Quốc tế' : 'Vietnam → International',
      description: locale === 'vi' 
        ? 'Chuyển đổi bằng lái xe Việt Nam sang bằng lái xe quốc tế' 
        : 'Convert Vietnamese driving license to international driving license',
      baseCost: '2,500,000 VNĐ',
      duration: locale === 'vi' ? '5-7 ngày' : '5-7 days',
      documents: locale === 'vi' 
        ? ['Bằng lái xe VN gốc', 'Hộ chiếu/CCCD', 'Ảnh 4x6', 'Giấy khám sức khỏe']
        : ['Original VN license', 'Passport/ID', '4x6 photos', 'Medical certificate'],
      popular: true
    },
    {
      id: 'international-to-vietnam',
      title: locale === 'vi' ? 'Quốc tế → Việt Nam' : 'International → Vietnam',
      description: locale === 'vi' 
        ? 'Chuyển đổi bằng lái xe nước ngoài sang bằng lái xe Việt Nam' 
        : 'Convert foreign driving license to Vietnamese driving license',
      baseCost: '3,000,000 VNĐ',
      duration: locale === 'vi' ? '7-10 ngày' : '7-10 days',
      documents: locale === 'vi' 
        ? ['Bằng lái xe nước ngoài', 'Bản dịch công chứng', 'Visa/Work permit', 'Giấy khám sức khỏe']
        : ['Foreign license', 'Notarized translation', 'Visa/Work permit', 'Medical certificate'],
      popular: false
    },
    {
      id: 'renewal',
      title: locale === 'vi' ? 'Gia hạn/Cập nhật' : 'Renewal/Update',
      description: locale === 'vi' 
        ? 'Gia hạn hoặc cập nhật thông tin bằng lái xe quốc tế' 
        : 'Renew or update international driving license information',
      baseCost: '1,800,000 VNĐ',
      duration: locale === 'vi' ? '3-5 ngày' : '3-5 days',
      documents: locale === 'vi' 
        ? ['Bằng lái xe cũ', 'Hộ chiếu mới', 'Ảnh 4x6']
        : ['Old license', 'New passport', '4x6 photos'],
      popular: false
    }
  ];

  const countryCompatibility = [
    {
      country: 'Australia',
      flag: '🇦🇺',
      fromVietnam: 'full',
      toVietnam: 'partial',
      notes: locale === 'vi' 
        ? 'Chấp nhận đầy đủ. Cần thi thực hành nếu chuyển về VN' 
        : 'Full acceptance. Practical test required for VN conversion'
    },
    {
      country: 'USA',
      flag: '🇺🇸',
      fromVietnam: 'full',
      toVietnam: 'limited',
      notes: locale === 'vi' 
        ? 'Chấp nhận IDP. Khó chuyển về VN, cần thi cả lý thuyết và thực hành' 
        : 'Accepts IDP. Difficult VN conversion, requires both theory and practical tests'
    },
    {
      country: 'Japan',
      flag: '🇯🇵',
      fromVietnam: 'partial',
      toVietnam: 'full',
      notes: locale === 'vi' 
        ? 'Cần thêm giấy tờ. Chuyển về VN dễ dàng' 
        : 'Additional documents required. Easy VN conversion'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      fromVietnam: 'full',
      toVietnam: 'full',
      notes: locale === 'vi' 
        ? 'Chấp nhận đầy đủ cả hai chiều' 
        : 'Full acceptance both ways'
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      fromVietnam: 'full',
      toVietnam: 'partial',
      notes: locale === 'vi' 
        ? 'Chấp nhận IDP. Cần thi thực hành nếu chuyển về VN' 
        : 'Accepts IDP. Practical test required for VN conversion'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      fromVietnam: 'full',
      toVietnam: 'partial',
      notes: locale === 'vi' 
        ? 'Chấp nhận IDP. Cần kinh nghiệm lái xe tối thiểu' 
        : 'Accepts IDP. Minimum driving experience required'
    }
  ];

  const getCompatibilityColor = (level: string) => {
    switch (level) {
      case 'full': return 'text-green-600';
      case 'partial': return 'text-yellow-600';
      case 'limited': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getCompatibilityIcon = (level: string) => {
    switch (level) {
      case 'full': return CheckCircle;
      case 'partial': return AlertTriangle;
      case 'limited': return XCircle;
      default: return Info;
    }
  };

  const getCompatibilityText = (level: string) => {
    switch (level) {
      case 'full': return locale === 'vi' ? 'Đầy đủ' : 'Full';
      case 'partial': return locale === 'vi' ? 'Một phần' : 'Partial';
      case 'limited': return locale === 'vi' ? 'Hạn chế' : 'Limited';
      default: return locale === 'vi' ? 'Không rõ' : 'Unknown';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Đổi Bằng Lái Xe' : 'License Exchange'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 leading-relaxed">
              {locale === 'vi' 
                ? 'So sánh và tính toán chi phí chuyển đổi bằng lái xe giữa các quốc gia một cách dễ dàng' 
                : 'Easily compare and calculate driving license conversion costs between countries'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
                <Calculator className="w-5 h-5 mr-2" />
                {locale === 'vi' ? 'Tính chi phí' : 'Calculate Cost'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
                {locale === 'vi' ? 'So sánh quốc gia' : 'Compare Countries'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Loại Hình Chuyển Đổi' : 'Exchange Types'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Chọn loại chuyển đổi phù hợp với nhu cầu của bạn' 
                : 'Choose the conversion type that suits your needs'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {exchangeTypes.map((type) => (
              <Card key={type.id} className={`p-6 hover:shadow-xl transition-all ${type.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
                {type.popular && (
                  <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                    {locale === 'vi' ? 'Phổ biến nhất' : 'Most Popular'}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{locale === 'vi' ? 'Chi phí:' : 'Cost:'}</span>
                    <span className="font-bold text-orange-600">{type.baseCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{locale === 'vi' ? 'Thời gian:' : 'Duration:'}</span>
                    <span className="font-medium">{type.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {locale === 'vi' ? 'Giấy tờ cần thiết:' : 'Required documents:'}
                  </h4>
                  <ul className="space-y-1">
                    {type.documents.map((doc, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className={`w-full ${type.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}>
                  {locale === 'vi' ? 'Chọn loại này' : 'Choose this type'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Country Compatibility Matrix */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {locale === 'vi' ? 'Bảng Tương Thích Quốc Gia' : 'Country Compatibility Matrix'}
              </h2>
              <p className="text-xl text-gray-600">
                {locale === 'vi' 
                  ? 'Kiểm tra khả năng chuyển đổi bằng lái xe giữa Việt Nam và các quốc gia khác' 
                  : 'Check driving license conversion compatibility between Vietnam and other countries'}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        {locale === 'vi' ? 'Quốc gia' : 'Country'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        {locale === 'vi' ? 'VN → Nước ngoài' : 'VN → Foreign'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        {locale === 'vi' ? 'Nước ngoài → VN' : 'Foreign → VN'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        {locale === 'vi' ? 'Ghi chú' : 'Notes'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {countryCompatibility.map((country, index) => {
                      const FromIcon = getCompatibilityIcon(country.fromVietnam);
                      const ToIcon = getCompatibilityIcon(country.toVietnam);
                      
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{country.flag}</span>
                              <span className="font-medium text-gray-900">{country.country}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center">
                              <FromIcon className={`w-5 h-5 mr-2 ${getCompatibilityColor(country.fromVietnam)}`} />
                              <span className={`font-medium ${getCompatibilityColor(country.fromVietnam)}`}>
                                {getCompatibilityText(country.fromVietnam)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center">
                              <ToIcon className={`w-5 h-5 mr-2 ${getCompatibilityColor(country.toVietnam)}`} />
                              <span className={`font-medium ${getCompatibilityColor(country.toVietnam)}`}>
                                {getCompatibilityText(country.toVietnam)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {country.notes}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm">
                  <strong className="text-green-600">{locale === 'vi' ? 'Đầy đủ' : 'Full'}:</strong> {locale === 'vi' ? 'Chuyển đổi dễ dàng' : 'Easy conversion'}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-sm">
                  <strong className="text-yellow-600">{locale === 'vi' ? 'Một phần' : 'Partial'}:</strong> {locale === 'vi' ? 'Cần điều kiện thêm' : 'Additional requirements'}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm">
                  <strong className="text-red-600">{locale === 'vi' ? 'Hạn chế' : 'Limited'}:</strong> {locale === 'vi' ? 'Khó khăn/Cần thi lại' : 'Difficult/Re-testing required'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Tính Toán Chi Phí' : 'Cost Calculator'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'vi' 
                ? 'Ước tính chi phí chuyển đổi bằng lái xe dựa trên nhu cầu cụ thể của bạn' 
                : 'Estimate driving license conversion costs based on your specific needs'}
            </p>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'vi' ? 'Thông tin cơ bản' : 'Basic Information'}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'vi' ? 'Loại chuyển đổi' : 'Conversion type'}
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500">
                        <option>{locale === 'vi' ? 'VN → Quốc tế' : 'VN → International'}</option>
                        <option>{locale === 'vi' ? 'Quốc tế → VN' : 'International → VN'}</option>
                        <option>{locale === 'vi' ? 'Gia hạn' : 'Renewal'}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'vi' ? 'Quốc gia đích' : 'Target country'}
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500">
                        <option>Australia</option>
                        <option>USA</option>
                        <option>Japan</option>
                        <option>Germany</option>
                        <option>Singapore</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'vi' ? 'Tốc độ xử lý' : 'Processing speed'}
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500">
                        <option>{locale === 'vi' ? 'Tiêu chuẩn (5-7 ngày)' : 'Standard (5-7 days)'}</option>
                        <option>{locale === 'vi' ? 'Nhanh (3-5 ngày)' : 'Express (3-5 days)'}</option>
                        <option>{locale === 'vi' ? 'Hỏa tốc (1-2 ngày)' : 'Urgent (1-2 days)'}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'vi' ? 'Ước tính chi phí' : 'Estimated Cost'}
                  </h3>
                  <div className="bg-white rounded-lg p-6 border border-orange-200">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>{locale === 'vi' ? 'Phí cơ bản:' : 'Base fee:'}</span>
                        <span className="font-medium">2,500,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'vi' ? 'Phí nhanh:' : 'Express fee:'}</span>
                        <span className="font-medium">+ 0 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'vi' ? 'Dịch vụ thêm:' : 'Additional services:'}</span>
                        <span className="font-medium">+ 0 VNĐ</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between text-lg font-bold text-orange-600">
                          <span>{locale === 'vi' ? 'Tổng cộng:' : 'Total:'}</span>
                          <span>2,500,000 VNĐ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                    {locale === 'vi' ? 'Đặt dịch vụ ngay' : 'Book service now'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {locale === 'vi' ? 'Cần Hỗ Trợ Chuyển Đổi?' : 'Need Conversion Support?'}
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            {locale === 'vi' 
              ? 'Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn chọn gói dịch vụ phù hợp nhất' 
              : 'Our expert team is ready to advise and help you choose the most suitable service package'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
              {locale === 'vi' ? 'Tư vấn miễn phí' : 'Free consultation'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
              {locale === 'vi' ? 'Xem quy trình' : 'View process'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 