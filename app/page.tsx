"use client";

import AnimatedWrapper from "./wrapper/AnimatedWrapper";
import Hero from "./components/Hero";
import Time from "./components/Time";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <AnimatedWrapper>
      <main className="overflow-x-hidden h-screen">
        <Time />
        <Hero />
        <Main />
        <Footer />
      </main>
    </AnimatedWrapper>
  );
}
