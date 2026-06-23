// import Image from "next/image";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CtaStrip from "@/components/CtaStrip";
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
    <CtaStrip />
    <Footer />
  </main>
);
}
