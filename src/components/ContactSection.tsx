import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Instagram, Music } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
  {
    icon: Phone,
    label: 'Fathir',
    value: '0857-7952-0493',
    type: 'phone',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Phone,
    label: 'Alya',
    value: '0831-3122-5104',
    type: 'phone',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Mail,
    label: 'Email Tim',
    value: 'finclick24@gmail.com',
    type: 'email',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }];


  const socialMedia = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@finclick.id',
    url: 'https://instagram.com/finclick.id',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Music,
    label: 'TikTok',
    handle: '@finclick.id',
    url: 'https://tiktok.com/@finclick.id',
    color: 'text-black',
    bgColor: 'bg-gray-50'
  }];


  const handleContactClick = (type: string, value: string) => {
    if (type === 'phone') {
      window.open(`tel:${value}`, '_self');
    } else if (type === 'email') {
      window.open(`mailto:${value}`, '_self');
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="kontak" className="py-20 bg-white" data-id="vjkydb0xb" data-path="src/components/ContactSection.tsx">
      <div className="container mx-auto px-4" data-id="9mco08qcq" data-path="src/components/ContactSection.tsx">
        <div className="max-w-6xl mx-auto" data-id="a8melzq1b" data-path="src/components/ContactSection.tsx">
          {/* Header */}
          <div className="text-center mb-16" data-id="dhgromu1w" data-path="src/components/ContactSection.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-id="rtho2lpfw" data-path="src/components/ContactSection.tsx">
              📞 Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="pd8lxz5pk" data-path="src/components/ContactSection.tsx">
              Ada pertanyaan atau saran? Tim FinClick siap membantu Anda 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="y5k0s2ki7" data-path="src/components/ContactSection.tsx">
            {/* Contact Information */}
            <div className="space-y-8" data-id="ryv99nn9f" data-path="src/components/ContactSection.tsx">
              <div data-id="06msxrjw4" data-path="src/components/ContactSection.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-id="mqjvzbk23" data-path="src/components/ContactSection.tsx">
                  💬 Kontak Tim
                </h3>
                <div className="space-y-4" data-id="b38a5gxk1" data-path="src/components/ContactSection.tsx">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <Card
                        key={index}
                        className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                        onClick={() => handleContactClick(contact.type, contact.value)} data-id="8ixd0blfu" data-path="src/components/ContactSection.tsx">

                        <CardContent className="p-6" data-id="nd91uho47" data-path="src/components/ContactSection.tsx">
                          <div className="flex items-center space-x-4" data-id="u2njeom1y" data-path="src/components/ContactSection.tsx">
                            <div className={`${contact.bgColor} ${contact.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`} data-id="3kc9hdc9r" data-path="src/components/ContactSection.tsx">
                              <Icon className="w-6 h-6" data-id="3qgoikx48" data-path="src/components/ContactSection.tsx" />
                            </div>
                            <div className="flex-1" data-id="fp20fxxwl" data-path="src/components/ContactSection.tsx">
                              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300" data-id="otbwrelsv" data-path="src/components/ContactSection.tsx">
                                📱 {contact.label}
                              </h4>
                              <p className="text-gray-600 font-medium" data-id="3qh9brckm" data-path="src/components/ContactSection.tsx">{contact.value}</p>
                            </div>
                            <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" data-id="bdq6pechz" data-path="src/components/ContactSection.tsx">
                              →
                            </div>
                          </div>
                        </CardContent>
                      </Card>);

                  })}
                </div>
              </div>

              {/* Social Media */}
              <div data-id="bs5itf21j" data-path="src/components/ContactSection.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-id="3nu2brk48" data-path="src/components/ContactSection.tsx">
                  🌐 Sosial Media
                </h3>
                <div className="space-y-4" data-id="ebqowp97d" data-path="src/components/ContactSection.tsx">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Card
                        key={index}
                        className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                        onClick={() => handleSocialClick(social.url)} data-id="inbnotinf" data-path="src/components/ContactSection.tsx">

                        <CardContent className="p-6" data-id="dbkykhdfv" data-path="src/components/ContactSection.tsx">
                          <div className="flex items-center space-x-4" data-id="o0yofguw6" data-path="src/components/ContactSection.tsx">
                            <div className={`${social.bgColor} ${social.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`} data-id="7tllkq93k" data-path="src/components/ContactSection.tsx">
                              <Icon className="w-6 h-6" data-id="9vo79mije" data-path="src/components/ContactSection.tsx" />
                            </div>
                            <div className="flex-1" data-id="cuwph9ywd" data-path="src/components/ContactSection.tsx">
                              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300" data-id="fx6cb8pv5" data-path="src/components/ContactSection.tsx">
                                {social.label === 'Instagram' ? '📸' : '🎥'} {social.label}
                              </h4>
                              <p className="text-gray-600 font-medium" data-id="smbm10gtx" data-path="src/components/ContactSection.tsx">{social.handle}</p>
                            </div>
                            <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" data-id="dvg914c8d" data-path="src/components/ContactSection.tsx">
                              ↗
                            </div>
                          </div>
                        </CardContent>
                      </Card>);

                  })}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8" data-id="vwyy54nlr" data-path="src/components/ContactSection.tsx">
              <div className="text-center space-y-6" data-id="56wobi1gt" data-path="src/components/ContactSection.tsx">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center" data-id="xm9ytmjxi" data-path="src/components/ContactSection.tsx">
                  <Mail className="w-10 h-10 text-white" data-id="vlfd8qz35" data-path="src/components/ContactSection.tsx" />
                </div>
                <div data-id="fe3nmfn62" data-path="src/components/ContactSection.tsx">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="op7y85acx" data-path="src/components/ContactSection.tsx">
                    💌 Mari Berkolaborasi!
                  </h3>
                  <p className="text-gray-600 mb-6" data-id="nb86swvgw" data-path="src/components/ContactSection.tsx">
                    Punya ide atau feedback untuk FinClick? Kami sangat senang mendengar dari Anda!
                  </p>
                </div>
                <div className="space-y-4" data-id="kkao14ef2" data-path="src/components/ContactSection.tsx">
                  <Button
                    onClick={() => handleContactClick('email', 'finclick24@gmail.com')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300" data-id="xjc2kduhz" data-path="src/components/ContactSection.tsx">

                    📧 Kirim Email
                  </Button>
                  <p className="text-sm text-gray-500" data-id="9ghw5vsti" data-path="src/components/ContactSection.tsx">
                    Atau hubungi langsung via WhatsApp untuk respon lebih cepat
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200" data-id="evxdj7num" data-path="src/components/ContactSection.tsx">
                <div className="grid grid-cols-2 gap-4 text-center" data-id="ezzck1y9d" data-path="src/components/ContactSection.tsx">
                  <div data-id="3y3hqcdet" data-path="src/components/ContactSection.tsx">
                    <div className="text-2xl font-bold text-blue-600" data-id="oj7y75294" data-path="src/components/ContactSection.tsx">&lt;24h</div>
                    <div className="text-gray-600 text-sm" data-id="k3iqu651p" data-path="src/components/ContactSection.tsx">Response Time</div>
                  </div>
                  <div data-id="s9tecqplc" data-path="src/components/ContactSection.tsx">
                    <div className="text-2xl font-bold text-green-600" data-id="stysqez3e" data-path="src/components/ContactSection.tsx">100%</div>
                    <div className="text-gray-600 text-sm" data-id="aqqormit4" data-path="src/components/ContactSection.tsx">Support Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;