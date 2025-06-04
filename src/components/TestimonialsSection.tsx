import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
  {
    name: 'Ibu Wati',
    role: 'Ibu Rumah Tangga',
    content: 'FinClick bantu saya atur uang belanja keluarga. Gampang banget dipakai!',
    rating: 5,
    avatar: '👩‍🦳',
    location: 'Jakarta'
  },
  {
    name: 'Rani',
    role: 'Mahasiswa',
    content: 'FinClick bikin saya lebih sadar soal pengeluaran harian!',
    rating: 5,
    avatar: '👩‍🎓',
    location: 'Bandung'
  },
  {
    name: 'Budi',
    role: 'Karyawan',
    content: 'Aplikasi yang sangat membantu untuk mengelola gaji bulanan. Fitur notifikasi hematnya keren!',
    rating: 5,
    avatar: '👨‍💼',
    location: 'Surabaya'
  },
  {
    name: 'Sari',
    role: 'Ibu Rumah Tangga',
    content: 'Mode ibu rumah tangga di FinClick sangat sesuai dengan kebutuhan saya. Terima kasih!',
    rating: 5,
    avatar: '👩‍👧‍👦',
    location: 'Yogyakarta'
  }];


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Star
      key={index}
      className={`w-4 h-4 ${
      index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`
      } data-id="mt5u3on5q" data-path="src/components/TestimonialsSection.tsx" />

    );
  };

  return (
    <section id="testimoni" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" data-id="xirlik44g" data-path="src/components/TestimonialsSection.tsx">
      <div className="container mx-auto px-4" data-id="i0pcl76ys" data-path="src/components/TestimonialsSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-id="pf5bv9x0i" data-path="src/components/TestimonialsSection.tsx">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-id="3mkupfvdt" data-path="src/components/TestimonialsSection.tsx">
            🗣 Kata Mereka tentang FinClick
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="hfuji98h7" data-path="src/components/TestimonialsSection.tsx">
            Ribuan pengguna telah merasakan manfaat FinClick dalam mengelola keuangan mereka
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" data-id="3mpbjsicf" data-path="src/components/TestimonialsSection.tsx">
          {testimonials.map((testimonial, index) =>
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg relative overflow-hidden" data-id="q65or53oj" data-path="src/components/TestimonialsSection.tsx">

              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300" data-id="qrj6n9wgf" data-path="src/components/TestimonialsSection.tsx">
                <Quote className="w-12 h-12 text-blue-600" data-id="1gq3oi9s9" data-path="src/components/TestimonialsSection.tsx" />
              </div>
              
              <CardContent className="p-8" data-id="8lcywojfb" data-path="src/components/TestimonialsSection.tsx">
                <div className="flex items-start space-x-4 mb-6" data-id="7v4jnju4p" data-path="src/components/TestimonialsSection.tsx">
                  <div className="text-4xl" data-id="x66ly4iiy" data-path="src/components/TestimonialsSection.tsx">{testimonial.avatar}</div>
                  <div className="flex-1" data-id="t5i0wees9" data-path="src/components/TestimonialsSection.tsx">
                    <h4 className="font-bold text-gray-900 text-lg" data-id="74wp5b0q8" data-path="src/components/TestimonialsSection.tsx">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm" data-id="h54vsd3h9" data-path="src/components/TestimonialsSection.tsx">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs" data-id="xrq7es1i5" data-path="src/components/TestimonialsSection.tsx">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4" data-id="9fd2tcqdm" data-path="src/components/TestimonialsSection.tsx">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed italic" data-id="vof41qov1" data-path="src/components/TestimonialsSection.tsx">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8" data-id="12ogo2icd" data-path="src/components/TestimonialsSection.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-id="94xnxyxfo" data-path="src/components/TestimonialsSection.tsx">
            <div className="space-y-2" data-id="eyjy1zef6" data-path="src/components/TestimonialsSection.tsx">
              <div className="text-3xl font-bold text-blue-600" data-id="srcgrw64j" data-path="src/components/TestimonialsSection.tsx">10K+</div>
              <div className="text-gray-600" data-id="vyvgbhqdl" data-path="src/components/TestimonialsSection.tsx">Pengguna Aktif</div>
            </div>
            <div className="space-y-2" data-id="bxgw2a69d" data-path="src/components/TestimonialsSection.tsx">
              <div className="text-3xl font-bold text-green-600" data-id="v7gfo67jh" data-path="src/components/TestimonialsSection.tsx">4.9★</div>
              <div className="text-gray-600" data-id="em1jpv9rr" data-path="src/components/TestimonialsSection.tsx">Rating Aplikasi</div>
            </div>
            <div className="space-y-2" data-id="o71612yji" data-path="src/components/TestimonialsSection.tsx">
              <div className="text-3xl font-bold text-purple-600" data-id="tmtn84vlt" data-path="src/components/TestimonialsSection.tsx">98%</div>
              <div className="text-gray-600" data-id="midmq6qr0" data-path="src/components/TestimonialsSection.tsx">Kepuasan Pengguna</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;