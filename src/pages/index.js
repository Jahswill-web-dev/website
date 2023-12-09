import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav/Nav";
import Image from "next/image";
import SoftSkills from "@/Components/SoftSkills";
import Portfolio from "@/Components/Portfolio";
import Tech from "@/Components/Tech";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">

      <div className="lg:max-w-7xl px-4 mx-auto">
        <Nav />
        <Hero />
        <About />
        <SoftSkills />
        <Portfolio />
        <Tech />
      </div>

      <Contact />
      <Footer/>
    </main>
  );
}
