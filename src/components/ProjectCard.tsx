
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  index?: number;
  animationDelay?: string;
}

const ProjectCard = ({ 
  id, 
  title, 
  category, 
  imageUrl, 
  index = 0,
  animationDelay 
}: ProjectCardProps) => {
  const [loaded, setLoaded] = useState(false);
  
  // Staggered animation based on index
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100 * index);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <Link 
      to={`/projects/${id}`}
      className={cn(
        'project-card block rounded-2xl overflow-hidden opacity-0',
        loaded && 'animate-slide-up'
      )}
      style={animationDelay ? { animationDelay } : { animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="project-image w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {category}
        </span>
        <h3 className="mt-1 font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
