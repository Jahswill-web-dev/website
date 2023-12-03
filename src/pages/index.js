import Hero from '@/Components/Hero'
import Nav from '@/Components/Nav/Nav'
import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (  
    <main className="lg:max-w-7xl px-4">
        <Nav/>
        <Hero/>
    </main>
  )
}
