
import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold text-white">
            Hemdan<span className="text-blue-400">.Dev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Contact
            </button>
          </div>
          
          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://www.facebook.com/Hemdan.Mohamed65/?locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/hemdan-mohamed-321692240/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://www.instagram.com/hemdan_mohamed65/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297L6.391 14.42c.636.566 1.467.93 2.393.93 1.958 0 3.545-1.587 3.545-3.545 0-.926-.364-1.757-.93-2.393l1.271-1.271c.807.881 1.297 2.032 1.297 3.329 0 2.706-2.194 4.9-4.9 4.9l-.418-.383zm7.394-3.545c0 .926.364 1.757.93 2.393l-1.271 1.271c-.807-.881-1.297-2.032-1.297-3.329 0-2.706 2.194-4.9 4.9-4.9l.418.383c1.297 0 2.448.49 3.329 1.297L21.581 9.58c-.636-.566-1.467-.93-2.393-.93-1.958 0-3.545 1.587-3.545 3.545z"/>
              </svg>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
