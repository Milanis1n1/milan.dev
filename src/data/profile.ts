import type { Profile } from '../types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const profile: Profile = {
  name: "Milan Goswami",
  title: "Senior Technical Lead | Frontend Architect",
  tagline: "Senior Technical Lead with 10+ years of experience in Frontend Engineering, UI Architecture, and GenAI-Driven Development. Specializing in Angular, React, and building scalable enterprise web applications.",
  contact: {
    email: "milangiri29@gmail.com", 
    socials: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/milan-goswami-1n1/", 
        icon: Linkedin
      },
      {
        platform: "GitHub",
        url: "https://github.com/milangoswami", 
        icon: Github
      },
      {
        platform: "Email",
        url: "mailto:milangiri29@gmail.com",
        icon: Mail
      }
    ]
  }
};
