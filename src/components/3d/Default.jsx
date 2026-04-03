import React from 'react'
import { VFXEmitter } from 'lazy-vfx'

const Default = () => {
  return (
    <VFXEmitter
        // debug // Show debug visualization
        emitter="default" // Target the particle system by name
        settings={{
          duration: 4,  // Emission cycle duration in seconds
          delay: 0, // Time delay before starting emission
          nbParticles: 10000, // Number of particles to emit per cycle
          spawnMode: "burst", // Emission mode: 'time' or 'burst'
          loop: true, // Continuously emit particles (only if `spawnMode` is 'time')

           // Position range (min/max)
          startPositionMin: [0, 0.0, 0],
          startPositionMax: [0, 0.0, 0],

          // Rotation range (min/max)
          startRotationMin: [0, 0, 0],
          startRotationMax: [0, 0, 0],
           // Rotation speed range (min/max)
          rotationSpeedMin: [0, 0, 0],
          rotationSpeedMax: [0, 0, 0],

           // Particle lifetime range [min, max]
          particlesLifetime: [0.1, 5],

          // Particle speed range [min, max]
          speed: [1, 10],

          // Direction range (min/max)
          directionMin: [-0.5, 0, -0.5],
          directionMax: [0.5, 1, 0.5],
 
          // Color at start - an array of strings for random selection
          colorStart: ["#4ade80", "#4ade80"],

           // Color at end - an array of strings for random selection
          colorEnd: ["#4ade80", "#ffffff"],

          // Particle size range [min, max]
          size: [0.1, 0.5],
        }}
      />

  )
}

export default Default