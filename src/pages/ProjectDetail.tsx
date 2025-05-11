
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import SkillBadge from '@/components/SkillBadge';

// Sample projects data
const projectsData = {
  'mobile-banking-app': {
    title: 'Mobile Banking App',
    category: 'UX/UI Design',
    client: 'FinTech Startup',
    year: '2023',
    role: 'Lead Designer',
    description: 'A comprehensive mobile banking solution that simplifies financial management for young professionals. The app features intuitive account management, smart budgeting tools, and personalized insights.',
    challenge: 'The challenge was to create a banking experience that appeals to tech-savvy millennials while maintaining the security and reliability expected from financial services.',
    solution: 'I designed a clean, minimalist interface with a focus on visualizing financial data through elegant charts and graphs. The information architecture was carefully structured to make navigation intuitive, with the most common tasks accessible within one or two taps.',
    mainImageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ],
    skills: ['UI Design', 'UX Research', 'Prototyping', 'User Testing', 'Design System'],
    nextProject: 'e-commerce-website'
  },
  'e-commerce-website': {
    title: 'E-Commerce Website',
    category: 'Web Design',
    client: 'Retail Brand',
    year: '2022',
    role: 'UX/UI Designer',
    description: 'A modern e-commerce platform for a fashion retailer, focusing on creating an immersive shopping experience that highlights product imagery and simplifies the customer journey.',
    challenge: 'The brand needed to translate its physical store experience to the digital world while improving conversion rates and reducing cart abandonment.',
    solution: 'I created a responsive design with a focus on large, high-quality product imagery, intuitive navigation, and a streamlined checkout process. Special attention was paid to micro-interactions that provide delightful feedback throughout the shopping experience.',
    mainImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ],
    skills: ['Web Design', 'Responsive Design', 'E-commerce', 'Wireframing', 'Prototyping'],
    nextProject: 'fitness-tracker'
  },
  'fitness-tracker': {
    title: 'Fitness Tracker',
    category: 'Product Design',
    client: 'Health Tech Company',
    year: '2022',
    role: 'Product Designer',
    description: 'A fitness tracking application that helps users monitor their workouts, set goals, and track progress over time. The app includes social features to connect with friends and share achievements.',
    challenge: 'Creating a motivating fitness experience that caters to users with different fitness levels and goals while making complex health data accessible and meaningful.',
    solution: 'I designed an interface that visualizes progress in an engaging way, with customizable dashboards that allow users to focus on metrics that matter most to them. Gamification elements were added to keep users motivated and consistent with their fitness routines.',
    mainImageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ],
    skills: ['Mobile Design', 'UX Research', 'Information Architecture', 'Gamification', 'User Testing'],
    nextProject: 'smart-home-app'
  },
  'smart-home-app': {
    title: 'Smart Home App',
    category: 'Mobile Design',
    client: 'Tech Company',
    year: '2021',
    role: 'UX/UI Designer',
    description: 'A mobile application that allows users to control their smart home devices, set automated routines, and monitor energy usage from a single interface.',
    challenge: 'Designing an interface that unifies control for diverse smart home products while making complex automation features accessible to non-technical users.',
    solution: 'I created a tile-based interface with customizable rooms and scenes, focusing on simplified controls for common tasks while providing advanced options for power users. Special attention was paid to the onboarding experience to help users connect and set up their devices.',
    mainImageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    ],
    skills: ['IoT Design', 'Mobile Design', 'User Testing', 'Interaction Design', 'Prototyping'],
    nextProject: 'healthcare-dashboard'
  },
  'healthcare-dashboard': {
    title: 'Healthcare Dashboard',
    category: 'Web Design',
    client: 'Healthcare Provider',
    year: '2021',
    role: 'UX Designer',
    description: 'A comprehensive dashboard for healthcare professionals to monitor patient data, manage appointments, and streamline clinical workflows.',
    challenge: 'Creating an interface that presents complex medical information in an easily digestible format while ensuring efficient workflows for busy healthcare professionals.',
    solution: 'I designed a modular dashboard with customizable widgets that allow healthcare providers to prioritize information relevant to their role. The interface uses clear visual hierarchies and color coding to help quickly identify critical information and patient status.',
    mainImageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    ],
    skills: ['Dashboard Design', 'Data Visualization', 'Healthcare UX', 'User Research', 'Accessibility'],
    nextProject: 'travel-booking-platform'
  },
  'travel-booking-platform': {
    title: 'Travel Booking Platform',
    category: 'Web App',
    client: 'Travel Tech Startup',
    year: '2020',
    role: 'Product Designer',
    description: 'A comprehensive travel booking platform that allows users to find and book flights, accommodations, and experiences all in one place with personalized recommendations.',
    challenge: 'Designing a unified platform that simplifies the complex process of travel planning while accounting for the vast number of options and variables involved in trip planning.',
    solution: 'I created an interface that guides users through the booking process with a step-by-step approach, using visual cues and smart defaults to reduce cognitive load. The search and filter system was designed to help users quickly narrow down options based on their preferences.',
    mainImageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ],
    skills: ['Web App Design', 'User Flows', 'Interaction Design', 'Information Architecture', 'Prototyping'],
    nextProject: 'mobile-banking-app'
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data fetching
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        if (id && id in projectsData) {
          setProject(projectsData[id as keyof typeof projectsData]);
        }
        setLoading(false);
      }, 500);
    };
    
    fetchProject();
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-medium mb-4">Project Not Found</h1>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">The project you're looking for doesn't exist or has been removed.</p>
        <Button href="/projects">Back to Projects</Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="mb-8">
              <span className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1 text-xs font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
              <div>
                <h3 className="text-sm font-medium mb-1">Client</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Year</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Role</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Skills</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.skills.map((skill: string, index: number) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main image */}
          <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={project.mainImageUrl} 
                alt={project.title}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Project details */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
                <p>{project.challenge}</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-medium mb-4">The Solution</h2>
                <p>{project.solution}</p>
              </div>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-medium mb-8 animate-fade-in">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((image: string, index: number) => (
                <div 
                  key={index}
                  className="rounded-2xl overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Gallery image ${index + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Next project */}
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">Next Project</span>
            <h3 className="text-2xl font-medium mt-2 mb-6">
              {projectsData[project.nextProject as keyof typeof projectsData].title}
            </h3>
            <Button href={`/projects/${project.nextProject}`}>
              View Next Project
            </Button>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
