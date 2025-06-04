import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
  {
    icon: GraduationCap,
    title: 'Mahasiswa UI',
    description: 'Tim yang terdiri dari mahasiswa Universitas Indonesia yang berpengalaman'
  },
  {
    icon: Heart,
    title: 'Peduli Literasi',
    description: 'Berkomitmen meningkatkan literasi finansial masyarakat Indonesia'
  },
  {
    icon: Target,
    title: 'Solusi Tepat',
    description: 'Menyediakan solusi keuangan yang mudah dan praktis untuk semua kalangan'
  },
  {
    icon: Users,
    title: 'Untuk Semua',
    description: 'Melayani kebutuhan finansial generasi muda hingga ibu rumah tangga'
  }];


  return (
    <section id="tentang" className="py-20 bg-white" data-id="k1omuvxlx" data-path="src/components/AboutSection.tsx">
      <div className="container mx-auto px-4" data-id="v59qskg3n" data-path="src/components/AboutSection.tsx">
        <div className="max-w-6xl mx-auto" data-id="he0ti8sfm" data-path="src/components/AboutSection.tsx">
          {/* Header */}
          <div className="text-center mb-16" data-id="7uszp4g5d" data-path="src/components/AboutSection.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-id="qqkk08nqj" data-path="src/components/AboutSection.tsx">
              💼 Siapa Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-id="2oz22j6nr" data-path="src/components/AboutSection.tsx">
              Kami adalah tim mahasiswa UI yang peduli akan literasi finansial masyarakat Indonesia
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16" data-id="imav14oqq" data-path="src/components/AboutSection.tsx">
            {/* Left Content */}
            <div className="space-y-6" data-id="qbow3oglk" data-path="src/components/AboutSection.tsx">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8" data-id="686a3huf6" data-path="src/components/AboutSection.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="f6pvjuy8s" data-path="src/components/AboutSection.tsx">
                  Misi Kami 🎯
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6" data-id="wddf6nf4m" data-path="src/components/AboutSection.tsx">
                  Tim mahasiswa UI yang peduli literasi finansial masyarakat Indonesia. 
                  FinClick dibuat untuk bantu pengguna mengelola uang secara bijak dan mencapai 
                  kebebasan finansial.
                </p>
                <div className="flex items-center space-x-4" data-id="wssmoids4" data-path="src/components/AboutSection.tsx">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center" data-id="c43wqplod" data-path="src/components/AboutSection.tsx">
                    <Heart className="w-6 h-6 text-white" data-id="niyjn6img" data-path="src/components/AboutSection.tsx" />
                  </div>
                  <div data-id="5xtmq0j6b" data-path="src/components/AboutSection.tsx">
                    <p className="font-semibold text-gray-900" data-id="vv1jyb2qu" data-path="src/components/AboutSection.tsx">Dibuat dengan ❤️</p>
                    <p className="text-gray-600" data-id="nnwain0cp" data-path="src/components/AboutSection.tsx">Untuk Indonesia yang lebih sejahtera</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Team Image Placeholder */}
            <div className="relative" data-id="fibexpr36" data-path="src/components/AboutSection.tsx">
              <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center" data-id="6dh67t5pp" data-path="src/components/AboutSection.tsx">
                <div className="text-center" data-id="1s43dnc7z" data-path="src/components/AboutSection.tsx">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center" data-id="ochrwlzmx" data-path="src/components/AboutSection.tsx">
                    <Users className="w-12 h-12 text-white" data-id="00ctg2xk6" data-path="src/components/AboutSection.tsx" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2" data-id="s714dn793" data-path="src/components/AboutSection.tsx">Tim FinClick</h4>
                  <p className="text-gray-600" data-id="cydctnjdu" data-path="src/components/AboutSection.tsx">Mahasiswa UI yang berdedikasi</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full" data-id="xrrisneih" data-path="src/components/AboutSection.tsx"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full" data-id="btgh9peak" data-path="src/components/AboutSection.tsx"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-id="98hl78s7p" data-path="src/components/AboutSection.tsx">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white" data-id="k7uzge05y" data-path="src/components/AboutSection.tsx">
                  <CardContent className="p-6 text-center" data-id="mfazq2ytc" data-path="src/components/AboutSection.tsx">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-id="gww7x5rna" data-path="src/components/AboutSection.tsx">
                      <Icon className="w-6 h-6 text-white" data-id="7qm4f66hd" data-path="src/components/AboutSection.tsx" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2" data-id="r2fn9qqvx" data-path="src/components/AboutSection.tsx">{value.title}</h4>
                    <p className="text-gray-600 text-sm" data-id="jsmecub55" data-path="src/components/AboutSection.tsx">{value.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;