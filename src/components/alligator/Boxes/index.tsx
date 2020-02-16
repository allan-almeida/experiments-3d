import React, { useRef } from 'react'
import { map } from 'lodash'
import { useFrame } from 'react-three-fiber'

import { Box } from './Box'

export const Boxes = () => {
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y += 0.001
  })

  const boxes = map(new Array(30), (el, i) => {
    return <Box key={i} />
  })

  return <group ref={group}>{boxes}</group>
}
