import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { profile } from '@/data/profile';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             {/* Placeholder for Profile Image */}
             <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                <span className="text-4xl font-bold opacity-25">IMG</span>
                {/* <img src="/profile.jpg" alt={profile.name} className="w-full h-full object-cover" /> */}
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-2xl" />
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            About Me
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              I am a passionate <strong>{profile.title}</strong> with over 10 years of experience in building enterprise-grade applications.
              Currently at Rishabh Software, I lead teams to deliver high-impact solutions using modern web technologies.
            </p>
            <p>
              My philosophy centers on writing clean, maintainable code and fostering a collaborative environment where every team member can thrive.
              I specialize in <strong>React, Angular, Node.js, and .Net</strong> ecosystems, always staying ahead of the curve with emerging trends.
            </p>
            <p>
              When I'm not coding, I enjoy mentoring junior developers and exploring new architectural patterns to solve complex system problems.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
