import React, { useRef } from 'react'
import { useThree, useFrame, extend } from 'react-three-fiber'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

extend({ TrackballControls })

interface Props {
  type: 'trackball' | 'orbit'
}

export const Controls: React.FC<Props> = ({ type }) => {
  const controls = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    controls.current.update()
  })

  switch (type) {
    case 'trackball':
    default:
      return (
        <trackballControls
          ref={controls}
          enableDamping
          args={[camera, gl.domElement]}
        />
      )
  }

}
