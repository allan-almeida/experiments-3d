import React from 'react'
import { Canvas } from 'react-three-fiber'

import IndexLayout from '../layouts'

import { Boxes, Environment, Lights } from '../components/alligator'

export default () => {
  return (
    <IndexLayout>
      <Canvas>
        <Boxes />
        <Lights />
        <Environment />
      </Canvas>
    </IndexLayout>
  )
}
