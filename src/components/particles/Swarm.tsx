import React, { useRef, useMemo, useEffect, useState } from 'react'
import * as THREE from 'three'
import { random } from 'lodash'
import { useSprings, a } from 'react-spring/three'

const count = 512

const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']

const randomize = (i: number) => {
  return {
    position: [
      Math.random() * 4000 - 2000,
      Math.random() * 4000 - 2000,
      Math.random() * 4000 - 2000
    ]
  }
}

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

  return {
    position: [x - offsetX, y, z - offsetZ]
  }
}

const data = new Array(count).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))]
  }
})

export const Swarm: React.FC = () => {
  // State
  const [shape, setShape] = useState(0)
  // Refs
  const meshRef = useRef()

  const [springs, set] = useSprings(count, (i: number) => ({
    ...randomize(i),
    config: { mass: 5, tension: 150, friction: 50 }
  }))

  const memoisedPlane = useMemo(() => data.map((o, i) => plane(i)), [data])

  // const updateShape = () => {
  //   console.log('updateShape', shape)
  //   const newIndex = shape + 1
  //   setShape(newIndex)
  // }

  // useEffect(() => {
  // console.log('useEffect')
  // setInterval(() => {
  // console.log('setInterval')
  // updateShape()
  // return set((index: number) => memoisedPlane[index])
  // return setShape(shape + 1)
  // }, 3000)
  // }, [shape])

  // useEffect(() => {
  //   console.log('shapeEffect')
  // }, [shape])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('===== interval =====')
      console.log('shape', shape)
      setShape(shape + 1)
      return set((index: number) => memoisedPlane[index])
    }, 3000)
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
