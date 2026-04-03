import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// GSAP plugin registration (safe to re-register)
gsap.registerPlugin(SplitText);

const examples = [
  {
    id: 1,
    title: "Physics & Collisions",
    author: "Procedural API",
    description:
      "Build abstract interactive worlds where energy bursts and particles bounce via physics-based interactions. Use the API to control energy, link clusters, and create CPU-isolated soft-body effects.",
    tags: ["physics", "collisions", "interactive", "procedural"],
    video: "/default.mp4"
  },
  {
    id: 2,
    title: "Flame Storm",
    author: "Shader Animation",
    description:
      "Harness particle shaders to sculpt fire and smoke. Animate dense flames and scattering embers with API tweaks for velocity, turbulence, and decay. Push color into the furnace.",
    tags: ["fire", "smoke", "shader", "animation"],
    video: "/MultiGeo.mp4"
  },
  {
    id: 3,
    title: "Ice Shard Burst",
    author: "Frozen Materials",
    description:
      "Morph dazzling ice crystals that burst and scatter — perfect for frozen spotlight effects. Control material reflectivity and fracture with per-particle attributes.",
    tags: ["ice", "frozen", "materials", "refraction"],
    video: "/customModel.mp4"
  },
  {
    id: 4,
    title: "Custom Geometry",
    author: "API + Volume",
    description:
      "Flood your scene with volumetric light tunnels and rays. Animate color, fade, and direction to generate teleport, warp, or sci-fi spotlight effects on any geometry.",
    tags: ["light", "ray", "volumetric", "visuals"],
    video: "/customGeo.mp4"
  },
];

const Examples = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const cardsRef = useRef([]);

  // GSAP animation for heading, desc, cards (on scroll into view)
  useGSAP(() => {
    // SplitText for heading and description
    const splitHeading = SplitText.create(headingRef.current, {
      type: "chars",
    });
    const splitDesc = SplitText.create(descRef.current, { type: "chars" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      })
      .fromTo(
        splitHeading.chars,
        {
          yPercent: -50,
          filter: "blur(5px)",
          opacity: 0,
        },
        {
          yPercent: 0,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.02,
          duration: 0.3,
          willChange: "transform opacity filter",
        },
      )
      .fromTo(
        splitDesc.chars,
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
        "-=0.6",
      )
      .fromTo(
        cardsRef.current,
        {
          yPercent: 40,
          filter: "blur(10px)",
          opacity: 0,
        },
        {
          yPercent: 0,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.18,
          duration: 0.6,
          willChange: "transform opacity filter",
        },
        "-=0.45",
      );
  }, []);

  return (
    <section
      id="examples"
      ref={sectionRef}
      className="w-full min-h-screen max-w-7xl mx-auto flex flex-col justify-center items-start relative pt-20 max-[599px]:pt-10 max-[599px]:px-6"
    >
      <div className="w-full flex flex-col items-center mb-10">
        <h2
          className="text-[2.8rem] md:text-7xl hubot-sans font-extrabold tracking-tight bg-gradient-to-br from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent drop-shadow-lg mb-6"
          // ref={headingRef}
        >
          Examples
        </h2>
        <p
          className="mb-8 text-center text-lg text-white/60 leading-tight max-w-3xl"
          ref={descRef}
        >
          Discover how easily you can add stunning, customizable particle
          effects to your React and Three.js projects with Lazy VFX. Dive into
          examples below to spark inspiration and see what's possible.
        </p>
      </div>

      {examples.map((ex, idx) => (
        <div
          className="w-full flex flex-col relative"
          key={ex.id}
          ref={(el) => (cardsRef.current[idx] = el)}
        >
          <div
            className={`w-full h-full flex items-center justify-between gap-20 pt-40 ${
              idx % 2 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="lefts w-1/2 h-[25rem] border border-white/20 rounded-xl">
              <video loop muted autoPlay className="w-full h-full object-cover" src={ex.video}></video>
            </div>
            <div className="rights w-1/2">
              <div className="w-full">
                {/* Right: Example Details */}
                <div className="w-full h-full flex-col items-center justify-center p-6">
                  <div className="transition-opacity duration-400 px-2 py-8 rounded-lg ">
                    <span className="mb-2 block text-xs font-mono text-emerald-400 tracking-widest">
                      0{ex.id}
                    </span>
                    <h2 className="font-bold hubot-sans text-2xl md:text-3xl text-white mb-2">
                      {ex.title}
                    </h2>
                    <div className="mb-2 text-md text-emerald-500 font-semibold italic">
                      {ex.author}
                    </div>
                    <div className="text-zinc-400 font-light mb-4 leading-relaxed">
                      {ex.description}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ex.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#191b23] text-xs jetbrains-mono text-emerald-300 px-3 py-1 rounded-md tracking-wide font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Examples;
