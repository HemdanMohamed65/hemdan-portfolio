
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = (name: string, email: string, subject: string, message: string) => {
    const whatsappMessage = `*New Contact Form Message*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/201142170980?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('errorTitle'),
        description: t('fillRequired'),
        variant: "destructive"
      });
      return;
    }
    
    // Send to WhatsApp
    sendToWhatsApp(formData.name, formData.email, formData.subject, formData.message);
    
    toast({
      title: t('messageSent'),
      description: t('messageSuccess'),
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('contactTitle').split(' ').slice(0, -1).join(' ')} <span className="text-blue-400">{t('contactTitle').split(' ').slice(-1)[0]}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('letsConnect')}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {t('contactDescription')}
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                  <h4 className="text-white font-semibold">{t('email')}</h4>
                  <p className="text-gray-400">hemdannada65@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                  <h4 className="text-white font-semibold">{t('phone')}</h4>
                  <p className="text-gray-400" dir="ltr">+20 114 217 0980</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                  <h4 className="text-white font-semibold">{t('location')}</h4>
                  <p className="text-gray-400">{t('locationValue')}</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">{t('followMe')}</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/Hemdan.Mohamed65/?locale=ar_AR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/hemdan-mohamed-321692240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/HemdanMohamed65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/hemdan_mohamed65/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297L6.391 14.42c.636.566 1.467.93 2.393.93 1.958 0 3.545-1.587 3.545-3.545 0-.926-.364-1.757-.93-2.393l1.271-1.271c.807.881 1.297 2.032 1.297 3.329 0 2.706-2.194 4.9-4.9 4.9l-.418-.383zm7.394-3.545c0 .926.364 1.757.93 2.393l-1.271 1.271c-.807-.881-1.297-2.032-1.297-3.329 0-2.706 2.194-4.9 4.9-4.9l.418.383c1.297 0 2.448.49 3.329 1.297L21.581 9.58c-.636-.566-1.467-.93-2.393-.93-1.958 0-3.545 1.587-3.545 3.545z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:hemdannada65@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">{t('sendMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('fullNamePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    {t('emailAddress')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t('subjectPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t('messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                {t('sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
