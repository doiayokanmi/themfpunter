"use client";

import AnimatedWrapper from "./wrapper/AnimatedWrapper";
import Hero from "./components/Hero";
import Time from "./components/Time";

export default function Home() {
  
  return (
    <AnimatedWrapper>
      <main className="overflow-x-hidden">
        <Time />
        <Hero />
      </main>
    </AnimatedWrapper>
  );
}
