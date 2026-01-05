import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { skills } from '@/data/skills';
import { motion } from 'framer-motion';
import { staggerContainer, scaleIn } from '@/animations';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-slate-50/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Technical Expertise</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A comprehensive toolset honed over years of full-stack development and architectural leadership.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <Card key={group.category} className="p-8" noHover>
            <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-2">
              {group.category}
            </h3>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={scaleIn}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
