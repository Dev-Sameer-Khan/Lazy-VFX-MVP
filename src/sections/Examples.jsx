import React from "react";

// Example data array
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
  return (
    <section
      id="examples"
      className="w-full min-h-screen max-w-7xl mx-auto flex flex-col justify-center items-start relative pt-20 max-[599px]:pt-10 max-[599px]:px-6"
    >
      <div className="w-full flex flex-col items-center mb-10">
        <h2 className="text-[2.8rem] md:text-7xl hubot-sans font-extrabold tracking-tight bg-gradient-to-br from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent drop-shadow-lg mb-6">
          Examples
        </h2>
        <p className="mb-8 text-center text-lg text-white/60 leading-tight max-w-3xl">
          Discover how easily you can add stunning, customizable particle
          effects to your React and Three.js projects with Lazy VFX. Dive into
          examples below to spark inspiration and see what's possible.
        </p>
      </div>

      {/* The sticky div must be in an ancestor with a height larger than itself and must not be under overflow:hidden/auto/scroll ancestor */}
      <div className="w-full flex items-stretch relative">

        <div className="left w-1/2 h-screen relative">
          <div className="sticky top-40 size-20 bg-red-800" style={{ position: "sticky", top: '6rem' }}>
          </div>
        </div>

        <div className="right w-1/2 flex flex-col gap-80 pt-40">
          {examples.map((ex, idx) => (
            <div key={idx} className="w-full">
              {/* Right: Example Details */}
              <div className="flex flex-col items-center justify-center p-6">
                <div
                  className={`transition-opacity duration-400 px-2 py-8 rounded-lg `}
                >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
