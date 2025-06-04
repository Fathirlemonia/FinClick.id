import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#fitur', label: 'Fitur' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#download', label: 'Download' },
  { href: '#kontak', label: 'Kontak' }];


  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // Account for fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`
    } data-id="fjghotfto" data-path="src/components/Navbar.tsx">
      <div className="container mx-auto px-4 py-4" data-id="pda05wt6h" data-path="src/components/Navbar.tsx">
        <div className="flex justify-between items-center" data-id="bog4vzxqg" data-path="src/components/Navbar.tsx">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-id="8uzf8j619" data-path="src/components/Navbar.tsx">
            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/9082/94bb969a-e826-4afb-8404-f89096dd47cb.jpeg"
              alt="FinClick Logo"
              className="w-8 h-8 rounded-lg object-contain" data-id="yyki7b380" data-path="src/components/Navbar.tsx" />

            <span className="text-xl font-bold text-gray-800" data-id="7g3zambqp" data-path="src/components/Navbar.tsx">FinClick</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" data-id="4gyd1c3sc" data-path="src/components/Navbar.tsx">
            {navItems.map((item) =>
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" data-id="2hqw8c538" data-path="src/components/Navbar.tsx">

                {item.label}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)} data-id="yak5zmueb" data-path="src/components/Navbar.tsx">

            {isOpen ? <X className="h-5 w-5" data-id="0xaunmuny" data-path="src/components/Navbar.tsx" /> : <Menu className="h-5 w-5" data-id="ncoh3zfxz" data-path="src/components/Navbar.tsx" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen &&
        <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg border" data-id="4v1ereop2" data-path="src/components/Navbar.tsx">
            {navItems.map((item) =>
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200" data-id="83uac9det" data-path="src/components/Navbar.tsx">

                {item.label}
              </button>
          )}
          </div>
        }
      </div>
    </nav>);

};

export default Navbar;