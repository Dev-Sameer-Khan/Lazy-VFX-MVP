import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MoveUpRight, MoveRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false); // for mobile menu
  const navRef = useRef();
  const location = useLocation();

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

  // Determine if we are on /docs or /demo
  const pathname = location.pathname;
  const minimalNavbar = pathname === "/docs" || pathname === "/demo";

  // Responsive nav links
  const navLinks = minimalNavbar
    ? [
        { to: { pathname: "/" }, label: "Home", isLink: true },
        { to: { pathname: "/docs" }, label: "Docs", isLink: true },
      ]
    : [
        { to: { pathname: "/" }, label: "Home", isLink: true },
        { to: { pathname: "/docs" }, label: "Docs", isLink: true },
        { href: "#features", label: "Features", isLink: false },
        { href: "#examples", label: "Examples", isLink: false }
      ];

      const logoRef = useRef(null);

      useGSAP(() => {

        const tl = gsap.timeline()
      
        tl.fromTo(
          ".logo",
          {
            yPercent: -50,
            filter : "blur(5px)",
            opacity : 0,
          },
          {
            yPercent: 0,
            filter : "blur(0px)",
            opacity : 1,
          }
        );

        tl.fromTo(
          ".link",
          {
            yPercent: -50,
            filter : "blur(5px)",
            opacity : 0,
          },
          {
            yPercent: 0,
            filter : "blur(0px)",
            opacity :1,
            stagger: 0.03,
          },"-=0.3"
        );


        tl.fromTo(
          ".btn",
          {
            yPercent: -50,
            filter : "blur(5px)",
            opacity : 0,
          },
          {
            yPercent: 0,
            filter : "blur(0px)",
            opacity : 1,
            stagger: 0.03,
          },"-=0.7"
        );

        tl.fromTo(
          ".menu",
          {
            yPercent: -50,
            filter : "blur(5px)",
            opacity : 0,
          },
          {
            yPercent: 0,
            filter : "blur(0px)",
            opacity : 1,
            stagger: 0.03,
          },"-=0.7"
        );

      }, []);


  return (
    <header
      ref={navRef}
      className={`
        w-full backdrop-blur-sm py-4 fixed top-0 left-0 z-50 text-white
        px-4
        max-[599px]:px-6
        max-[599px]:py-3
      `}
    >
      <nav
        className={`
          max-w-360 mx-auto flex items-center justify-between
          max-[1024px]:max-w-5xl
          max-[599px]:max-w-full max-[599px]:px-0
          hubot-sans
        `}
      >
        <div className="logo">
        <Link
        ref={logoRef}
          to={{ pathname: "/" }}
          className={`
            text-2xl font-bold
            max-[599px]:text-lg
            hubot-sans 
          `}
        >
          <span></span>Lazy <span className="bg-gradient-to-br from-emerald-400 via-emerald-300 to-white 
                bg-clip-text text-transparent italic font-normal">VFX</span>
        </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          aria-label="Menu"
          className={`
            flex-col justify-center items-center hidden 
            max-[599px]:flex ml-auto z-50 menu
          `}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block w-6 h-0.5 bg-white my-0.5 rounded transition-transform${open ? " rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-0.5 rounded transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-0.5 rounded transition-transform${open ? " -rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
        {/* Desktop/tablet links */}
        <div
          className={`
            links flex items-center gap-8
            max-[1024px]:gap-6
            max-[599px]:hidden
          `}
        >
          {navLinks.map((item) =>
            item.isLink ? (
              <Link
                key={item.label}
                to={item.to}
                className="relative font-medium transition-colors duration-300 hover:text-emerald-400 group link"
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-emerald-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  aria-hidden="true"
                ></span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="relative font-medium transition-colors duration-300 hover:text-emerald-400 group link"
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-emerald-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  aria-hidden="true"
                ></span>
              </a>
            )
          )}
        </div>
        {/* Desktop/tablet Try Now */}

          <Link
            to={{ pathname: "/demo" }}
            className={`
              text-white rounded transition flex items-center gap-2 group relative
              ml-8
              max-[1024px]:ml-4
              max-[599px]:hidden
              font-medium italic
              btn
            `}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
          >
            <span className="bg-gradient-to-br from-emerald-400 via-emerald-300 to-white 
                bg-clip-text text-transparent">Try Now</span>
            {hover ? <MoveRight size={16} /> : <MoveUpRight size={16}  />}
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-emerald-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              aria-hidden="true"
            ></span>
          </Link>

        {/* Mobile menu */}
        <div
          className={`
            fixed top-0 left-0 w-full h-screen bg-black/90 z-40
            flex flex-col items-center justify-center
            gap-10
            transition-all duration-300
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            max-[599px]:flex
            max-[599px]:block
            max-[599px]:py-10
            max-[599px]:px-10
            max-[600px]:px-4
            max-[599px]:text-lg
            hidden
            max-[599px]:block
          `}
        >
          {navLinks.map((item) =>
            item.isLink ? (
              <Link
                key={item.label}
                to={item.to}
                className="font-semibold text-emerald-200 hover:text-emerald-400 text-xl pb-1 block"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-semibold text-emerald-200 hover:text-emerald-400 text-xl pb-1 block"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
            <Link
              to={{ pathname: "/demo" }}
              className={`
                text-white border border-emerald-400 rounded px-5 py-2 transition flex items-center gap-2 group relative font-semibold mt-4
                justify-center 
                w-full 
                max-w-xs
              `}
              onPointerEnter={() => setHover(true)}
              onPointerLeave={() => setHover(false)}
              onClick={() => setOpen(false)}
            >
              Try Now
              {hover ? <MoveRight size={16} /> : <MoveUpRight size={16} />}
            </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;