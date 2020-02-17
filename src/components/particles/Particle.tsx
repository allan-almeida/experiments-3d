import React, { useRef, useState } from 'react'
import { useSpring, a } from 'react-spring/three'

export const Particle: React.FC = () => {
  // Refs
  const meshRef = useRef()
  // State
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  // Hooks
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'papayawhip' : 'palevioletred'
  })

  return (
    <a.mesh
      castShadow
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}>

      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />

    </a.mesh>
  )
}
