
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">
              Hemdan<span className="text-blue-400">.Dev</span>
            </div>
            <p className="text-gray-400">
              {t('footerDescription')}
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/Hemdan.Mohamed65/?locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/hemdan-mohamed-321692240/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/HemdanMohamed65"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/hemdan_mohamed65/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297L6.391 14.42c.636.566 1.467.93 2.393.93 1.958 0 3.545-1.587 3.545-3.545 0-.926-.364-1.757-.93-2.393l1.271-1.271c.807.881 1.297 2.032 1.297 3.329 0 2.706-2.194 4.9-4.9 4.9l-.418-.383zm7.394-3.545c0 .926.364 1.757.93 2.393l-1.271 1.271c-.807-.881-1.297-2.032-1.297-3.329 0-2.706 2.194-4.9 4.9-4.9l.418.383c1.297 0 2.448.49 3.329 1.297L21.581 9.58c-.636-.566-1.467-.93-2.393-.93-1.958 0-3.545 1.587-3.545 3.545z"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
              © {currentYear} {t('footerCopyright')} <Heart className="w-4 h-4 text-red-500" /> by Hemdan Mohamed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
