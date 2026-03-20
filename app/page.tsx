'use client';

import { motion } from 'framer-motion';
import { Navbar, Hero, RealtimeDemo, About, TechStackGrid, SkillsSection, Projects, Blog, CodingProfiles, ActivityGraph, Contact, Footer } from '@/components';
import { pageTransitions } from '@/lib/animations';

export default function Home() {
  return (
    <motion.main
      className="relative w-full min-h-screen bg-black text-white overflow-x-hidden"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <Navbar />
      
      <motion.div
        variants={pageTransitions.sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Hero Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <Hero />
        </motion.div>

        {/* Realtime Demo Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <RealtimeDemo />
        </motion.div>
        
        {/* About Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <About />
        </motion.div>
        
        {/* Tech Stack Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <TechStackGrid />
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <SkillsSection />
        </motion.div>
        
        {/* Projects Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <Projects />
        </motion.div>
        
        {/* Blog Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <Blog />
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <CodingProfiles />
        </motion.div>

        {/* Activity Graph Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <ActivityGraph />
        </motion.div>
        
        {/* Contact Section */}
        <motion.div
          variants={pageTransitions.section}
        >
          <Contact />
        </motion.div>
      </motion.div>

      <Footer />
    </motion.main>
  );
}