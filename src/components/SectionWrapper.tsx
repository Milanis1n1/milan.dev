import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations';
import { cn } from '@/utils/cn';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  className, 
  children,
  delay = 0 
}) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-28 relative overflow-hidden", className)}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ delay }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
