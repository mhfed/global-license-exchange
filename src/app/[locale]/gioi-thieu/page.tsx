import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Award, Users, Clock } from 'lucide-react';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'Giới thiệu - IAA Vietnam' : 'About Us - IAA Vietnam',
    description: locale === 'vi' 
      ? 'Tìm hiểu về IAA Vietnam - đơn vị hàng đầu cung cấp dịch vụ chuyển đổi bằng lái xe quốc tế với hơn 10 năm kinh nghiệm'
      : 'Learn about IAA Vietnam - leading provider of international driving license conversion services with over 10 years of experience',
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: locale === 'vi' ? 'Khách hàng tin tưởng' : 'Trusted customers',
    },
    {
      icon: Award,
      value: '10+',
      label: locale === 'vi' ? 'Năm kinh nghiệm' : 'Years of experience',
    },
    {
      icon: Shield,
      value: '99%',
      label: locale === 'vi' ? 'Tỷ lệ thành công' : 'Success rate',
    },
    {
      icon: Clock,
      value: '24/7',
      label: locale === 'vi' ? 'Hỗ trợ khách hàng' : 'Customer support',
    },
  ];

  const teamMembers = [
    {
      name: 'Nguyễn Văn An',
      position: locale === 'vi' ? 'Giám đốc điều hành' : 'CEO',
      image: '/api/placeholder/300/300',
      description: locale === 'vi' 
        ? 'Hơn 15 năm kinh nghiệm trong lĩnh vực giao thông vận tải' 
        : 'Over 15 years of experience in transportation industry',
    },
    {
      name: 'Trần Thị Bình',
      position: locale === 'vi' ? 'Trưởng phòng pháp chế' : 'Legal Director',
      image: '/api/placeholder/300/300',
      description: locale === 'vi' 
        ? 'Chuyên gia về luật giao thông quốc tế và thủ tục hành chính' 
        : 'Expert in international traffic law and administrative procedures',
    },
    {
      name: 'Lê Minh Cường',
      position: locale === 'vi' ? 'Trưởng phòng dịch vụ khách hàng' : 'Customer Service Director',
      image: '/api/placeholder/300/300',
      description: locale === 'vi' 
        ? 'Đảm bảo chất lượng dịch vụ và sự hài lòng của khách hàng' 
        : 'Ensuring service quality and customer satisfaction',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === 'vi' ? 'Về IAA Vietnam' : 'About IAA Vietnam'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {locale === 'vi' 
                ? 'Đơn vị hàng đầu cung cấp dịch vụ chuyển đổi bằng lái xe quốc tế tại Việt Nam với cam kết chất lượng và uy tín' 
                : 'Leading provider of international driving license conversion services in Vietnam with commitment to quality and reliability'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {locale === 'vi' ? 'Câu chuyện của chúng tôi' : 'Our Story'}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {locale === 'vi' 
                      ? 'IAA Vietnam được thành lập vào năm 2014 với sứ mệnh giúp người Việt Nam có thể lái xe an toàn và hợp pháp tại các quốc gia trên thế giới. Chúng tôi hiểu rằng việc chuyển đổi bằng lái xe quốc tế không chỉ là một thủ tục hành chính mà còn là cánh cửa mở ra những cơ hội mới.' 
                      : 'IAA Vietnam was established in 2014 with the mission of helping Vietnamese people drive safely and legally in countries around the world. We understand that international driving license conversion is not just an administrative procedure but also a gateway to new opportunities.'}
                  </p>
                  <p>
                    {locale === 'vi' 
                      ? 'Với đội ngũ chuyên gia giàu kinh nghiệm và quy trình chuẩn hóa, chúng tôi đã hỗ trợ hàng ngàn khách hàng thực hiện ước mơ du lịch, học tập và làm việc tại nước ngoài một cách thuận lợi nhất.' 
                      : 'With our team of experienced experts and standardized processes, we have helped thousands of customers realize their dreams of traveling, studying and working abroad in the most convenient way.'}
                  </p>
                  <p>
                    {locale === 'vi' 
                      ? 'Chúng tôi tự hào là đối tác tin cậy của các cơ quan chính phủ và tổ chức quốc tế, đảm bảo tính hợp pháp và hiệu lực của mọi dịch vụ chúng tôi cung cấp.' 
                      : 'We are proud to be a trusted partner of government agencies and international organizations, ensuring the legality and validity of all services we provide.'}
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/api/placeholder/600/400"
                  alt="IAA Vietnam Office"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">2014</div>
                  <div className="text-blue-100">
                    {locale === 'vi' ? 'Năm thành lập' : 'Established'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Tầm nhìn & Sứ mệnh' : 'Vision & Mission'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'vi' ? 'Tầm nhìn' : 'Vision'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'vi' 
                  ? 'Trở thành đơn vị hàng đầu khu vực Đông Nam Á trong lĩnh vực dịch vụ chuyển đổi bằng lái xe quốc tế, góp phần kết nối người Việt Nam với thế giới một cách an toàn và thuận tiện.' 
                  : 'To become the leading unit in Southeast Asia in the field of international driving license conversion services, contributing to connecting Vietnamese people with the world safely and conveniently.'}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'vi' ? 'Sứ mệnh' : 'Mission'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'vi' 
                  ? 'Cung cấp dịch vụ chuyển đổi bằng lái xe quốc tế chất lượng cao, nhanh chóng và đáng tin cậy, đồng thời tư vấn và hỗ trợ khách hàng trong suốt quá trình sử dụng dịch vụ.' 
                  : 'Provide high-quality, fast and reliable international driving license conversion services, while consulting and supporting customers throughout the service process.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Đội ngũ lãnh đạo' : 'Leadership Team'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'vi' 
                ? 'Những con người tâm huyết và giàu kinh nghiệm đứng sau thành công của IAA Vietnam' 
                : 'Dedicated and experienced people behind the success of IAA Vietnam'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'vi' ? 'Giá trị cốt lõi' : 'Core Values'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: locale === 'vi' ? 'Uy tín' : 'Reliability',
                description: locale === 'vi' ? 'Đặt uy tín và chất lượng dịch vụ lên hàng đầu' : 'Putting reputation and service quality first',
                icon: '🏆'
              },
              {
                title: locale === 'vi' ? 'Chuyên nghiệp' : 'Professional',
                description: locale === 'vi' ? 'Quy trình chuẩn hóa và đội ngũ chuyên môn cao' : 'Standardized processes and highly professional team',
                icon: '⚡'
              },
              {
                title: locale === 'vi' ? 'Tận tâm' : 'Dedicated',
                description: locale === 'vi' ? 'Luôn đặt lợi ích khách hàng lên hàng đầu' : 'Always putting customer interests first',
                icon: '❤️'
              },
              {
                title: locale === 'vi' ? 'Đổi mới' : 'Innovation',
                description: locale === 'vi' ? 'Không ngừng cải tiến và ứng dụng công nghệ mới' : 'Continuously improving and applying new technology',
                icon: '🚀'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 