import React from "react";
import Experience from "../components/3d/Experience";
import Terminal from "../components/UI/Terminal";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full max-w-360 h-screen mx-auto flex items-center justify-center"
      style={{
        zIndex: 10,
      }}
    >
      <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0">
        {/* Left section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start gap-6 z-10">
          <div>
            <h1 className="text-[2.8rem] md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent drop-shadow-lg">
              LAZY VFX
            </h1>
            <p className="my-4 text-lg text-white/60 leading-tight max-w-[75%]">
              GPU-accelerated particle systems, shaders, and post-processing for
              your React Three Fiber scenes. Built for WebGPU.
            </p>
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-sm border border-white/30 text-white/80 font-semibold text-sm shadow-sm">
                WebGPU
              </span>
              <span className="px-4 py-1 rounded-sm border border-white/30 text-white/80 font-semibold text-sm shadow-sm">
                TSL
              </span>
              <span className="px-4 py-1 rounded-sm border border-white/30 text-white/80 font-semibold text-sm shadow-sm">
                Post-processing
              </span>
            </div>
          </div>
          <Terminal title={"bash"} terminal copyText={"pnpm add lazy-vfx"} />
        </div>

        {/* Right section */}
        <div className="md:w-1/2 w-full h-[380px] md:h-[80vh] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Optional background visual effect */}
            <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-radial from-emerald-400/30 via-cyan-400/10 to-transparent blur-3xl opacity-75" />
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
