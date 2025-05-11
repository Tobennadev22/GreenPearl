import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import { CheckCircle } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const steps = [
  {
    title: "Go to Menu",
    description: "Browse through our variety of meals and drinks.",
  },
  {
    title: "Select Servings or Liters",
    description: "Choose the quantity for each item you want.",
  },
  {
    title: "Open Quote Modal",
    description: "Click 'Get Quote' to open the quote form.",
  },
  {
    title: "Fill in Your Details",
    description: "Provide your name, contact, and delivery info.",
  },
  {
    title: "Send Quote",
    description: "Submit your request and we’ll get back to you shortly.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section
          className="relative pt-16 min-h-[calc(100vh-64px)] flex items-center justify-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1604329760661-e71dc83f8f26")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Experience African Cuisine
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
              Discover the rich and diverse flavors of authentic African dishes,
              prepared with love and tradition
            </p>

            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/menu">
                <span>View Our Menu</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <HowToOrder />

      <Footer />
    </div>
  );
};

const HowToOrder: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How to Order</h2>

        <div ref={ref} className="space-y-8 w-full gap-8 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="flex   gap-4"
            >
              <CheckCircle className="text-green-600 mt-1" size={48} />
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
