
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'stats';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  variant = 'default' 
}) => {
  const baseClasses = 'glass-card';
  
  const variantClasses = {
    default: 'p-6',
    hover: 'p-6 hover:scale-105 hover:bg-white/10 transition-all duration-300',
    stats: 'p-8 text-center hover:scale-105 transition-all duration-300'
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};

export default GlassCard;
