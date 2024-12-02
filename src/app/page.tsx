"use client"
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import ToolsAndSkills from "@/components/section/ToolsAndSkills";
import WhatIDo from "@/components/section/WhatIDo";
import SelectProjects from "@/components/section/SelectProjects";
import Experience from "@/components/section/Experience";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <ToolsAndSkills />
      <WhatIDo />
      <Experience />
      <SelectProjects />
    </Layout>
  );
}