import React from 'react'
import { Canvas } from 'react-three-fiber'

import IndexLayout from '../layouts'

import { Controls } from '../components/controls'
import { Swarm, Lights } from '../components/particles'

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sprites.html
export default () => {
  return (
    <IndexLayout>
      <Canvas
        camera={{ fov: 75, near: 1, far: 5000, position: [600, 400, 5000] }}>
        <Controls type='trackball' />
        <Swarm />
        <Lights />
      </Canvas>
    </IndexLayout>
  )
}
