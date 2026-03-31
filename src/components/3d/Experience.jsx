import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'

const Experience = ({debug, stats}) => {
  return (
    <Canvas>
        <ambientLight intensity={1} />
        {stats && <Stats/>}
        <Scene debug={debug}/>
    </Canvas>
  )
}

export default Experience