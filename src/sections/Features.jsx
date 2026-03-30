import React from "react";

const features = [
  {
    emoji: "🚀",
    title: "Easy to Use",
    description: "Create complex particle effects with minimal code",
  },
  {
    emoji: "🎨",
    title: "Flexible Customization",
    description: "Extensive settings for fine-tuning visual effects",
  },
  {
    emoji: "⚡",
    title: "Performance Optimized",
    description:
      "Uses instanced rendering for efficient particle systems",
  },
  {
    emoji: "🔧",
    title: "TypeScript Support",
    description:
      "Full type definitions for better development experience",
  },
  {
    emoji: "🎮",
    title: "Debug Mode",
    description: "Built-in Leva controls for real-time tweaking",
  },
  {
    emoji: "📦",
    title: "Custom Geometry",
    description: "Support for any Three.js geometry as particles",
  },
  {
    emoji: "🎯",
    title: "Programmatic Control",
    description: "Full control through hooks and refs",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full min-h-screen max-w-7xl mx-auto px-4 py-40 flex flex-col items-center"
    >
     <h2 className="text-[2.8rem] md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent drop-shadow-lg mb-6">
        Features
      </h2>
      <p className="mb-8 text-center text-lg text-white/60 leading-tight max-w-3xl">
        Effortlessly integrate high-performance, customizable particle effects into your React and Three.js applications with Lazy VFX. Get started quickly and unlock a new level of visual creativity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 shadow-xl flex flex-col gap-2"
          >
            <div className="text-2xl mb-2">{feature.emoji}</div>
            <div className="font-semibold text-lg text-white mb-1 drop-shadow">
              {feature.title}
            </div>
            <div className="text-white/70 text-base font-normal">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;