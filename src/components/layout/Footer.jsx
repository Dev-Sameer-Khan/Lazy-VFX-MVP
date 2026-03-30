import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const footerLinks = [
  { text: "Home", href: "/" },
  { text: "Examples", href: "/examples" },
  { text: "Documentation", href: "/documentation" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Footer = () => {
  const linksRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      ".beta",
      {
        yPercent: -50,
      },
      {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".papas",
          start: "top 100%",
          end: "bottom top",
          scrub: 0.3,
        },
      }
    );
  }, []);

  useGSAP(() => {
    let text1 = SplitText.create(".fText1", { type: "chars" });
    let text2 = SplitText.create(".fText2", { type: "chars" });
    let text3 = SplitText.create(".fText3", { type: "chars" });
    let text4 = SplitText.create(".fText4", { type: "chars" });
    let links = SplitText.create(".footer-links li", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "top top",
        scrub: true,
      },
      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      text1.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.fromTo(
      text2.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.fromTo(
      text3.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.fromTo(
      text4.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.from(
      links.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
        stagger: 0.03,
      },
      "a"
    );
  });

  useEffect(() => {
    gsap.set(linksRef.current, { opacity: 1 });
  }, []);

  const handleMouseEnter = (index) => {
    linksRef.current.forEach((el, i) => {
      if (i !== index) {
        gsap.to(el, { opacity: 0.3, duration: 0.3, ease: "none" });
      } else {
        gsap.to(el, { opacity: 1, duration: 0.3, ease: "none" });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to(linksRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "none",
    });
  };

  return (
    <footer className="w-full footer papas h-screen overflow-hidden relative z-2">
      <div className="bg beta w-full h-full will-change-transform bg-[#070707] overflow-hidden">
        <div className="decor relative w-full h-full overflow-hidden">
          <div className="circle absolute -top-[40%] -left-[40%] w-[80vw] h-[80vw] rounded-full bg-[#2EE061] opacity-20 blur-3xl"></div>
          <div className="circle absolute -bottom-[120%] -right-[15%] w-[85vw] h-[85vw] rounded-full bg-[#2EE061] opacity-20 blur-3xl"></div>
        </div>
        <div className="ovelay w-full h-full absolute top-0 left-0 p-40 max-[599px]:p-4 flex items-center justify-center gap-40 max-[599px]:flex-col-reverse max-[599px]:gap-6">
          <div className="left w-1/2 max-[599px]:w-full h-full px-20 max-[599px]:px-6 pt-20 max-[599px]:pt-0">
            <ul className="text-[2.6vw] max-[599px]:text-[6vw] footer-links font-bold text-[#dedede] leading-none flex max-[599px]:justify-center flex-col gap-10 max-[599px]:gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={link.text}
                  className="links will-change-auto w-fit"
                  href={link.href}
                  ref={el => (linksRef.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <li className="list-none">{link.text}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="right w-1/2 max-[599px]:w-full h-full text-[#dedede] pt-20 max-[599px]:pt-20 max-[599px]:px-4">
            <div className="head">
              <div className="logo flex items-center gap-2">
                <h1 className="text-[3vw] max-[599px]:text-[8vw] font-bold fText1 tracking-tight">
                  LAZY VFX
                </h1>
              </div>
              <p className="my-10 max-[599px]:my-4 text-[1.4vw] max-[599px]:text-[4vw] font-medium leading-tight fText2">
                AI-powered VFX solutions for next-gen creativity. <br />
                Accelerate your production with Lazy VFX.
              </p>
            </div>
            <div className="links-copyright text-[.95vw] max-[599px]:text-[2.9vw] fText3">
              <p>
                &copy; {new Date().getFullYear()} Lazy VFX. All rights reserved.
              </p>
              <ul className="fText4 flex flex-col mt-2 gap-1">
                <a href="/terms-conditions">
                  <li className="cursor-pointer hover:opacity-50 transition-opacity duration-300">
                    TERMS & CONDITIONS
                  </li>
                </a>
                <a href="/privacy-policy">
                  <li className="cursor-pointer hover:opacity-50 transition-opacity duration-300">
                    PRIVACY POLICY
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;