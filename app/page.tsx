"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SignalDivider from "@/components/SignalDivider";

export default function Home() {
return (
  <main>
    <Navbar />
    <Hero />
    <SignalDivider />
    <About />
    <Products />
    <Footer />
  </main>
);
}
