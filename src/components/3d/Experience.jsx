import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'

const Experience = () => {
  return (
    <Canvas>
        <ambientLight intensity={1} />
        <Scene/>
    </Canvas>
  )
}

export default Experience