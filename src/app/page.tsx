import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import ToolsAndSkills from "@/components/section/ToolsAndSkills";
import WhatIDo from "@/components/section/WhatIDo";
import SelectProjects from "@/components/section/SelectProjects";
import Experience from "@/components/section/Experience";

export default function Home() {
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
