"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import TimelineSection from "../components/TimelineSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] scroll-smooth relative selection:bg-[#38bdf8] selection:text-[#030712]">
      {/* Background radial atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#38bdf8]/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
