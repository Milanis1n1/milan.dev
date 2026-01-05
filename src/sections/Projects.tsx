import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { projects } from '@/data/projects';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-slate-50/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Projects</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A selection of projects that showcase complex problem solving and architectural design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
            <div className="p-8 flex flex-col h-full bg-gradient-to-br from-white to-slate-50/50">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mt-1">{project.role}</p>
                </div>
                <div className="flex gap-2">
                  {project.links?.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 space-y-2 flex-grow">
                {project.impact.map((point, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-500">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 flex items-center gap-1">
                      <Code size={12} className="text-blue-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
