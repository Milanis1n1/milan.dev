import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { experiences } from '@/data/experience';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Professional Experience</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A timeline of my professional journey and contributions.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -z-10" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={`${exp.company}-${index}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Timeline Dot */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm mt-1.5" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'
              }`}>
                <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${
                  index % 2 === 0 ? 'md:text-left' : ''
                }`}>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-blue-600 font-medium my-2 ${
                    index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
                  }`}>
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-slate-500 text-sm mb-4 ${
                    index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
                  }`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  {exp.description && (
                    <p className={`text-slate-600 mb-4 italic ${
                       index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                    }`}>
                      {exp.description}
                    </p>
                  )}

                  <ul className={`space-y-2 text-slate-600 text-sm ${
                    index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                  }`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 mt-4 ${
                    index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
                  }`}>
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
