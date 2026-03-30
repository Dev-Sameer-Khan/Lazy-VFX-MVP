import React, { useState } from 'react'

// Example data array
const examples = [
  {
    id: 1,
    title: "Physics & Collisions",
    author: "JavaScript Driven",
    description:
      "Visually simulate abstract worlds. Collide with energy and allow realistic soft bounces. All caused via the API: change alpha's energy cluster and it connects them. CPU isolated.",
    tags: ["physics", "collisions", "features", "abstract"],
    // In a real app, this would be a component, canvas, or <img/>
    effect: (
      <div className="w-full h-full flex items-center justify-center">
        {/* Placeholder for Effect Visualization */}
        <div
          className="bg-black rounded-lg shadow-lg flex items-center justify-center"
          style={{
            width: '90%',
            height: '90%',
            border: '1px solid #252525',
            minHeight: 300,
          }}
        >
          <span className="text-teal-300 opacity-50 text-xl">[Effect]</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Color Dynamics",
    author: "API Demo",
    description:
      "Show off rapid color changes and fade using random velocity and lifespan control. Explore chromatic chaos and clipping.",
    tags: ["color", "dynamic", "random", "velocity"],
    effect: (
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg shadow-lg"
          style={{
            width: '90%',
            height: '90%',
            border: '1px solid #252525',
            minHeight: 300,
          }}
        >
          <span className="text-white opacity-60 text-xl">[Effect]</span>
        </div>
      </div>
    ),
  },
  // Add more examples as needed
]

const Examples = () => {


  return (
    <section
      id="examples"
      className="w-full min-h-screen max-w-360 mx-auto flex flex-col justify-center items-start relative pt-20"
      style={{ minHeight: "100vh" }}
    >
        <div className='w-full flex flex-col items-center mb-10'>
        <h2 className="text-[2.8rem] md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent drop-shadow-lg mb-6">
        Examples
      </h2>
      <p className="mb-8 text-center text-lg text-white/60 leading-tight max-w-3xl">
        Discover how easily you can add stunning, customizable particle effects to your React and Three.js projects with Lazy VFX. Dive into examples below to spark inspiration and see what's possible.
      </p>
        </div>
          {/* Left: Effect Visualization */}
          <div
            className="flex-1 w-1/2 h-[500px] flex-shrink-0 flex items-center justify-center bg-[#171717] border border-[#222] rounded-xl mr-12 shadow-2xl"
          >
          </div>
      {examples.map((ex, idx) => (
        <div key={idx} className="w-full flex items-center shrink-0 mb-20">

          {/* Right: Example Details */}
          <div className="flex-1 flex flex-col gap-8 w-1/2">
            <div
              className={`transition-opacity duration-400 px-2 py-8 rounded-lg `}

            >
              <span className="mb-2 block text-xs font-mono text-emerald-400 tracking-widest">
                0{ex.id}
              </span>
              <h2 className="font-bold text-2xl md:text-3xl text-white mb-2">
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
                    className="bg-[#191b23] text-xs text-emerald-300 px-3 py-1 rounded-md tracking-wide font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Examples