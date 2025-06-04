import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DownloadSection from '@/components/DownloadSection';
import ContactSection from '@/components/ContactSection';
import ChatBot from '@/components/ChatBot';

const HomePage = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white" data-id="j6eb1mvy1" data-path="src/pages/HomePage.tsx">
      {/* Sticky Navigation */}
      <Navbar data-id="0im8sim5t" data-path="src/pages/HomePage.tsx" />
      
      {/* Main Content */}
      <main data-id="34k31vv3m" data-path="src/pages/HomePage.tsx">
        <HeroSection data-id="mysp3fyxo" data-path="src/pages/HomePage.tsx" />
        <FeaturesSection data-id="i3xfdu5xt" data-path="src/pages/HomePage.tsx" />
        <AboutSection data-id="ju3x63xke" data-path="src/pages/HomePage.tsx" />
        <TestimonialsSection data-id="j90k3rf9d" data-path="src/pages/HomePage.tsx" />
        <DownloadSection data-id="k9ln7204q" data-path="src/pages/HomePage.tsx" />
        <ContactSection data-id="x387fx0qz" data-path="src/pages/HomePage.tsx" />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-id="dqgizhtd4" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="pqxrs341g" data-path="src/pages/HomePage.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="t3w0qyf3y" data-path="src/pages/HomePage.tsx">
            {/* Brand */}
            <div className="space-y-4" data-id="op8slmxef" data-path="src/pages/HomePage.tsx">
              <div className="flex items-center space-x-2" data-id="ub5pbitxy" data-path="src/pages/HomePage.tsx">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" data-id="nd06p0csy" data-path="src/pages/HomePage.tsx">
                  <span className="text-white font-bold text-sm" data-id="a8t1c8fi4" data-path="src/pages/HomePage.tsx">F</span>
                </div>
                <span className="text-xl font-bold" data-id="nfsiunwek" data-path="src/pages/HomePage.tsx">FinClick</span>
              </div>
              <p className="text-gray-400 text-sm" data-id="vzck63t2c" data-path="src/pages/HomePage.tsx">
                Aplikasi fintech untuk mengelola keuangan dengan cerdas. 
                Dibuat dengan ❤️ oleh mahasiswa UI.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4" data-id="2o5073q3n" data-path="src/pages/HomePage.tsx">
              <h4 className="font-bold text-lg" data-id="lm3j1ry4e" data-path="src/pages/HomePage.tsx">Quick Links</h4>
              <div className="space-y-2" data-id="5u4fgx55y" data-path="src/pages/HomePage.tsx">
                <a href="#beranda" className="block text-gray-400 hover:text-white transition-colors duration-200" data-id="12ubx57la" data-path="src/pages/HomePage.tsx">Beranda</a>
                <a href="#fitur" className="block text-gray-400 hover:text-white transition-colors duration-200" data-id="tltnjinri" data-path="src/pages/HomePage.tsx">Fitur</a>
                <a href="#tentang" className="block text-gray-400 hover:text-white transition-colors duration-200" data-id="qpb7noxf5" data-path="src/pages/HomePage.tsx">Tentang Kami</a>
                <a href="#testimoni" className="block text-gray-400 hover:text-white transition-colors duration-200" data-id="dsn9def7o" data-path="src/pages/HomePage.tsx">Testimoni</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4" data-id="62u4gymjh" data-path="src/pages/HomePage.tsx">
              <h4 className="font-bold text-lg" data-id="5hzcojxe0" data-path="src/pages/HomePage.tsx">Hubungi Kami</h4>
              <div className="space-y-2 text-sm" data-id="702j3u9kt" data-path="src/pages/HomePage.tsx">
                <p className="text-gray-400" data-id="ab5tm1hx2" data-path="src/pages/HomePage.tsx">📱 Fathir: 0857-7952-0493</p>
                <p className="text-gray-400" data-id="qygzpztk0" data-path="src/pages/HomePage.tsx">📱 Alya: 0831-3122-5104</p>
                <p className="text-gray-400" data-id="qbr2texm5" data-path="src/pages/HomePage.tsx">📧 finclick24@gmail.com</p>
                <div className="flex space-x-4 pt-2" data-id="6wn132yyh" data-path="src/pages/HomePage.tsx">
                  <a href="https://instagram.com/finclick.id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-200" data-id="lra4yhfua" data-path="src/pages/HomePage.tsx">
                    📸 Instagram
                  </a>
                  <a href="https://tiktok.com/@finclick.id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" data-id="btv0hrqlw" data-path="src/pages/HomePage.tsx">
                    🎥 TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center" data-id="yhprapol5" data-path="src/pages/HomePage.tsx">
            <p className="text-gray-400 text-sm" data-id="ebc1fklc4" data-path="src/pages/HomePage.tsx">
              © {new Date().getFullYear()} FinClick. All rights reserved. 
              <span className="mx-2" data-id="a4s26e86m" data-path="src/pages/HomePage.tsx">•</span>
              Made with 💙 by UI Students
            </p>
          </div>
        </div>
      </footer>

      {/* AI ChatBot */}
      <ChatBot data-id="0k1b4gg5d" data-path="src/pages/HomePage.tsx" />
    </div>);

};

export default HomePage;