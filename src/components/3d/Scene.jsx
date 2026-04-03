import React from 'react'
// import VFXParticals from '../vfxs/VFXParticals'
// import VFXEmitter from '../vfxs/VFXEmitter'
import { Sparkles, useGLTF, useTexture } from '@react-three/drei'
import { VFXParticles, VFXEmitter } from 'lazy-vfx';
import Ice from './Ice';
import Fire from './Fire';
import Void from './Void';
import { selectedEffectAtom } from '../../main';
import { useAtom } from 'jotai';
import Default from './Default';



const Scene = ({debug}) => {


  const texture = useTexture("/magic_01.png");
  const text = useTexture("https://static.thenounproject.com/png/4312916-200.png");
  const { nodes } = useGLTF("/Icicle.glb");

  const [selectedEffect] = useAtom(selectedEffectAtom);

  return (
    <>
          <VFXParticles
        name="default" // A unique identifier for this particle system
        settings={{
          nbParticles: 10000, // Maximum number of particles to allocate
          intensity: 2, // Brightness multiplier
          renderMode: "billboard", // "billboard" or "mesh" or "stretchBillboard"
          fadeAlpha: [0.5, 0.5], // Opacity fade in/out settings
          fadeSize: [0, 0], // Size fade in/out settings
          gravity: [0, -20, 0], // Apply gravity (x, y, z)
        }}
        alphaMap={text}
        // geometry={<sphereGeometry />}
      />

    <VFXParticles
    name="sparks"
    geometry={<coneGeometry args={[0.5, 1, 8, 1]} />}
    settings={{
        nbParticles : 100000,
        renderMode : "billboard",
        intensity : 3,
        fadeSize : [0.1,0.1]
    }}
    />
    <VFXParticles
        name="spheres"
        geometry={<sphereGeometry args={[1, 32, 32]} />}
        settings={{
          nbParticles: 1000,
          renderMode: "mesh",
          intensity: 5,
          fadeSize: [0.7, 0.9],
          fadeAlpha: [0, 1],
        }}
      />
       <VFXParticles
        name="writings"
        geometry={<circleGeometry args={[1, 32]} />}
        alphaMap={texture}
        settings={{
          nbParticles: 100,
          renderMode: "mesh",
          fadeAlpha: [0.9, 1.0],
          fadeSize: [0.3, 0.9],
        }}
      />
      <VFXParticles
        name="icicle"
        geometry={<primitive object={nodes.icicle.geometry} />}
        settings={{
          nbParticles: 100,
          renderMode: "mesh",
          fadeAlpha: [0, 1.0],
          fadeSize: [0.2, 0.8],
        }}
      />



    {/* 
      The code below checks the value of selectedEffectAtom, but selectedEffectAtom is an atom from jotai, 
      not the value itself. You need to use the value from useAtom(selectedEffectAtom) so that you can access 
      the currently selected effect!

      For example, at the top of your component, you might have:
      const [selectedEffect] = useAtom(selectedEffectAtom);

      And then:
    */}
    {selectedEffect === "fire" && <Fire/> }
    {selectedEffect === "ice" && <Ice/> }
    {selectedEffect === "void" && <Void/> }
    {selectedEffect === "default" && <Default/> }
    {/* <Ice/> */}
    
          {/* <Sparkles/> */}
        </>
  )
}

export default Scene