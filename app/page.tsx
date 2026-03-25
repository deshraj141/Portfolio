'use client';

import dynamic from 'next/dynamic';
import { Navbar, Hero, Contact, Footer, CursorGlow } from '@/components';

const RealtimeDemo = dynamic(() => import('@/components/RealtimeDemo').then((mod) => mod.RealtimeDemo), {
  loading: () => <div className="py-16 text-center text-white/50">Loading demo...</div>,
});

const About = dynamic(() => import('@/components/About').then((mod) => mod.About), {
  loading: () => <div className="py-16 text-center text-white/50">Loading about...</div>,
});

const TechStackGrid = dynamic(() => import('@/components/TechStackGrid').then((mod) => mod.TechStackGrid), {
  loading: () => <div className="py-16 text-center text-white/50">Loading tech stack...</div>,
});

const SkillsSection = dynamic(() => import('@/components/SkillsSection').then((mod) => mod.SkillsSection), {
  loading: () => <div className="py-16 text-center text-white/50">Loading skills...</div>,
});

const Projects = dynamic(() => import('@/components/Projects').then((mod) => mod.Projects), {
  loading: () => <div className="py-16 text-center text-white/50">Loading projects...</div>,
});

const Certificates = dynamic(() => import('@/components/Certificates').then((mod) => mod.Certificates), {
  loading: () => <div className="py-16 text-center text-white/50">Loading certificates...</div>,
});

const CodingProfiles = dynamic(() => import('@/components/CodingProfiles').then((mod) => mod.CodingProfiles), {
  loading: () => <div className="py-16 text-center text-white/50">Loading profiles...</div>,
});

const ActivityGraph = dynamic(() => import('@/components/ActivityGraph').then((mod) => mod.default), {
  loading: () => <div className="py-16 text-center text-white/50">Loading graph...</div>,
});

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <CursorGlow />

      <Hero />
      <RealtimeDemo />
      <About />
      <TechStackGrid />
      <SkillsSection />
      <Projects />
      <Certificates />
      <CodingProfiles />
      <ActivityGraph />
      <Contact />

      <Footer />
    </main>
  );
}