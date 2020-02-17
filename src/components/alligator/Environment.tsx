import React from 'react'
import { BackSide } from 'three'

export const Environment: React.FC = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0xd2452b}
        attach="material"
        side={BackSide}
        metalness={0.4}
        roughness={0.5}
      />
    </mesh>
  )
}
