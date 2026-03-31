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
    author: "JavaScript Driven",
    description:
      "Visually simulate abstract worlds. Collide with energy and allow realistic soft bounces. All caused via the API: change alpha's energy cluster and it connects them. CPU isolated.",
    tags: ["physics", "collisions", "features", "abstract"],
  },
  {
    id: 2,
    title: "Color Dynamics",
    author: "API Demo",
    description:
      "Show off rapid color changes and fade using random velocity and lifespan control. Explore chromatic chaos and clipping.",
    tags: ["color", "dynamic", "random", "velocity"],
  },
  {
    id: 3,
    title: "Color Dynamics",
    author: "API Demo",
    description:
      "Show off rapid color changes and fade using random velocity and lifespan control. Explore chromatic chaos and clipping.",
    tags: ["color", "dynamic", "random", "velocity"],
  },
  {
    id: 4,
    title: "Color Dynamics",
    author: "API Demo",
    description:
      "Show off rapid color changes and fade using random velocity and lifespan control. Explore chromatic chaos and clipping.",
    tags: ["color", "dynamic", "random", "velocity"],
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
    const splitHeading = SplitText.create(headingRef.current, { type: "chars" });
    const splitDesc = SplitText.create(descRef.current, { type: "chars" });

    gsap.timeline({
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
        }
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
        },
        "-=0.6"
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
        },
        "-=0.45"
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
          ref={el => (cardsRef.current[idx] = el)}
        >
          <div
            className={`w-full h-full flex items-center justify-between gap-20 pt-40 ${
              idx % 2 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="lefts w-1/2 h-[25rem] border border-white/20 rounded-xl"></div>
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
