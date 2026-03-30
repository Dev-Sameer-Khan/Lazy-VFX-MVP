import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { MoveUpRight, MoveRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [hover,setHover] = useState(false)

  const navRef = useRef()

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll Down – Hide Navbar
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Scroll Up – Show Navbar
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navRef} className="w-full backdrop-blur-sm py-4 fixed top-0 left-0 z-50 text-white">
      <nav className="max-w-360 mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold">Lazy VFX</h1>
      <div className="links flex items-center gap-8">
        <Link to={{pathname: "/"}} className="hover:text-emerald-400 font-medium transition-colors duration-300">Home</Link>
        <Link to={{pathname: "/docs"}} className="hover:text-emerald-400 font-medium transition-colors duration-300">Docs</Link>
        <a href="#features" className="hover:text-emerald-400 font-medium transition-colors duration-300">Features</a>
        <a href="#examples" className="hover:text-emerald-400 font-medium transition-colors duration-300">Examples</a>
      </div>
      <a
        href="https://www.npmjs.com/package/lazy-vfx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white py-2 px-4 rounded transition flex items-center gap-2"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        Try Now 
        {hover ? <MoveRight size={16} /> : <MoveUpRight size={16} />}
      </a>
      </nav>
    </header>
  );
};

export default Navbar;
