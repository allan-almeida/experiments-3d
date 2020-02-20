import React, { useRef, useMemo } from 'react'
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

const plane = (i: number) => {
  console.log('plane')
  // Plane
  const amountX = 16
  const amountZ = 32
  const separation = 150
  const offsetX = ((amountX - 1) * separation) / 2
  const offsetZ = ((amountZ - 1) * separation) / 2

  const x = (i % amountX) * separation
  const z = Math.floor(i / amountX) * separation
  const y = (Math.sin(x * 0.5) + Math.sin(z * 0.5)) * 200
  return [x - offsetX, y, z - offsetZ]
  // return [0, 0, 0]
}

export const Swarm: React.FC = () => {
  // Refs
  const meshRef = useRef()

  // TODO: useMome for position
  const position = useMemo(() => {
    return [random(-2, 2, true), random(-2, 2, true), random(-2, 2, true)]
  }, [])

  return data.map((d, i) => (
    <mesh key={i} position={plane(i)}>
      <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
      <meshStandardMaterial attach="material" color={d.color} roughness={0.75} metalness={0.5} />
    </mesh>
  ))
}
