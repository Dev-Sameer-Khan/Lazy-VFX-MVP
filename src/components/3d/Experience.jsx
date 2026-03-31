import { Environment, Loader, OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'
import { Suspense } from 'react'

const Experience = ({debug, stats}) => {
  return (
    <Canvas>
      <Loader/>
        <ambientLight intensity={1} />
        {stats && <Stats/>}
        <Suspense>
        <Scene debug={debug}/>
        </Suspense>
    </Canvas>
  )
}

export default Experience