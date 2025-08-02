
import React from 'react';
import { Code2, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Backend Architecture",
      description: "Expert in designing scalable backend systems with .NET Core and modern software architecture patterns."
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      title: "Database Design",
      description: "Proficient in SQL Server, Entity Framework Core, and crafting efficient database schemas."
    },
    {
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "API Development",
      description: "Building robust RESTful APIs and microservices with ASP.NET Core and Web API."
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />,
      title: "System Integration",
      description: "Experience in integrating complex systems, networking, and operating system fundamentals."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            I'm a passionate Backend Developer with expertise in .NET technologies. I specialize in creating robust, 
            scalable backend solutions using C#, Object-Oriented Programming principles, and modern software architecture. 
            My experience spans across Entity Framework Core, LINQ, SQL Server databases, and Web API development.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-3 sm:mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Technical Philosophy</h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4">
              I believe in writing clean, maintainable code that follows SOLID principles and industry best practices. 
              My approach focuses on creating efficient, secure, and scalable backend solutions that can grow with business needs. 
              I'm constantly learning new technologies and methodologies to stay at the forefront of backend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
