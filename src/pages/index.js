import About from '@/Components/About'
import Hero from '@/Components/Hero'
import Nav from '@/Components/Nav/Nav'
import Image from 'next/image';
import SoftSkills from '@/Components/SoftSkills';
import Portfolio from '@/Components/Portfolio';

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (  
    <main className="lg:max-w-7xl px-4">
        <Nav/>
        <Hero/>
        <About/>
        <SoftSkills/>
        <Portfolio/>
    </main>
  )
}
