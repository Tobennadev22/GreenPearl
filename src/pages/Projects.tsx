
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

// Sample data
const allProjects = [
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    category: 'UX/UI Design',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e-commerce-website',
    title: 'E-Commerce Website',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    category: 'Product Design',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'smart-home-app',
    title: 'Smart Home App',
    category: 'Mobile Design',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'travel-booking-platform',
    title: 'Travel Booking Platform',
    category: 'Web App',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All', 'UX/UI Design', 'Web Design', 'Mobile Design', 'Product Design', 'Web App'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="My Projects" 
            subtitle="Portfolio"
          />
          
          {/* Category filters */}
          <div className="mb-12 overflow-x-auto whitespace-nowrap pb-2">
            <div className="inline-flex space-x-2">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                {...project}
                index={index}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
