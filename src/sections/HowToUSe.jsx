import React, { useState } from "react";
import Terminal from "../components/UI/Terminal";
import { Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";

const HowToUSe = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`import { VFXParticles, VFXEmitter } from "lazy-vfx";

function Experience() {
  return (
    <>
      {/* Step 1: Define your particle system */}
      <VFXParticles
        name="particles"
        settings={{
          nbParticles: 100000,
          gravity: [0, -9.8, 0],
          fadeSize: [0, 0],
          fadeAlpha: [0, 0],
          renderMode: "billboard",
          intensity: 3,
          appearance: AppearanceMode.Circular, // Import if customizing
          easeFunction: "easeLinear",
        }}
      />

      {/* Step 2: Define your emitter */}
      <VFXEmitter
        debug
        emitter="particles"
        settings={{
          loop: true,
          duration: 1,
          nbParticles: 100,
          spawnMode: "time",
          delay: 0,
          particlesLifetime: [0.1, 1],
          startPositionMin: [-0.1, -0.1, -0.1],
          startPositionMax: [0.1, 0.1, 0.1],
          startRotationMin: [0, 0, 0],
          startRotationMax: [0, 0, 0],
          rotationSpeedMin: [0, 0, 0],
          rotationSpeedMax: [0, 0, 0],
          directionMin: [-1, 0, -1],
          directionMax: [1, 1, 1],
          size: [0.01, 0.25],
          speed: [1, 12],
          colorStart: ["white", "skyblue"],
          colorEnd: ["white", "pink"],
          useLocalDirection: true,
        }}
      />
    </>
  );
}`);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="use"
      className={`
        w-full min-h-screen flex items-center flex-col
        max-[1024px]:px-6
        max-[599px]:pt-10 max-[599px]:px-6
      `}
    >
      <h2
        className={`
          text-[2.8rem] md:text-7xl font-extrabold tracking-tight 
          bg-gradient-to-br from-emerald-400 via-emerald-300 to-white 
          bg-clip-text text-transparent drop-shadow-lg mb-6
          max-[1024px]:text-5xl
          max-[599px]:text-3xl max-[599px]:mb-4
          hubot-sans
        `}
      >
        How to Use VFX
      </h2>
      <p
        className={`
          mb-8 text-center text-lg text-white/60 leading-tight max-w-3xl
          max-[1024px]:text-base max-[1024px]:mb-6 max-[1024px]:max-w-xl
          max-[599px]:text-sm max-[599px]:mb-4 max-[599px]:px-2
        `}
      >
        Lazy VFX makes it easy to add performant, flexible particle effects to
        your React/Three.js projects. Just follow these steps to add your first
        effect:
      </p>

      <ol
        className={`
          space-y-8 text-base leading-relaxed max-w-3xl
          max-[1024px]:text-sm max-[1024px]:max-w-xl max-[1024px]:space-y-6
          max-[599px]:text-xs max-[599px]:max-w-full max-[599px]:space-y-3
        `}
      >
        <li>
          <b
            className={`
              max-[599px]:text-base
            `}
          >
            Set up your particle system and emitter:
          </b>
          <div
            className={`
              relative w-full mt-2
              max-[599px]:mt-1
            `}
          >
            <div
              className={`
                relative z-10 backdrop-blur-sm border border-white/20 
                rounded-xl overflow-hidden shadow-2xl
                max-[1024px]:rounded-lg 
                max-[599px]:rounded-md max-[599px]:shadow-xl
              `}
            >
              <div
                className={`
                  flex items-center px-4 py-3 bg-white/5 border-b border-white/10
                  max-[1024px]:px-3 max-[1024px]:py-2
                  max-[599px]:px-2 max-[599px]:py-1
                `}
              >
                <div className="flex gap-2 max-[1024px]:gap-1 max-[599px]:gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500 max-[599px]:w-2 max-[599px]:h-2" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 max-[599px]:w-2 max-[599px]:h-2" />
                  <div className="w-3 h-3 rounded-full bg-green-500 max-[599px]:w-2 max-[599px]:h-2" />
                </div>
                <div className="mx-auto text-xs font-mono text-white/40 max-[599px]:text-[10px]">scene.jsx</div>
              </div>
              <button
                onClick={handleCopy}
                className={`
                  p-2 hover:bg-white/10 rounded-md transition-colors absolute right-2 top-12
                  max-[1024px]:p-1 max-[1024px]:right-1 max-[1024px]:top-11
                  max-[599px]:p-1 max-[599px]:right-1 max-[599px]:top-9
                `}
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <Check size={18} className="text-green-400 max-[599px]:w-4 max-[599px]:h-4" />
                ) : (
                  <Copy size={18} className="text-white/60 max-[599px]:w-4 max-[599px]:h-4" />
                )}
              </button>
              <div className="p-0 md:p-2 max-[599px]:p-1 jetbrains-mono">
                <pre
                  className={`
                    overflow-x-auto text-xs md:text-sm font-mono text-white m-0 rounded-b-xl leading-tight whitespace-pre
                    max-[1024px]:text-xs max-[1024px]:rounded-b-lg
                    max-[599px]:rounded-b-md max-[599px]:text-[11px] max-[599px]:p-1
                  `}
                >{`import { VFXParticles, VFXEmitter } from "lazy-vfx";

function Experience() {
  return (
    <>
      {/* Step 1: Define your particle system */}
      <VFXParticles
        name="particles"
        settings={{
          nbParticles: 100000,
          gravity: [0, -9.8, 0],
          fadeSize: [0, 0],
          fadeAlpha: [0, 0],
          renderMode: "billboard",
          intensity: 3,
          appearance: AppearanceMode.Circular, // Import if customizing
          easeFunction: "easeLinear",
        }}
      />

      {/* Step 2: Define your emitter */}
      <VFXEmitter
        debug
        emitter="particles"
        settings={{
          loop: true,
          duration: 1,
          nbParticles: 100,
          spawnMode: "time",
          delay: 0,
          particlesLifetime: [0.1, 1],
          startPositionMin: [-0.1, -0.1, -0.1],
          startPositionMax: [0.1, 0.1, 0.1],
          startRotationMin: [0, 0, 0],
          startRotationMax: [0, 0, 0],
          rotationSpeedMin: [0, 0, 0],
          rotationSpeedMax: [0, 0, 0],
          directionMin: [-1, 0, -1],
          directionMax: [1, 1, 1],
          size: [0.01, 0.25],
          speed: [1, 12],
          colorStart: ["white", "skyblue"],
          colorEnd: ["white", "pink"],
          useLocalDirection: true,
        }}
      />
    </>
  );
}
`}</pre>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <p
        className={`
          mt-10 text-center text-lg text-white/60 leading-tight
          max-[1024px]:mt-8 max-[1024px]:text-base
          max-[599px]:mt-4 max-[599px]:text-sm max-[599px]:px-1
        `}
      >
        That&apos;s it! Tweak the settings above to customize your effect. For
        deeper integration &amp; advanced usage, see the&nbsp;
        <Link
          to={{ pathname: "/docs" }}
          className="text-emerald-400 underline hover:opacity-80 hubot-sans relative z-20"
        >
          full documentation
        </Link>
        .
      </p>
    </section>
  );
};

export default HowToUSe;
