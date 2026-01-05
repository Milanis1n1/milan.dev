import React from 'react';
import { profile } from '@/data/profile';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">{profile.name}</h3>
            <p className="text-slate-400 text-sm max-w-md">
              {profile.tagline}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {profile.contact.socials.map((social) => {
             // Dynamic Icon Rendering based on platform name match or default
             const Icon = social.platform === 'GitHub' ? Github : 
                          social.platform === 'LinkedIn' ? Linkedin : Mail;
                          
             return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label={social.platform}
              >
                <Icon size={20} />
              </a>
             );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
