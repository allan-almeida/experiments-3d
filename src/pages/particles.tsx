import React from 'react'
import { Canvas } from 'react-three-fiber'

import IndexLayout from '../layouts'

import { Controls } from '../components/controls'
import { Particles } from '../components/particles'

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sprites.html
export default () => {
  return (
    <IndexLayout>
      <Canvas>
        <Controls type='trackball' />
        <Particles />
      </Canvas>
    </IndexLayout>
  )
}
