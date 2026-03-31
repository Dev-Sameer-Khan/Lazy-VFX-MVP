import React from "react";
import Experience from "../components/3d/Experience";
import Terminal from "../components/UI/Terminal";

const Hero = () => {
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
          w-full h-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-0
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
              Lazy <span className="italic font-normal bg-gradient-to-br from-emerald-400 via-emerald-300 to-white 
                bg-clip-text text-transparent">VFX</span>
            </h1>
            <p
              className={`
                my-4 text-lg text-white/60 leading-tight max-w-[75%]
                max-[1024px]:max-w-full max-[1024px]:mx-auto max-[599px]:my-2 max-[599px]:text-base
              `}
            >
              GPU-accelerated particle systems, shaders, and post-processing for
              your React Three Fiber scenes. Built for WebGPU.
            </p>
            <div
              className={`
                flex items-center gap-2
                max-[1024px]:justify-center max-[599px]:gap-1
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
          <div className="w-full max-[1024px]:flex max-[1024px]:justify-center">
            <Terminal title={"bash"} terminal copyText={"pnpm add lazy-vfx"} />
          </div>
        </div>

        {/* Right section */}
        <div
          className={`
            md:w-1/2 w-full h-full max-[599px]:h-1/2
          `}
        >
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Hero;
