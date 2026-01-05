import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLMotionProps<"div"> {
  noHover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, noHover = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={!noHover ? { y: -5, transition: { duration: 0.2 } } : undefined}
        className={cn(
          "bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
