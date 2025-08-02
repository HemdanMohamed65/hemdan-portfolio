
import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden pt-20 md:pt-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                {t('heroTitle').split(' ').slice(0, -2).join(' ')} <span className="text-blue-400">{t('heroTitle').split(' ').slice(-2).join(' ')}</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-4 sm:mb-6">
                {t('heroSubtitle')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {t('heroDescription')}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                {t('viewWork')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('getInTouch')}
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6">
              <a 
                href="https://www.facebook.com/Hemdan.Mohamed65/?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/hemdan-mohamed-321692240/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://github.com/HemdanMohamed65"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.instagram.com/hemdan_mohamed65/"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297L6.391 14.42c.636.566 1.467.93 2.393.93 1.958 0 3.545-1.587 3.545-3.545 0-.926-.364-1.757-.93-2.393l1.271-1.271c.807.881 1.297 2.032 1.297 3.329 0 2.706-2.194 4.9-4.9 4.9l-.418-.383zm7.394-3.545c0 .926.364 1.757.93 2.393l-1.271 1.271c-.807-.881-1.297-2.032-1.297-3.329 0-2.706 2.194-4.9 4.9-4.9l.418.383c1.297 0 2.448.49 3.329 1.297L21.581 9.58c-.636-.566-1.467-.93-2.393-.93-1.958 0-3.545 1.587-3.545 3.545z"/>
                </svg>
              </a>
              <a 
                href="mailto:hemdannada65@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="tel:+201142170980"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Phone"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl mx-auto">
                <img
                  src="/lovable-uploads/898a1f8a-67c8-4f0c-aa49-61cc1b0c5cb1.png"
                  alt="Hemdan Mohamed - Backend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
