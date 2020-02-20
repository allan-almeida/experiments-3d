import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { random } from 'lodash'
import { useSprings, a } from 'react-spring/three'

const count = 512

const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']

const randomize = i => {
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5]
  }
}

const data = new Array(count).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    position: [random(-9, 9, true), random(-9, 9, true), random(-9, 9, true)]
  }
})

// const plane = (i: number) => {
//   console.log('plane')
//   // Plane
//   const amountX = 16
//   const amountZ = 32
//   const separation = 150
//   const offsetX = ((amountX - 1) * separation) / 2
//   const offsetZ = ((amountZ - 1) * separation) / 2

//   const x = (i % amountX) * separation
//   const z = Math.floor(i / amountX) * separation
//   const y = (Math.sin(x * 0.5) + Math.sin(z * 0.5)) * 200
//   return [x - offsetX, y, z - offsetZ]
//   // return [0, 0, 0]
// }

export const Swarm: React.FC = () => {
  console.log('render')
  // Refs
  const meshRef = useRef()

  const [springs, set] = useSprings(count, i => ({
    from: randomize(i),
    ...randomize(i),
    config: { mass: 20, tension: 150, friction: 50 }
  }))

  useEffect(() => void setInterval(() => set(i => ({ ...randomize(i) })), 3000), [set])

  return data.map((d, i) => (
    <a.mesh key={i} {...springs[i]}>
      <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
      <meshStandardMaterial attach="material" color={d.color} roughness={0.75} metalness={0.5} />
    </a.mesh>
  ))
}
