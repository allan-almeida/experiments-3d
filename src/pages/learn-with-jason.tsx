import React, { useState, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

import IndexLayout from '../layouts'

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      enableDamping
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  )
}

const Plane = () => (
  <mesh
    receiveShadow
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -0.5, 0]}
  >
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="#999" />
  </mesh>
)

export const Box = () => {
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

export default () => (
  <IndexLayout>
    <Canvas
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
      camera={{ position: [0, 0, 5] }}>
      <fog attach="fog" args={["white", 5, 15]} />
      <Plane />
      <ambientLight />
      <spotLight castShadow position={[0, 5, 10]} intensity={0.5} penumbra={1} />
      <Controls />
      <Box />
    </Canvas>
  </IndexLayout>
)
