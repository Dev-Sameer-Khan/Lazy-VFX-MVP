import React from "react";
import Navbar from "../components/layout/Navbar";
import BG from "../components/layout/BG";
import Cursor from "../components/layout/Cursor";

const anchorLink = (href, label) => (
  <a
    href={href}
    className="text-emerald-400 underline hover:text-emerald-300 transition-colors mx-1 hubot-sans"
    rel="noopener noreferrer"
    target={href.startsWith("http") ? "_blank" : undefined}
  >
    {label}
  </a>
);

const Docs = () => (
    <>
    <Navbar/>
  <section className="w-full overflow-hidden bg-black text-white/90 leading-relaxed tracking-normal">
    {/* <Cursor/> */}
    <BG/>
    <div className="max-w-360 mx-auto relative pt-40 max-[599px]:px-6 max-[599px]:pt-16">
    <h1 className="text-[2.4rem] md:text-5xl font-extrabold  mb-2 hubot-sans">
      ☄️ Lazy <span className="bg-gradient-to-br from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent font-normal italic">VFX</span>
    </h1>
    <p className="italic mb-2 text-white/70">
      Effortless high-end visual effects for the modern web, built for React &amp; Three.js
    </p>
    <p className="mb-7">
      Lazy VFX is a minimal, shader-driven VFX engine designed for modern web apps using React and Three.js. It abstracts away all the math and plumbing for emitters, GPU-accelerated particles, and real-time shaders, so you can stay focused on building cinematic, interactive experiences.
    </p>
    <div className="mb-6 flex flex-wrap gap-3 hubot-sans">
      {anchorLink("/demo", "Live demo")}
      <span className="text-white/30">-</span>
      {anchorLink("#", "Fireworks demo")}
      <span className="text-white/30">-</span>
      {anchorLink("#", "Wizard Game demo")}
    </div>
    <hr className="border-white/10 mb-8" />

    <h2 className="text-2xl font-bold mb-4 hubot-sans" id="features">
      ✨ Features
    </h2>
    <ul className="list-disc pl-6 mb-10 space-y-2 text-white/80">
      <li>
        <b className="font-semibold text-white">Modular Emitters</b> &mdash; Create and control particle sources with flexible settings using <code className="bg-black/30 px-1 rounded">{"<VFXEmitter>"}</code>.
      </li>
      <li>
        <b className="font-semibold text-white">Custom GLSL Shaders</b> &mdash; GPU-accelerated with built-in vertex &amp; fragment shaders, easily extensible for custom magic.
      </li>
      <li>
        <b className="font-semibold text-white">Centralized State</b> &mdash; Driven by a single VFXStore for consistent, live-reloadable scene effects and controls.
      </li>
      <li>
        <b className="font-semibold text-white">Fast Tooling</b> &mdash; Zero-config Vite setup, instant HMR, rapid production deployments.
      </li>
      <li>
        <b className="font-semibold text-white">Leva Controls</b> &mdash; Out-of-the-box UI for tuning and exporting effects.
      </li>
    </ul>
    <hr className="border-white/10 mb-8" />

    <h2 className="text-2xl font-bold mb-4 hubot-sans" id="install">
      🚀 Quick Install
    </h2>
    <p className="mb-3">Use your favorite package manager:</p>
    <pre className="bg-[#181c1b] text-emerald-100 text-sm rounded-md py-4 px-4 overflow-x-auto mb-10 jetbrains-mono">
      <code>
        {[
          "# With pnpm",
          "pnpm add lazy-vfx",
          "",
          "# Or npm",
          "npm install lazy-vfx",
          "",
          "# Or yarn",
          "yarn add lazy-vfx"
        ].join("\n")}
      </code>
    </pre>
    <hr className="border-white/10 mb-8" />

    <h2 className="text-2xl font-bold mb-4 hubot-sans" id="usage">
      🛠️ Usage Example
    </h2>
    <p className="mb-2">
      <b>Lazy VFX uses a two-component system:</b>
    </p>
    <ul className="list-disc pl-6 mb-2 text-white/80">
      <li>
        <b className="font-semibold text-white">VFXParticles:</b> Defines the particle system and its rendering properties
      </li>
      <li>
        <b className="font-semibold text-white">VFXEmitter:</b> Controls how and when particles are emitted into the scene
      </li>
    </ul>
    <p className="mb-3 ">
      Add cinematic particles in seconds to any{" "}
      {anchorLink("https://docs.pmnd.rs/react-three-fiber", "React Three Fiber")}
      {" "}scene:
    </p>
    <pre className="bg-[#181c1b] text-emerald-100 text-sm rounded-md py-4 px-4 overflow-x-auto mb-8 jetbrains-mono">
      <code>
{`import { VFXParticals, VFXEmitter } from 'lazy-vfx';

// Also import your alphaMap or use a texture

function Experience() {
  return (
    <>
      {/* Step 1: Define your particle system */}
      <VFXParticles
        name="particles" // A unique identifier for this particle system
        settings={{
          nbParticles: 100000, // Maximum number of particles to allocate
          gravity: [0, -9.8, 0], // Apply gravity (x, y, z)
          fadeSize: [0, 0], // Size fade in/out settings
          fadeAlpha: [0, 0], // Opacity fade in/out settings
          renderMode: "billboard", // "billboard" or "mesh" or "stretchBillboard"
          intensity: 3, // Brightness multiplier
          appearance: AppearanceMode.Circular, // Define the default appearance to be plane (default) or circular
          easeFunction: "easeLinear", // add easing to the particle animations
        }}
      />
      {/* Step 2: Define your emitter */}
      <VFXEmitter
        debug // Show debug visualization
        emitter="particles" // Target the particle system by name
        settings={{
          loop: true, // Continuously emit particles (only if \`spawnMode\` is 'time')
          duration: 1, // Emission cycle duration in seconds
          nbParticles: 100, // Number of particles to emit per cycle
          spawnMode: "time", // Emission mode: 'time' or 'burst'
          delay: 0, // Time delay before starting emission
          // Particle lifetime range [min, max]
          particlesLifetime: [0.1, 1],
          // Position range (min/max)
          startPositionMin: [-0.1, -0.1, -0.1],
          startPositionMax: [0.1, 0.1, 0.1],
          // Rotation range (min/max)
          startRotationMin: [0, 0, 0],
          startRotationMax: [0, 0, 0],
          // Rotation speed range (min/max)
          rotationSpeedMin: [0, 0, 0],
          rotationSpeedMax: [0, 0, 0],
          // Direction range (min/max)
          directionMin: [-1, 0, -1],
          directionMax: [1, 1, 1],
          // Particle size range [min, max]
          size: [0.01, 0.25],
          // Particle speed range [min, max]
          speed: [1, 12],
          // Color at start - an array of strings for random selection
          colorStart: ["white", "skyblue"],
          // Color at end - an array of strings for random selection
          colorEnd: ["white", "pink"],
          // When true, the emitter will emit particles using its local axes (transformed by its world rotation)
          useLocalDirection: true,
        }}
      />
    </>
  );
}
`}
      </code>
    </pre>
    <hr className="border-white/10 mb-8" />

    <h2 className="text-2xl font-bold mb-4 hubot-sans" id="custom-geometry">
      Custom Geometry Example
    </h2>
    <p className="mb-3">
      You can use custom geometries for your particles:
    </p>
    <pre className="bg-[#181c1b] text-emerald-100 text-sm rounded-md py-4 px-4 overflow-x-auto mb-8 jetbrains-mono">
      <code>
{`import { useGLTF } from '@react-three/drei';

const CustomParticles = () => {
  // Load the GLTF model. Make sure the path to your .glb file is correct.
  const { nodes } = useGLTF('/models/sword.glb');
  return (
    <>
      <VFXParticles
        name="swords"
        geometry={nodes?.Sword?.geometry ? <primitive object={nodes.Sword.geometry} /> : null}
        settings={{
          nbParticles: 1000,
          renderMode: "mesh",
          intensity: 2,
        }}
      />
      <VFXEmitter
        emitter="swords"
        settings={{
          spawnMode: "burst",
          nbParticles: 100,
          // Add any other emitter settings as needed
        }}
      />
    </>
  );
};
`}
      </code>
    </pre>
    <blockquote className="mb-10 text-sm text-white/80">
      <b>Note:</b> <br />
      Ensure the GLTF file at <code className="bg-black/30 px-1 rounded">/models/sword.glb</code> has a node named <code className="bg-black/30 px-1 rounded">Sword</code>.<br/>
      If your model's node hierarchy is different, adjust <code className="bg-black/30 px-1 rounded">nodes.Sword.geometry</code> accordingly.
    </blockquote>

    <h2 className="text-2xl font-bold mb-4 hubot-sans" id="api">
      API Reference
    </h2>
    <h3 className="text-lg font-semibold mt-6 mb-2">VFXParticles Component</h3>
    <div className="overflow-x-auto mb-3">
      <table className="w-full text-white/90 text-sm border border-white/10 rounded mb-4">
        <thead>
          <tr className="bg-emerald-900/40">
            <th className="text-left p-2 font-semibold">Property</th>
            <th className="text-left p-2 font-semibold">Type</th>
            <th className="text-left p-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-2">name</td>
            <td className="p-2">string</td>
            <td className="p-2">Unique identifier for this particle system</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">settings</td>
            <td className="p-2">object</td>
            <td className="p-2">Configuration options for particles</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">alphaMap</td>
            <td className="p-2">THREE.Texture</td>
            <td className="p-2">Optional texture for particle alpha/transparency</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">geometry</td>
            <td className="p-2">ReactElement</td>
            <td className="p-2">Optional custom geometry for particles</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 className="font-semibold mb-2 hubot-sans">VFXParticles Settings</h4>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-white/90 text-xs border border-white/10 rounded mb-4">
        <thead>
          <tr className="bg-emerald-900/40">
            <th className="text-left p-2 font-semibold">Setting</th>
            <th className="text-left p-2 font-semibold">Type</th>
            <th className="text-left p-2 font-semibold">Default</th>
            <th className="text-left p-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-2">nbParticles</td>
            <td className="p-2">number</td>
            <td className="p-2">1000</td>
            <td className="p-2">Maximum number of particles</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">intensity</td>
            <td className="p-2">number</td>
            <td className="p-2">1</td>
            <td className="p-2">Brightness multiplier</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">renderMode</td>
            <td className="p-2">'billboard' | 'mesh' | 'stretchBillboard'</td>
            <td className="p-2">'mesh'</td>
            <td className="p-2">How particles are rendered</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">stretchScale</td>
            <td className="p-2">number</td>
            <td className="p-2">1.0</td>
            <td className="p-2">Stretch factor for stretchBillboard mode</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">fadeSize</td>
            <td className="p-2">[number, number]</td>
            <td className="p-2">[0.1, 0.9]</td>
            <td className="p-2">Size fade in/out range (0-1 of lifetime)</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">fadeAlpha</td>
            <td className="p-2">[number, number]</td>
            <td className="p-2">[0, 1.0]</td>
            <td className="p-2">Opacity fade in/out range</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">gravity</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[0, 0, 0]</td>
            <td className="p-2">Gravity force applied to particles</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">frustumCulled</td>
            <td className="p-2">boolean</td>
            <td className="p-2">true</td>
            <td className="p-2">Whether particles are frustum culled</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">appearance</td>
            <td className="p-2">AppearanceMode</td>
            <td className="p-2">Square</td>
            <td className="p-2">Particle appearance (Square or Circular)</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">easeFunction</td>
            <td className="p-2">EaseFunction</td>
            <td className="p-2">'easeLinear'</td>
            <td className="p-2">Easing function for particle animations</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">blendingMode</td>
            <td className="p-2">THREE.Blending</td>
            <td className="p-2">AdditiveBlending</td>
            <td className="p-2">How particles blend with the scene</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">shadingHooks</td>
            <td className="p-2">object</td>
            <td className="p-2">{'{}'}</td>
            <td className="p-2">Custom GLSL shader hooks for advanced rendering effects</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-lg font-semibold mt-8 mb-2 hubot-sans">VFXEmitter Component</h3>
    <div className="overflow-x-auto mb-3">
      <table className="w-full text-white/90 text-sm border border-white/10 rounded mb-4">
        <thead>
          <tr className="bg-emerald-900/40">
            <th className="text-left p-2 font-semibold">Property</th>
            <th className="text-left p-2 font-semibold">Type</th>
            <th className="text-left p-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-2">emitter</td>
            <td className="p-2">string</td>
            <td className="p-2">Name of the target particle system</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">settings</td>
            <td className="p-2">object</td>
            <td className="p-2">Configuration options for emission behavior</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">debug</td>
            <td className="p-2">boolean</td>
            <td className="p-2">Show Leva controls to adjust settings</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">autoStart</td>
            <td className="p-2">boolean</td>
            <td className="p-2">Automatically start emitting</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">localDirection</td>
            <td className="p-2">boolean</td>
            <td className="p-2">Use emitter's local space for directions</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 className="font-semibold mb-2 hubot-sans">VFXEmitter Settings</h4>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-white/90 text-xs border border-white/10 rounded mb-4">
        <thead>
          <tr className="bg-emerald-900/40">
            <th className="text-left p-2 font-semibold">Setting</th>
            <th className="text-left p-2 font-semibold">Type</th>
            <th className="text-left p-2 font-semibold">Default</th>
            <th className="text-left p-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-2">loop</td>
            <td className="p-2">boolean</td>
            <td className="p-2">true</td>
            <td className="p-2">Continuously emit particles</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">duration</td>
            <td className="p-2">number</td>
            <td className="p-2">1</td>
            <td className="p-2">Emission cycle duration in seconds</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">nbParticles</td>
            <td className="p-2">number</td>
            <td className="p-2">100</td>
            <td className="p-2">Number of particles to emit per cycle</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">spawnMode</td>
            <td className="p-2">'time' | 'burst'</td>
            <td className="p-2">'time'</td>
            <td className="p-2">How particles are spawned</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">delay</td>
            <td className="p-2">number</td>
            <td className="p-2">0</td>
            <td className="p-2">Time delay before starting emission</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">particlesLifetime</td>
            <td className="p-2">[number, number]</td>
            <td className="p-2">[0.1, 1]</td>
            <td className="p-2">Particle lifetime range [min, max]</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">startPositionMin</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[-0.1, -0.1, -0.1]</td>
            <td className="p-2">Minimum start position</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">startPositionMax</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[0.1, 0.1, 0.1]</td>
            <td className="p-2">Maximum start position</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">startRotationMin</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[0, 0, 0]</td>
            <td className="p-2">Minimum start rotation</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">startRotationMax</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[0, 0, 0]</td>
            <td className="p-2">Maximum start rotation</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">rotationSpeedMin</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[0, 0, 0]</td>
            <td className="p-2">Minimum rotation speed</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">rotationSpeedMax</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[0, 0, 0]</td>
            <td className="p-2">Maximum rotation speed</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">directionMin</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[-1, 0, -1]</td>
            <td className="p-2">Minimum emission direction</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">directionMax</td>
            <td className="p-2">[number, number, number]</td>
            <td className="p-2">[1, 1, 1]</td>
            <td className="p-2">Maximum emission direction</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">size</td>
            <td className="p-2">[number, number]</td>
            <td className="p-2">[0.01, 0.25]</td>
            <td className="p-2">Particle size range [min, max]</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">speed</td>
            <td className="p-2">[number, number]</td>
            <td className="p-2">[1, 12]</td>
            <td className="p-2">Particle speed range [min, max]</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">colorStart</td>
            <td className="p-2">string[]</td>
            <td className="p-2">['white']</td>
            <td className="p-2">Colors at start (randomly selected)</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">colorEnd</td>
            <td className="p-2">string[]</td>
            <td className="p-2">['white']</td>
            <td className="p-2">Colors at end (randomly selected)</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-2">useLocalDirection</td>
            <td className="p-2">boolean</td>
            <td className="p-2">false</td>
            <td className="p-2">Use emitter's local space for directions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="border-white/10 mb-8" />
    <h3 className="text-md font-semibold mt-4 mb-1 max-[599px]:text-center">📄 License</h3>
    <p className="mb-10 max-[599px]:text-center">
      MIT © {anchorLink("https://github.com/Dev-Sameer-Khan", "Dev-Sameerkhan")}
    </p>
    </div>
  </section>
  </>
);

export default Docs;