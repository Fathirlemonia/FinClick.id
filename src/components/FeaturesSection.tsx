import { Card, CardContent } from '@/components/ui/card';
import { PieChart, Bell, Lightbulb, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
  {
    icon: PieChart,
    title: '📊 Catat Pengeluaran & Pemasukan',
    description: 'Kelola keuangan dengan mudah melalui pencatatan otomatis dan kategorisasi yang cerdas.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Bell,
    title: '🔔 Notifikasi Hemat',
    description: 'Dapatkan reminder dan tips hemat untuk membantu mengontrol pengeluaran harian.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Lightbulb,
    title: '🧠 Tips Finansial Harian',
    description: 'Pelajari tips dan trik mengelola keuangan dari para ahli setiap harinya.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Users,
    title: '👨‍👩‍👧 Mode Ibu Rumah Tangga & Pelajar',
    description: 'Fitur khusus yang disesuaikan dengan kebutuhan ibu rumah tangga dan pelajar.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }];


  return (
    <section id="fitur" className="py-20 bg-gray-50" data-id="vyscrzxt9" data-path="src/components/FeaturesSection.tsx">
      <div className="container mx-auto px-4" data-id="fgdk7s2dm" data-path="src/components/FeaturesSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-id="os0gq9ctq" data-path="src/components/FeaturesSection.tsx">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-id="t3ia6qdpg" data-path="src/components/FeaturesSection.tsx">
            🎯 Fitur Unggulan FinClick
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="y3yc8t58b" data-path="src/components/FeaturesSection.tsx">
            Nikmati berbagai fitur canggih yang dirancang khusus untuk memudahkan pengelolaan keuangan Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" data-id="l6go8wwsa" data-path="src/components/FeaturesSection.tsx">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg" data-id="tpouc84cj" data-path="src/components/FeaturesSection.tsx">

                <CardContent className="p-8" data-id="q1zsoup2m" data-path="src/components/FeaturesSection.tsx">
                  <div className="flex items-start space-x-4" data-id="r9cp06tm3" data-path="src/components/FeaturesSection.tsx">
                    <div className={`${feature.bgColor} ${feature.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`} data-id="5zjjq9ar2" data-path="src/components/FeaturesSection.tsx">
                      <Icon className="w-6 h-6" data-id="yauzg7g3g" data-path="src/components/FeaturesSection.tsx" />
                    </div>
                    <div className="flex-1" data-id="2rwf6p0e0" data-path="src/components/FeaturesSection.tsx">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" data-id="kd50qlbnc" data-path="src/components/FeaturesSection.tsx">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed" data-id="2a4l5ve4v" data-path="src/components/FeaturesSection.tsx">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>);

          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-id="s4pnd8b4k" data-path="src/components/FeaturesSection.tsx">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold" data-id="42k96sac1" data-path="src/components/FeaturesSection.tsx">
            <span data-id="bqyb5c6vh" data-path="src/components/FeaturesSection.tsx">Dan masih banyak fitur menarik lainnya! 🚀</span>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturesSection;