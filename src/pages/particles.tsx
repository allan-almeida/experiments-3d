import React from 'react'
import { Canvas } from 'react-three-fiber'

import IndexLayout from '../layouts'

import { Controls } from '../components/controls'
import { Particles } from '../components/particles'

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sprites.html
export default () => {
  return (
    <IndexLayout>
      <Canvas
        camera={{ fov: 75, near: 1, far: 5000, position: [600, 400, 1500] }}>
        <Controls type='trackball' />
        <Particles />
        <group>
          <pointLight intensity={0.3} />
          <ambientLight intensity={1} />
          <spotLight
            castShadow
            intensity={0.2}
            angle={Math.PI / 7}
            position={[150, 150, 250]}
            penumbra={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
        </group>
      </Canvas>
    </IndexLayout>
  )
}
