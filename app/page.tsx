import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesDetailed from "@/components/ServicesDetailed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <ServicesDetailed />
      <Footer />
    </main>
  );
}
