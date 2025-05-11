
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
  animationDelay?: string;
}

const SkillBadge = ({ name, className, animationDelay }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        'inline-block bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1 text-xs font-medium transition-transform duration-300 hover:scale-105 animate-fade-in',
        className
      )}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
