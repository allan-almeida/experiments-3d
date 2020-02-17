import React from 'react'
import { Canvas } from 'react-three-fiber'

import IndexLayout from '../layouts'

import { Controls } from '../components/controls'
import { Box } from './learn-with-jason'

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sprites.html
export default () => {
  return (
    <IndexLayout>
      <Canvas>
        <Controls type='trackball' />
        <Box />
      </Canvas>
    </IndexLayout>
  )
}
