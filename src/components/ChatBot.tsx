import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User, Lightbulb } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: 1,
    text: 'Halo! 👋 Saya adalah asisten virtual FinClick. Ada yang bisa saya bantu mengenai aplikasi kami?',
    isBot: true,
    timestamp: new Date()
  }]
  );
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    greeting: [
    'Halo! Senang bertemu dengan Anda! 😊',
    'Hi! Ada yang bisa saya banttu tentang FinClick?',
    'Halo! Selamat datang di FinClick! 👋'],

    features: [
    'FinClick memiliki fitur unggulan: 📊 Pencatatan otomatis, 🔔 Notifikasi hemat, 🧠 Tips finansial harian, dan 👨‍👩‍👧 Mode khusus untuk ibu rumah tangga & pelajar!',
    'Fitur utama FinClick: Manajemen keuangan mudah, tips hemat harian, dan mode khusus sesuai kebutuhan Anda!',
    'FinClick punya 4 fitur unggulan yang memudahkan pengelolaan keuangan Anda secara cerdas! 🚀'],

    download: [
    'Anda bisa mencoba prototype FinClick di Figma dulu! Klik tombol download di section Download ya! 📱',
    'Saat ini bisa dicoba via prototype Figma. Aplikasi mobile akan segera hadir di Play Store & App Store! 🎉',
    'Prototype sudah siap dicoba! Aplikasi lengkap akan segera launching. Stay tuned! ⏰'],

    tips: [
    '💡 Tips hemat hari ini: Catat semua pengeluaran, sekecil apapun. Awareness adalah langkah pertama menuju financial freedom!',
    '💰 Tips finansial: Terapkan aturan 50-30-20. 50% kebutuhan, 30% keinginan, 20% tabungan!',
    '🎯 Tip smart: Buat budget mingguan, bukan bulanan. Ini lebih mudah dikontrol dan direalisasikan!'],

    about: [
    'FinClick dibuat oleh tim mahasiswa UI yang peduli literasi finansial masyarakat Indonesia! 🎓',
    'Kami adalah tim yang berkomitmen membantu masyarakat Indonesia mengelola keuangan dengan bijak! ❤️',
    'Tim mahasiswa UI yang passionate menciptakan solusi finansial untuk semua kalangan! 🌟'],

    contact: [
    'Anda bisa menghubungi tim kami: 📱 Fathir (0857-7952-0493), Alya (0831-3122-5104), atau email finclick24@gmail.com',
    'Tim support kami ready 24/7! Hubungi via WhatsApp atau email untuk bantuan lebih lanjut! 🕒',
    'Follow juga sosial media kami @finclick.id di Instagram dan TikTok untuk tips finansial menarik! 📱'],

    default: [
    'Maaf, saya kurang memahami pertanyaan Anda. Bisa jelaskan lebih detail? 🤔',
    'Hmm, bisa diulang pertanyaannya? Saya siap membantu! 😊',
    'Saya belum paham betul. Coba tanya tentang fitur, download, tips, atau kontak tim kami ya! 💭']

  };

  const quickReplies = [
  { text: 'Fitur apa saja?', key: 'features' },
  { text: 'Cara download?', key: 'download' },
  { text: 'Tips hemat', key: 'tips' },
  { text: 'Kontak tim', key: 'contact' }];


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomResponse = (responses: string[]) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('halo') || message.includes('hai') || message.includes('hi')) {
      return getRandomResponse(botResponses.greeting);
    } else if (message.includes('fitur') || message.includes('feature')) {
      return getRandomResponse(botResponses.features);
    } else if (message.includes('download') || message.includes('install') || message.includes('dapat')) {
      return getRandomResponse(botResponses.download);
    } else if (message.includes('tips') || message.includes('saran') || message.includes('hemat')) {
      return getRandomResponse(botResponses.tips);
    } else if (message.includes('tentang') || message.includes('tim') || message.includes('siapa')) {
      return getRandomResponse(botResponses.about);
    } else if (message.includes('kontak') || message.includes('hubungi') || message.includes('bantuan')) {
      return getRandomResponse(botResponses.contact);
    } else {
      return getRandomResponse(botResponses.default);
    }
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-id="a2rs11g8h" data-path="src/components/ChatBot.tsx">
      {/* Chat Button */}
      {!isOpen &&
      <Button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110" data-id="u1bh61ui9" data-path="src/components/ChatBot.tsx">

          <MessageCircle className="w-6 h-6 text-white" data-id="8xyqrei9c" data-path="src/components/ChatBot.tsx" />
        </Button>
      }

      {/* Chat Window */}
      {isOpen &&
      <Card className="w-80 sm:w-96 h-96 shadow-2xl border-0 bg-white" data-id="35mjornvn" data-path="src/components/ChatBot.tsx">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg" data-id="40zrs6r72" data-path="src/components/ChatBot.tsx">
            <div className="flex justify-between items-center" data-id="xu5r7pwqi" data-path="src/components/ChatBot.tsx">
              <CardTitle className="text-lg flex items-center space-x-2" data-id="smzeuke3w" data-path="src/components/ChatBot.tsx">
                <Bot className="w-5 h-5" data-id="3bapm5oq8" data-path="src/components/ChatBot.tsx" />
                <span data-id="2vnnvifcc" data-path="src/components/ChatBot.tsx">FinClick Assistant</span>
              </CardTitle>
              <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0" data-id="a1fkkieu9" data-path="src/components/ChatBot.tsx">

                <X className="w-4 h-4" data-id="fvn2m0y30" data-path="src/components/ChatBot.tsx" />
              </Button>
            </div>
            <p className="text-xs text-blue-100" data-id="v5iiqd4tv" data-path="src/components/ChatBot.tsx">Online • Siap membantu Anda</p>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80" data-id="k4hf0x1qp" data-path="src/components/ChatBot.tsx">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" data-id="pmnq20322" data-path="src/components/ChatBot.tsx">
              {messages.map((message) =>
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`} data-id="zyuo9z97g" data-path="src/components/ChatBot.tsx">

                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`} data-id="sizvaiwl1" data-path="src/components/ChatBot.tsx">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isBot ? 'bg-blue-100' : 'bg-gray-200'}`
                } data-id="sb6pkjr9m" data-path="src/components/ChatBot.tsx">
                      {message.isBot ?
                  <Bot className="w-3 h-3 text-blue-600" data-id="4fkc9gd61" data-path="src/components/ChatBot.tsx" /> :

                  <User className="w-3 h-3 text-gray-600" data-id="lr6rv90b2" data-path="src/components/ChatBot.tsx" />
                  }
                    </div>
                    <div
                  className={`px-3 py-2 rounded-lg text-sm ${
                  message.isBot ?
                  'bg-gray-100 text-gray-800' :
                  'bg-blue-600 text-white'}`
                  } data-id="572byppwy" data-path="src/components/ChatBot.tsx">

                      {message.text}
                    </div>
                  </div>
                </div>
            )}

              {/* Typing indicator */}
              {isTyping &&
            <div className="flex justify-start" data-id="ukpdm1ifl" data-path="src/components/ChatBot.tsx">
                  <div className="flex items-center space-x-2" data-id="492zcczhy" data-path="src/components/ChatBot.tsx">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center" data-id="6oiyyt905" data-path="src/components/ChatBot.tsx">
                      <Bot className="w-3 h-3 text-blue-600" data-id="xsz0muzmg" data-path="src/components/ChatBot.tsx" />
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg" data-id="ryx6nyt33" data-path="src/components/ChatBot.tsx">
                      <div className="flex space-x-1" data-id="i3r88e598" data-path="src/components/ChatBot.tsx">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" data-id="2hhi2mup8" data-path="src/components/ChatBot.tsx"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} data-id="dt8vfgbcj" data-path="src/components/ChatBot.tsx"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} data-id="7nef7rdmt" data-path="src/components/ChatBot.tsx"></div>
                      </div>
                    </div>
                  </div>
                </div>
            }
              <div ref={messagesEndRef} data-id="odplrq509" data-path="src/components/ChatBot.tsx" />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 border-t bg-gray-50" data-id="miltby6co" data-path="src/components/ChatBot.tsx">
              <div className="flex flex-wrap gap-2" data-id="oem6mgqfd" data-path="src/components/ChatBot.tsx">
                {quickReplies.map((reply, index) =>
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7 px-2 rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
                onClick={() => handleSendMessage(reply.text)} data-id="ab1htd6ap" data-path="src/components/ChatBot.tsx">

                    {reply.text}
                  </Button>
              )}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t" data-id="4lphkndyi" data-path="src/components/ChatBot.tsx">
              <div className="flex space-x-2" data-id="0kumrig77" data-path="src/components/ChatBot.tsx">
                <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pesan..."
                className="flex-1 rounded-full border-gray-300 focus:border-blue-500" data-id="4h0b73pt7" data-path="src/components/ChatBot.tsx" />

                <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 p-0" data-id="3bj9xrm0q" data-path="src/components/ChatBot.tsx">

                  <Send className="w-4 h-4" data-id="v0e816cdr" data-path="src/components/ChatBot.tsx" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      }
    </div>);

};

export default ChatBot;