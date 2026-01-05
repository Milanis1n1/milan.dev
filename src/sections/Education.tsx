import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { education } from '@/data/education';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Education</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Academic background and qualifications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid  gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={index}
          >
            <Card className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:border-blue-200 transition-colors">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                <p className="text-slate-600 font-medium">{edu.institution}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-100 px-3 py-1 rounded-full">
                <Calendar size={14} />
                <span>{edu.year}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
