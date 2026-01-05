import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="hero" className="min-h-[90vh] flex items-center pt-0">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100"
        >
          Available for new opportunities
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6"
        >
          Hi, I'm {profile.name}. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {profile.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Button 
            size="lg" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects <ArrowRight size={20} className="ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download CV <Download size={20} className="ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 opacity-30 md:opacity-50 blur-3xl pointer-events-none">
        <div className="w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 absolute top-0 -left-4" />
      </div>
    </SectionWrapper>
  );
};

export default Hero;
