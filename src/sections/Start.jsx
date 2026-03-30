import React from "react";
import Terminal from "../components/UI/Terminal";
import { Sparkles, View } from "@react-three/drei";

const Start = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <View>
          <Sparkles />
        </View>
      </div>
      <h1 className="relative z-10 text-[2.8rem] md:text-7xl font-extrabold tracking-tight text-center mb-6">
        <span className="bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent drop-shadow-lg">
          Start building
        </span>
        <span className="text-emerald-500 font-semibold drop-shadow ml-2 italic">
          effects
        </span>
      </h1>

      <div className="my-5 relative z-10">
        <Terminal title="bash" copyText="npm install lazy-vfx" terminal width />
      </div>

      <div className="flex gap-4 my-7 relative z-10">
        <a
          href="#features"
          className="px-7 py-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 shadow-xl text-white/60 font-semibold hover:text-white transition-colors"
        >
          Documentation
        </a>
        <a
          href="https://github.com/zielak/vfx"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 shadow-xl text-white/60 font-semibold hover:text-white transition-colors"
        >
          View on GitHub
        </a>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <span className="text-white/30">
          &copy; {new Date().getFullYear()} Lazy VFX
        </span>
        <span className="mx-2 text-white/50">|</span>
        <span className="text-white/30">
          Built for much more than a 3 liner.{" "}
          <a href="https://github.com/zielak/vfx" className="text-emerald-500">
            lazy-vfx
          </a>
        </span>
      </footer>
    </section>
  );
};

export default Start;
