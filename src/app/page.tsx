import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import ToolsAndSkills from "@/components/section/ToolsAndSkills";
import WhatIDo from "@/components/section/WhatIDo";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ToolsAndSkills />
      <WhatIDo />
      <div className="py-[100vh]"></div>
    </Layout>
  );
}
