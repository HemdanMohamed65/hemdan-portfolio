
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'التواصل',
    
    // Hero Section
    heroTitle: 'مرحباً، أنا حمدان محمد',
    heroSubtitle: 'مطور الباك إند ومتخصص .NET',
    heroDescription: 'شغوف ببناء حلول الباك إند القوية والقابلة للتطوير باستخدام تقنيات .NET. أتخصص في C# و Entity Framework Core وبناء واجهات برمجة التطبيقات عالية الأداء التي تشغل التطبيقات الحديثة.',
    viewWork: 'عرض أعمالي',
    getInTouch: 'تواصل معي',
    
    // Contact Section
    contactTitle: 'تواصل معي',
    contactSubtitle: 'مستعد لمناقشة مشروع الباك إند التالي؟ دعنا نتواصل ونستكشف كيف يمكننا بناء شيء مذهل معاً.',
    letsConnect: 'دعنا نتواصل',
    contactDescription: 'أنا دائماً مهتم بمناقشة الفرص الجديدة والمشاريع التحديّة وحلول الباك إند المبتكرة. سواء كنت تبحث عن مطور مخصص أو تريد التعاون في مشاريع .NET مثيرة، أود أن أسمع منك.',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    location: 'الموقع',
    locationValue: 'الباجور، المنوفية، مصر',
    followMe: 'تابعني',
    sendMessage: 'إرسال رسالة',
    fullName: 'الاسم الكامل',
    emailAddress: 'عنوان البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'الرسالة',
    fullNamePlaceholder: 'اسمك الكامل',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'ما هو موضوع هذا؟',
    messagePlaceholder: 'أخبرني عن مشروعك...',
    sendButton: 'إرسال الرسالة',
    
    // Footer
    footerDescription: 'صياغة حلول الباك إند القوية باستخدام .NET',
    footerCopyright: 'بُني بـ',
    
    // Toast Messages
    errorTitle: 'خطأ',
    fillRequired: 'يرجى ملء جميع الحقول المطلوبة.',
    messageSent: 'تم إرسال الرسالة!',
    messageSuccess: 'شكراً لك على رسالتك. سأتواصل معك قريباً.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Hi, I\'m Hemdan Mohamed',
    heroSubtitle: 'Backend Developer & .NET Specialist',
    heroDescription: 'Passionate about crafting robust, scalable backend solutions using .NET technologies. I specialize in C#, Entity Framework Core, and building high-performance web APIs that power modern applications.',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to discuss your next backend project? Let\'s connect and explore how we can build something amazing together.',
    letsConnect: 'Let\'s Connect',
    contactDescription: 'I\'m always interested in discussing new opportunities, challenging projects, and innovative backend solutions. Whether you\'re looking for a dedicated developer or want to collaborate on exciting .NET projects, I\'d love to hear from you.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    locationValue: 'Al-Bagar, Menoufia, Egypt',
    followMe: 'Follow Me',
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    subject: 'Subject',
    message: 'Message',
    fullNamePlaceholder: 'Your full name',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'What\'s this about?',
    messagePlaceholder: 'Tell me about your project...',
    sendButton: 'Send Message',
    
    // Footer
    footerDescription: 'Crafting robust backend solutions with .NET',
    footerCopyright: 'Built with',
    
    // Toast Messages
    errorTitle: 'Error',
    fillRequired: 'Please fill in all required fields.',
    messageSent: 'Message Sent!',
    messageSuccess: 'Thank you for your message. I\'ll get back to you soon.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
