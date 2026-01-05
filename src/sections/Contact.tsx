import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="bg-blue-600 text-white relative isolate overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-blue-100 text-lg md:text-xl mb-12 leading-relaxed">
          I'm currently available for freelance projects and new career opportunities. 
          If you're looking for a technical leader to help build scalable systems, let's connect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 shadow-none hover:shadow-lg"
            onClick={() => window.location.href = `mailto:${profile.contact.email}`}
          >
            <Mail className="mr-2" size={20} />
            Say Hello
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-blue-400 text-white hover:bg-blue-700 hover:border-blue-700 hover:text-white"
            onClick={() => window.open(profile.contact.socials.find(s => s.platform === 'LinkedIn')?.url, '_blank')}
          >
            Connect on LinkedIn
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
