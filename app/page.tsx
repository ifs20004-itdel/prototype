"use client";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
return (
  <main>
    <Navbar />
    <Hero />
    <AboutSection />
    <Products />
    <Contact />
    <Footer />
  </main>
);
}
