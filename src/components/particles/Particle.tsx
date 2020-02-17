import React, { useRef } from 'react'
import * as THREE from 'three'
import { random } from 'lodash'

const number = 512

const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    position: [random(-9, 9, true), random(-9, 9, true), random(-9, 9, true)]
  }
})



export const Particle: React.FC = () => {
  // Refs
  const meshRef = useRef()

  // position
  // const position = useMemo(() => {
  //   return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)]
  // }, [])
  return data.map((d, index) => (
    <mesh key={index} castShadow receiveShadow position={d.position}>
      {/* <mesh key={index} castShadow receiveShadow position={[100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5]}> */}
      <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
      <meshStandardMaterial attach='material' color={0x0000FF} roughness={0.75} metalness={0.5} />
    </mesh>
  ))

  return (

    <mesh
      ref={meshRef}
    >
      <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
      <meshBasicMaterial attach='material' color={0x0000FF} />
      {/* TODO: */}
      {/* <bufferGeometry attach='geometry'>
        <bufferAttribute attachObject={['attributes', 'position']} count={vertices.length / 3} array={vertices} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial attach="material" color={0x0000FF} /> */}
    </mesh>
  )
}
