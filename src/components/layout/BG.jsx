import React from 'react'
import LightRays from '../3d/LightRay'
import { Sparkles } from '@react-three/drei'

const BG = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0 overflow-hidden">
        <LightRays raysColor="#10B981" />
      </div>
  )
}

export default BG