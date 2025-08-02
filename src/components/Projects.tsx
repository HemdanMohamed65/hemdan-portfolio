
import React from 'react';
import { Github, ExternalLink, Database, Code2, Music } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'ar' ? 'تطبيق تعليمي للأطفال' : 'EDU App For Kids',
      description: language === 'ar' 
        ? 'منصة تعليمية شاملة للأطفال مبنية باستخدام .NET Core، تتميز بنظام إدارة المحتوى التعليمي، تتبع التقدم، والتفاعل مع الطلاب.'
        : 'Comprehensive educational platform for kids built with .NET Core, featuring educational content management, progress tracking, and student interaction.',
      technologies: [".NET Core", "C#", "Entity Framework", "SQL Server", "JWT Authentication"],
      features: language === 'ar' 
        ? ["إدارة المحتوى التعليمي", "تتبع تقدم الطلاب", "نظام المصادقة", "واجهات برمجة تطبيقات آمنة"]
        : ["Educational Content Management", "Student Progress Tracking", "Authentication System", "Secure APIs"],
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      gradient: "from-blue-600 to-purple-600",
      githubLink: "https://github.com/HemdanMohamed65/EducationApi/tree/main"
    },
    {
      title: language === 'ar' ? 'عرض مراجعة LINQ' : 'LINQ Revision Demo',
      description: language === 'ar' 
        ? 'تطبيق وحدة تحكم بسيط يوضح عمليات LINQ مثل التصفية والترتيب والاستعلام على مجموعة من كائنات السيارات باستخدام صيغة الاستعلام والطريقة.'
        : 'A simple console application demonstrating LINQ operations like filtering, sorting, and querying a collection of car objects using both query and method syntax.',
      technologies: ["C#", ".NET Core", "LINQ"],
      features: language === 'ar' 
        ? ["عمليات الاستعلام والطريقة", "تصفية وترتيب البيانات", "معالجة مجموعات الكائنات", "تطبيق وحدة التحكم"]
        : ["Query & Method Syntax", "Data Filtering & Sorting", "Object Collections Handling", "Console Application"],
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      gradient: "from-green-600 to-teal-600",
      githubLink: "#"
    },
    {
      title: language === 'ar' ? 'مدير الموسيقيين EF Core' : 'EF Core Musician Manager',
      description: language === 'ar' 
        ? 'تطبيق CRUD قائم على وحدة التحكم لإدارة الموسيقيين والألبومات باستخدام Entity Framework Core. يتضمن علاقات معقدة مثل One-to-Many و Many-to-Many مع ميزات معالجة البيانات الكاملة.'
        : 'A console-based CRUD application to manage musicians and albums using Entity Framework Core. Includes complex relationships like One-to-Many and Many-to-Many, with full data manipulation features.',
      technologies: ["C#", ".NET Core", "Entity Framework Core", "SQL Server", "EF Core Power Tools"],
      features: language === 'ar' 
        ? ["عمليات CRUD كاملة", "علاقات قاعدة البيانات المعقدة", "إدارة الموسيقيين والألبومات", "أدوات EF Core المتقدمة"]
        : ["Full CRUD Operations", "Complex Database Relationships", "Musicians & Albums Management", "Advanced EF Core Tools"],
      icon: <Music className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      gradient: "from-purple-600 to-pink-600",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {language === 'ar' ? 'المشاريع ' : 'Featured '}
            <span className="text-blue-400">{language === 'ar' ? 'المميزة' : 'Projects'}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {language === 'ar' 
              ? 'عرض لمشاريع تطوير الباك إند التي تتميز بتقنيات .NET وتصميم قواعد البيانات وحلول الهندسة المعمارية القابلة للتطوير.'
              : 'A showcase of my backend development projects featuring .NET technologies, database design, and scalable architecture solutions.'
            }
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-4 sm:p-6`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  {project.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    {language === 'ar' ? 'التقنيات:' : 'Technologies:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs sm:text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    {language === 'ar' ? 'الميزات الرئيسية:' : 'Key Features:'}
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <Github size={16} />
                    {language === 'ar' ? 'الكود' : 'Code'}
                  </a>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    <ExternalLink size={16} />
                    {language === 'ar' ? 'التفاصيل' : 'Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            {language === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
