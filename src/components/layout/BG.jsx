import React from 'react'
import LightRays from '../3d/LightRay'
import { Sparkles } from '@react-three/drei'

const BG = () => {
  // Check if the path contains "demo"
  const isDemo = typeof window !== "undefined" && window.location.pathname.includes('demo');

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 z-1 overflow-hidden">
        <LightRays raysColor="#10B981" />
      </div>
          {!isDemo && (
      <div className="w-full bg-black h-screen flex items-center justify-end max-[599px]:items-start max-[599px]:pt-20 pr-20 max-[599px]:px-6 absolute top-0 left-0 z-0 overflow-hidden">
        <div className="w-1/2 max-[599px]:w-full max-[599px]:h-1/2 h-full">
            <video
              src="/bg.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-contain"
            ></video>
        </div>
      </div>
          )}
    </>
  )
}

export default BG