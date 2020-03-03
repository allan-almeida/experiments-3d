import React, { useRef, useMemo, useEffect, useState } from 'react'
import * as THREE from 'three'
import { random } from 'lodash'
import { useSprings, a } from 'react-spring/three'

import { randomize, plane, cube, sphere } from './shapes'

const COUNT = 512
const DURATION = 3000

const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']

const data = new Array(COUNT).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))]
  }
})

export const Swarm: React.FC = () => {
  // State
  const [shape, setShape] = useState(0)
  // Refs
  const meshRef = useRef()

  const [springs, set] = useSprings(COUNT, () => ({
    ...randomize(),
    config: { mass: 5, tension: 150, friction: 50 }
  }))

  // Calculate positions of different shapes
  const shapes = [
    useMemo(() => data.map((o, i) => plane(i)), [data]),
    useMemo(() => data.map((o, i) => randomize(i)), [data]),
    useMemo(() => data.map((o, i) => cube(i)), [data]),
    useMemo(() => data.map((o, i) => randomize(i)), [data]),
    useMemo(() => data.map((o, i) => sphere(i, COUNT)), [data]),
    useMemo(() => data.map((o, i) => randomize(i)), [data])
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('===== interval =====')
      console.log('shape', shape)
      setShape((shape + 1) % shapes.length)

      return set((index: number) => shapes[shape][index])

    }, DURATION)
    return () => clearInterval(interval)
  }, [shape])

  console.log('render++')
  return data.map((d, i) => (
    <a.mesh key={i} {...springs[i]}>
      <sphereBufferGeometry attach="geometry" args={[20, 32, 32]} />
      <meshStandardMaterial attach="material" color={d.color} roughness={0.75} metalness={0.5} />
    </a.mesh>
  ))
}
