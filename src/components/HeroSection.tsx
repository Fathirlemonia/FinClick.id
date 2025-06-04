import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadClick = () => {
    const element = document.querySelector('#download');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-id="3jsq7gzo1" data-path="src/components/HeroSection.tsx">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" data-id="44ux1fbo5" data-path="src/components/HeroSection.tsx" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse" data-id="de7hxflld" data-path="src/components/HeroSection.tsx" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce" data-id="etvd0ayzu" data-path="src/components/HeroSection.tsx" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-200 rounded-full opacity-25 animate-pulse" data-id="ecahu3udy" data-path="src/components/HeroSection.tsx" />

      <div className="container mx-auto px-4 py-20 relative z-10" data-id="5t14r3so4" data-path="src/components/HeroSection.tsx">
        <div className="max-w-4xl mx-auto text-center" data-id="w0tznylrn" data-path="src/components/HeroSection.tsx">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6" data-id="hx1276wzc" data-path="src/components/HeroSection.tsx">
            <Smartphone className="w-4 h-4 mr-2" data-id="mhzzegqua" data-path="src/components/HeroSection.tsx" />
            Aplikasi Keuangan Terdepan
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-id="eubucmu7f" data-path="src/components/HeroSection.tsx">
            📱 Kelola Keuanganmu dengan{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="2alqbnrnk" data-path="src/components/HeroSection.tsx">
              Cerdas
            </span>{' '}
            bersama FinClick!
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed" data-id="1ksriirho" data-path="src/components/HeroSection.tsx">
            Aplikasi keuangan untuk mengelola uang dengan mudah, cocok untuk generasi muda dan ibu rumah tangga.
            Wujudkan impian finansialmu dengan fitur-fitur canggih yang mudah digunakan.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-id="ghrf05fo2" data-path="src/components/HeroSection.tsx">
            <Button
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-id="ct7e6pdnz" data-path="src/components/HeroSection.tsx">

              ✅ Download Aplikasi
              <ArrowRight className="ml-2 h-5 w-5" data-id="a7imw354t" data-path="src/components/HeroSection.tsx" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 transition-all duration-300" data-id="o0wwm41xn" data-path="src/components/HeroSection.tsx">

              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto" data-id="m239n6jxk" data-path="src/components/HeroSection.tsx">
            <div className="flex items-center justify-center space-x-3 bg-white/50 backdrop-blur-sm rounded-lg p-4" data-id="hcmmwbwnk" data-path="src/components/HeroSection.tsx">
              <TrendingUp className="w-6 h-6 text-green-600" data-id="3l2994qhd" data-path="src/components/HeroSection.tsx" />
              <span className="text-gray-700 font-medium" data-id="cre4y9akb" data-path="src/components/HeroSection.tsx">Hemat Lebih Banyak</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/50 backdrop-blur-sm rounded-lg p-4" data-id="h9k6738ut" data-path="src/components/HeroSection.tsx">
              <Shield className="w-6 h-6 text-blue-600" data-id="3s4tu4nf5" data-path="src/components/HeroSection.tsx" />
              <span className="text-gray-700 font-medium" data-id="0i04slj4i" data-path="src/components/HeroSection.tsx">100% Aman</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/50 backdrop-blur-sm rounded-lg p-4" data-id="4nsoptrkj" data-path="src/components/HeroSection.tsx">
              <Smartphone className="w-6 h-6 text-purple-600" data-id="w550ktghd" data-path="src/components/HeroSection.tsx" />
              <span className="text-gray-700 font-medium" data-id="7n72upw73" data-path="src/components/HeroSection.tsx">Mudah Digunakan</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;