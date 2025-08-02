
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: ".NET Core", level: 95 },
        { name: "C#", level: 90 },
        { name: "ASP.NET Web API", level: 85 },
        { name: "Entity Framework Core", level: 88 }
      ]
    },
    {
      title: "Database & ORM",
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "LINQ", level: 90 },
        { name: "Database Design", level: 80 },
        { name: "Entity Framework", level: 88 }
      ]
    },
    {
      title: "Software Architecture",
      skills: [
        { name: "Object-Oriented Programming", level: 92 },
        { name: "SOLID Principles", level: 85 },
        { name: "Design Patterns", level: 80 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "HTML/CSS", level: 70 },
        { name: "Networking", level: 75 },
        { name: "Operating Systems", level: 80 },
        { name: "File Systems", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical expertise in backend development, 
            database management, and software architecture.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm sm:text-base text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technologies Grid */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Technologies & Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {[
              { name: ".NET", color: "bg-purple-600" },
              { name: "C#", color: "bg-green-600" },
              { name: "SQL Server", color: "bg-red-600" },
              { name: "Entity Framework", color: "bg-blue-600" },
              { name: "Visual Studio", color: "bg-indigo-600" },
              { name: "Git", color: "bg-orange-600" },
              { name: "REST API", color: "bg-teal-600" },
              { name: "JSON", color: "bg-yellow-600" },
              { name: "LINQ", color: "bg-pink-600" },
              { name: "Azure", color: "bg-blue-500" },
              { name: "Docker", color: "bg-cyan-600" },
              { name: "Postman", color: "bg-orange-500" }
            ].map((tech, index) => (
              <div 
                key={index}
                className={`${tech.color} rounded-lg p-3 sm:p-4 text-center text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-xs sm:text-sm lg:text-base`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
