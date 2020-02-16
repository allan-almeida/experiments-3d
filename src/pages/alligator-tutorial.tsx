import React from 'react'
import { Canvas } from 'react-three-fiber'

import IndexLayout from '../layouts'

import { Boxes, Environment, Lights } from '../components/alligator'

// https://codesandbox.io/s/alligatordemoreact-three-fiber-r5i7p
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
