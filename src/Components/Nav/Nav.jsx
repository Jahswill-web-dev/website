import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import logo from "../../../public/images/JDev.png";
import Link from "next/link";
import { useState } from "react";

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
        console.log(isMobileMenuOpen)
    }
  return (
    <nav className="pt-3">
      <div className="flex justify-between items-center ">
        {/* logo  */}
        <div className="flex justify-between items-center relative z-10">
          <Image src={logo} width={70} height={70} className="w-[5rem]" />
        </div>
        {/* Navigation links desktop */}
        <div className="hidden">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Tech Stack</Link>
        </div>
        {/* hamburger */}
        <div className="md:hidden relative z-10" onClick={toggleMobileMenu}>
          <Hamburger color="#3B88ED" />
        </div>
        {/* Mobile navlist */}
        <div className={`md:hidden ${isMobileMenuOpen ?'':'hidden'} absolute text-primary text-3xl flex flex-col justify-center items-center gap-3 top-0 left-0 right-0 bottom-0 backdrop-blur-sm`}>
          <Link href="#" className="">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Tech Stack</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
