import React from "react";
import Experience from "../components/3d/Experience";
import Terminal from "../components/UI/Terminal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    const title = SplitText.create(".title", { type: "chars" });
    const title1 = SplitText.create(".title1", { type: "chars" });

    tl.fromTo(
      title1.chars,
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
        willChange: "transform opacity filter",
      },
      "a",
    );

    tl.fromTo(
      title.chars,
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
        willChange: "transform opacity filter",
      },
      "-=0.7",
    );

    tl.fromTo(
      ".btns",
      {
        yPercent: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.05,
        willChange: "transform opacity filter",
      },
      "-=0.5",
    );

    tl.fromTo(
      ".terminal",
      {
        yPercent: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.05,
        willChange: "transform opacity filter",
      },
      "-=0.3",
    );

    tl.fromTo(
      ".right",
      {
        xPercent: 100,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        xPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        willChange: "transform opacity filter",
        // stagger : 0.01,
      },
      ">-0.5",
    );
  }, []);

  return (
    <section
      id="home"
      className={`
        w-full max-w-360 h-screen mx-auto flex items-center justify-center
        max-[1024px]:pt-20 max-[599px]:pt-0
      `}
      style={{ zIndex: 10 }}
    >
      <div
        className={`
          w-full h-full flex flex-col-reverse md:flex-row items-center max-[599px]:justify-center max-[599px]:translate-y-40 justify-start gap-12 md:gap-0
          max-[1024px]:flex-col-reverse max-[1024px]:gap-6 max-[599px]:gap-0 max-[599px]:px-6
        `}
      >
        {/* Left section */}
        <div
          className={`
            md:w-1/2 w-full flex flex-col justify-center items-start gap-6
            max-[1024px]:w-full max-[1024px]:items-center max-[599px]:gap-4
          `}
        >
          <div className="w-full max-[1024px]:text-center">
            <h1
              className={`
                text-[2.8rem] md:text-7xl font-extrabold tracking-tight 
                 drop-shadow-lg
                max-[1024px]:text-5xl max-[599px]:text-[2rem]
                hubot-sans 
              `}
            >
              <span className="title1">Lazy</span>{" "}
              <span
                className="italic font-normal bg-gradient-to-br from-emerald-400 via-emerald-300 to-white 
                bg-clip-text text-transparent"
              >
                VFX
              </span>
            </h1>

            <p
              className={`
                my-4 text-lg text-white/60 leading-tight max-w-[75%] title
                max-[1024px]:max-w-full max-[1024px]:mx-auto max-[599px]:my-2 max-[599px]:text-base
              `}
            >
              GPU-accelerated particle systems, shaders, and post-processing for
              your React Three Fiber scenes. Built for WebGPU.
            </p>
            <div
              className={`
                flex items-center gap-2
                max-[1024px]:justify-center max-[599px]:gap-1 btns
              `}
            >
              <span className="px-4 py-1 rounded-sm border border-white/30 text-white/80 font-semibold text-sm shadow-sm max-[599px]:px-2 max-[599px]:text-xs hubot-sans">
                WebGPU
              </span>
              <span className="px-4 py-1 rounded-sm border border-white/30 text-white/80 font-semibold text-sm shadow-sm max-[599px]:px-2 max-[599px]:text-xs hubot-sans">
                TSL
              </span>
              <span className="px-4 py-1 rounded-sm border border-white/30 text-white/80 font-semibold text-sm shadow-sm max-[599px]:px-2 max-[599px]:text-xs hubot-sans">
                Post-processing
              </span>
            </div>
          </div>
          <div className="w-full max-[1024px]:flex max-[1024px]:justify-center terminal z-10">
            <Terminal title={"bash"} terminal copyText={"pnpm add lazy-vfx"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
