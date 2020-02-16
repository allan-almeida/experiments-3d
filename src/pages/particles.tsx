import React, { useRef } from 'react'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

import IndexLayout from '../layouts'

// import { } from '../components/particles'
import { Box } from './learn-with-jason'

extend({ TrackballControls })

const Controls = () => {
  const controls = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    controls.current.update()
  })

  return (
    <trackballControls
      ref={controls}
      enableDamping
      args={[camera, gl.domElement]}
    />
  )
}


// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sprites.html
export default () => {
  return (
    <IndexLayout>
      <Canvas>
        <Controls />
        <Box />
      </Canvas>
    </IndexLayout>
  )
}
