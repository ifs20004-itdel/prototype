"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceSection";
import WhatsAppButton from "@/components/WhatsappButton";
import Partner from "@/components/Partner";

export default function Home() {
return (
  <main>
    <Navbar />
    <Hero />
    <AboutSection />
    <ServicesSection />
    <Partner />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </main>
);
}
