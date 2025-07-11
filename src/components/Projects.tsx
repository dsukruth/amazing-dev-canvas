
import React from 'react';
import { ExternalLink, Github, ArrowRight, Calendar } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const handleViewAllProjects = () => {
    window.open('https://github.com/dsukruth', '_blank');
  };

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Here are some of my key projects that showcase my expertise in AI, machine learning, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 text-sm text-gray-700">
                  <Calendar size={14} />
                  <span>{project.period}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="liquid-glass-button flex items-center space-x-2 text-gray-900 transition-all duration-300 group/link font-medium px-4 py-2 rounded-full">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleViewAllProjects}
            className="liquid-glass-button inline-flex items-center space-x-3 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium transition-all duration-300"
          >
            <span>View All Projects</span>
            <Github size={20} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .liquid-glass-button {
            position: relative;
            overflow: hidden;
          }

          .liquid-glass-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              rgba(255, 255, 255, 0.1),
              transparent
            );
            transition: left 0.6s ease;
            z-index: 1;
          }

          .liquid-glass-button::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            backdrop-filter: blur(10px);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 0;
          }

          .liquid-glass-button:hover::before {
            left: 100%;
          }

          .liquid-glass-button:hover::after {
            opacity: 1;
          }

          .liquid-glass-button:active {
            transform: scale(0.98);
            box-shadow: 
              inset 0 4px 8px rgba(0, 0, 0, 0.1),
              0 4px 12px rgba(31, 38, 135, 0.2);
          }

          .liquid-glass-button > * {
            position: relative;
            z-index: 2;
          }
        `
      }} />
    </section>
  );
};

export default Projects;
