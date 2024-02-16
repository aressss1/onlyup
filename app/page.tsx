'use client'

import AboutSection from "@/components/about-section";
import FeaturedWork from "@/components/featured-work-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";


useEffect( () => {
  const lenis = new Lenis()

  const raf = (time: number) => {

    lenis.raf(time)

    requestAnimationFrame(raf)

  }

  requestAnimationFrame(raf)
}, [])

export default function Home() {
  return (
    <div className="h-full bg-bg customSelectColor " >
      <Navbar />
      <HeroSection />
      <Separator className="bg-[#C4C4C4]" />
      <AboutSection />
      <Separator className="bg-[#C4C4C4]" />
      <FeaturedWork />
      <Separator className="bg-[#C4C4C4]" />
      <ServicesSection />
      <Separator className="bg-[#C4C4C4]" />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
