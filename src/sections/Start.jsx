import React, { useRef } from "react";
import Terminal from "../components/UI/Terminal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Start = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const btnsRef = useRef();

  useGSAP(() => {
    // Split and animate the h1 (title)
    const titleSplit = SplitText.create(titleRef.current, { type: "chars" });
    // Animate subtitle separately (the "Today" span)
    const subtitleSplit = SplitText.create(subtitleRef.current, { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
        // markers: true,
      }
    });

    // "Today" subtitle comes first for nice effect
    tl.fromTo(
      subtitleSplit.chars,
      {
        yPercent: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.03,
      }
    );

    tl.fromTo(
      titleSplit.chars,
      {
        yPercent: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.01,
        duration: 0.3,
      },
      "-=0.6"
    );

    tl.fromTo(
      btnsRef.current,
      {
        yPercent: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      "-=0.5"
    );

    tl.fromTo(
      ".start-terminal",
      {
        yPercent: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      "-=0.55"
    );

    tl.fromTo(
      ".start-footer",
      {
        yPercent: 30,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.5,
      },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen max-[599px]:px-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h1
        className="relative hubot-sans z-10 text-[2.8rem] md:text-7xl font-extrabold tracking-tight leading-tight text-center mb-6"
        ref={titleRef}
      >
        <span className="text-white drop-shadow-lg ">
          Start building
        </span>
        <span
          className="text-emerald-500 font-semibold drop-shadow ml-2 italic"
          ref={subtitleRef}
        >
          Today
        </span>
      </h1>

      <div className="my-5 relative z-10 start-terminal">
        <Terminal title="bash" copyText="npm install lazy-vfx" terminal width />
      </div>

      <div
        className="flex gap-4 my-7 relative z-10 hubot-sans"
        ref={btnsRef}
      >
        <a
          href="#features"
          className="px-7 hubot-sans py-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 shadow-xl text-white/60 font-semibold hover:text-white transition-colors"
        >
          Documentation
        </a>
        <a
          href="https://github.com/zielak/vfx"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 hubot-sans py-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 shadow-xl text-white/60 font-semibold hover:text-white transition-colors"
        >
          View on GitHub
        </a>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 flex justify-center max-[599px]:items-center max-[599px]:flex-col z-10 start-footer">
        <span className="text-white/30">
          &copy; {new Date().getFullYear()} Lazy VFX
        </span>
        <span className="mx-2 text-white/50 max-[599px]:hidden">|</span>
        <span className="text-white/30">
          Built for much more than a 3 liner.{" "}
          <a href="https://github.com/zielak/vfx" className="text-emerald-500 hubot-sans">
            lazy-vfx
          </a>
        </span>
      </footer>
    </section>
  );
};

export default Start;
