
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white hover:bg-gray-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'ar'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white hover:bg-gray-700'
        }`}
      >
        ع
      </button>
    </div>
  );
};

export default LanguageSwitcher;
