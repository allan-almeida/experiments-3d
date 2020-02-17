import React, { useRef } from 'react'
import * as THREE from 'three'
import { random } from 'lodash'

export const Particle: React.FC = () => {
  // Refs
  const meshRef = useRef()

  // position
  // const position = useMemo(() => {
  //   return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)]
  // }, [])

  var vertices = []

  for (var i = 0; i < 10000; i++) {
    var x = random(-3, 3, true)
    var y = random(-3, 3, true)
    var z = random(-3, 3, true)
    vertices.push(x, y, z)
  }

  return (
    <mesh
      ref={meshRef}
    >
      <bufferGeometry attach='geometry'>
        <bufferAttribute attachObject={['attributes', 'position']} count={vertices.length / 3} array={vertices} itemSize={3} />
      </bufferGeometry>
      {/* <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} /> */}
      <pointsMaterial attach="material" color={0x0000FF} />
    </mesh>
  )
}
