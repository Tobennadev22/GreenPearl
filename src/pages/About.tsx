import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import PDFViewer from "@/utils/PdfViewer";

// Placeholder for any skills that might be in the original file

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* About content */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="About Me" subtitle="My Story" />

            {/* Content */}
            <div className="mt-8"></div>
          </div>
          <PDFViewer />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
