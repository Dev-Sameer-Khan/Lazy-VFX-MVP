import React from 'react'
import VFXParticals from '../vfxs/VFXParticals'
import VFXEmitter from '../vfxs/VFXEmitter'
import { Sparkles } from '@react-three/drei'


const Scene = () => {
  return (
    <>
    <VFXParticals
        name="sparks"
        settings={{ nParticals: 10000, intensity: 2, renderMode: "billboard", fadeAlpha:[0.5,0.5], fadeSize:[0,0], gravity: [0,-10,0]}}
        // alphaMap={text}
        geometry={<sphereGeometry/>}
      />
      <VFXEmitter
        // ref={emitterRed}
        nParticals={5000}
        // debug
        emitter="sparks"
        settings={{
          colorStart: ["#10B981", "#34D399"],
          size: [0.1, 0.5],
          startPositionMin: [0, 0, 0],
          startPositionMax: [0, 0, 0],
          directionMin: [-0.5, 0, -0.5],
          directionMax: [0.5, 1, 0.5],
          speed: [1, 5],
          loop: true,
        }}
        />
          {/* <Sparkles/> */}
        </>
  )
}

export default Scene