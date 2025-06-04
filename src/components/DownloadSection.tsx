import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ExternalLink, Smartphone, Tablet } from 'lucide-react';

const DownloadSection = () => {
  const handleFigmaClick = () => {
    // In a real app, this would open the actual Figma prototype
    window.open('https://www.figma.com', '_blank');
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden" data-id="9kry7mzn0" data-path="src/components/DownloadSection.tsx">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/20" data-id="fvwd2sa6u" data-path="src/components/DownloadSection.tsx" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" data-id="xnftrmfx5" data-path="src/components/DownloadSection.tsx" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" data-id="6pqbvsk9j" data-path="src/components/DownloadSection.tsx" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl" data-id="kxamdmlw0" data-path="src/components/DownloadSection.tsx" />

      <div className="container mx-auto px-4 relative z-10" data-id="sby9s5bqe" data-path="src/components/DownloadSection.tsx">
        <div className="max-w-4xl mx-auto text-center" data-id="many8bm1q" data-path="src/components/DownloadSection.tsx">
          {/* Header */}
          <div className="mb-12" data-id="qzrj1cc2h" data-path="src/components/DownloadSection.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-id="chm7wvmy3" data-path="src/components/DownloadSection.tsx">
              🚀 Coba FinClick Sekarang!
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto" data-id="v90di5kfl" data-path="src/components/DownloadSection.tsx">
              Mulai perjalanan finansialmu hari ini dan rasakan perbedaannya dalam mengelola keuangan
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-12" data-id="zgcydy8j3" data-path="src/components/DownloadSection.tsx">
            <CardContent className="p-8" data-id="19xvdxcvo" data-path="src/components/DownloadSection.tsx">
              <div className="flex flex-col items-center space-y-6" data-id="9vge4agrc" data-path="src/components/DownloadSection.tsx">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center" data-id="7qcw6ganf" data-path="src/components/DownloadSection.tsx">
                  <Smartphone className="w-10 h-10 text-white" data-id="3gc7mql4l" data-path="src/components/DownloadSection.tsx" />
                </div>
                <div data-id="vf9usx1q0" data-path="src/components/DownloadSection.tsx">
                  <h3 className="text-2xl font-bold mb-2" data-id="cnqypda2v" data-path="src/components/DownloadSection.tsx">Prototype FinClick</h3>
                  <p className="text-blue-100 mb-6" data-id="mgxjnqqad" data-path="src/components/DownloadSection.tsx">
                    Lihat dan coba langsung prototype aplikasi FinClick di Figma
                  </p>
                </div>
                <Button
                  onClick={handleFigmaClick}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-id="y97qo1jz5" data-path="src/components/DownloadSection.tsx">

                  <Download className="mr-2 h-5 w-5" data-id="l3lbb9hg3" data-path="src/components/DownloadSection.tsx" />
                  📥 Klik untuk mencoba FinClick (Figma)
                  <ExternalLink className="ml-2 h-4 w-4" data-id="rgwhmxqwx" data-path="src/components/DownloadSection.tsx" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-id="wus31u1fr" data-path="src/components/DownloadSection.tsx">
            <Card className="bg-white/10 backdrop-blur-md border-white/20" data-id="ypt2unfxi" data-path="src/components/DownloadSection.tsx">
              <CardContent className="p-6 text-center" data-id="niexz14nc" data-path="src/components/DownloadSection.tsx">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4" data-id="w4tdoxn2f" data-path="src/components/DownloadSection.tsx">
                  <Smartphone className="w-6 h-6 text-white" data-id="ao7benv5o" data-path="src/components/DownloadSection.tsx" />
                </div>
                <h4 className="text-lg font-bold mb-2" data-id="h70sydqsu" data-path="src/components/DownloadSection.tsx">Mobile App</h4>
                <p className="text-blue-100 text-sm mb-4" data-id="trolettmb" data-path="src/components/DownloadSection.tsx">Segera hadir di Play Store & App Store</p>
                <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-200 rounded-full text-xs" data-id="6ily8p8tj" data-path="src/components/DownloadSection.tsx">
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20" data-id="7myyw4tmx" data-path="src/components/DownloadSection.tsx">
              <CardContent className="p-6 text-center" data-id="ayh9w0tq1" data-path="src/components/DownloadSection.tsx">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4" data-id="u1ouo8tze" data-path="src/components/DownloadSection.tsx">
                  <Tablet className="w-6 h-6 text-white" data-id="fn16e6wn8" data-path="src/components/DownloadSection.tsx" />
                </div>
                <h4 className="text-lg font-bold mb-2" data-id="h405zf6u8" data-path="src/components/DownloadSection.tsx">Web App</h4>
                <p className="text-blue-100 text-sm mb-4" data-id="24mg0tkcl" data-path="src/components/DownloadSection.tsx">Akses melalui browser favoritmu</p>
                <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-200 rounded-full text-xs" data-id="o1mtakiai" data-path="src/components/DownloadSection.tsx">
                  Coming Soon
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-white/20" data-id="iy61662bg" data-path="src/components/DownloadSection.tsx">
            <h3 className="text-xl font-bold mb-6" data-id="onxfm2jkt" data-path="src/components/DownloadSection.tsx">Yang Akan Kamu Dapatkan:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" data-id="vcs55yeev" data-path="src/components/DownloadSection.tsx">
              <div className="flex items-start space-x-3" data-id="xszkt2zj6" data-path="src/components/DownloadSection.tsx">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-id="2i0j0ycz2" data-path="src/components/DownloadSection.tsx">
                  <span className="text-xs" data-id="zwb7157iv" data-path="src/components/DownloadSection.tsx">✓</span>
                </div>
                <div data-id="oxy7fmopr" data-path="src/components/DownloadSection.tsx">
                  <h4 className="font-semibold" data-id="q3bzn5mkg" data-path="src/components/DownloadSection.tsx">Pencatatan Otomatis</h4>
                  <p className="text-blue-100 text-sm" data-id="2me4sowz6" data-path="src/components/DownloadSection.tsx">Track pengeluaran secara real-time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3" data-id="i1x6n59mc" data-path="src/components/DownloadSection.tsx">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-id="fzzqissmd" data-path="src/components/DownloadSection.tsx">
                  <span className="text-xs" data-id="47e42tvls" data-path="src/components/DownloadSection.tsx">✓</span>
                </div>
                <div data-id="ao77tsv55" data-path="src/components/DownloadSection.tsx">
                  <h4 className="font-semibold" data-id="l7ceybq7t" data-path="src/components/DownloadSection.tsx">Tips Harian</h4>
                  <p className="text-blue-100 text-sm" data-id="i8wup7ogh" data-path="src/components/DownloadSection.tsx">Edukasi finansial setiap hari</p>
                </div>
              </div>
              <div className="flex items-start space-x-3" data-id="l2qldeaea" data-path="src/components/DownloadSection.tsx">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-id="7s361g1ip" data-path="src/components/DownloadSection.tsx">
                  <span className="text-xs" data-id="yi5okdjbe" data-path="src/components/DownloadSection.tsx">✓</span>
                </div>
                <div data-id="y6uvf1lba" data-path="src/components/DownloadSection.tsx">
                  <h4 className="font-semibold" data-id="mp74uomlx" data-path="src/components/DownloadSection.tsx">Mode Khusus</h4>
                  <p className="text-blue-100 text-sm" data-id="15ott5arl" data-path="src/components/DownloadSection.tsx">Disesuaikan dengan kebutuhanmu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default DownloadSection;