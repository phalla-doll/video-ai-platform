'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';
import DarkSection from '@/components/DarkSection';
import TestimonialSection from '@/components/TestimonialSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BrandSection />
      <TestimonialSection />
      <DarkSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
