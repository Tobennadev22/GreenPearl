
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  animationDelay?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  className,
  animationDelay
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        'mb-12 animate-fade-in',
        alignment === 'center' && 'text-center',
        alignment === 'right' && 'text-right',
        className
      )}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {subtitle && (
        <span className="inline-block text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
