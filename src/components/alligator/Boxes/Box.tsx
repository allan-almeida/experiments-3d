import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import { random } from 'lodash'

interface Props {

}

export const Box: React.FC<Props> = () => {
  const mesh = useRef()
  const time = useRef(0)

  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  // a ref is needed because useFrame creates a "closure" on the state
  const activeRef = useRef()

  // position
  const position = useMemo(() => {
    return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)]
  }, [])

  const color = hovered ? 0xe5d54d : (active ? 0xf7e7e5 : 0xf95b3c)

  // random time mod factor
  const timeMod = useMemo(() => random(0.1, 4, true), [])

  //useEffect of the activeState
  useEffect(() => {
    activeRef.current = active
  }, [active])

  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod
    if (activeRef.current) {
      time.current += 0.3
      mesh.current.position.y = position[1] + Math.sin(time.current) * 0.07
    }
  })

  // Handlers
  const onHover = useCallback((e, val) => {
    e.stopPropagation()
    setHovered(val)
  }, [setHovered])

  const onClick = useCallback((e) => {
    e.stopPropagation()
    setActive(v => !v)
  }, [setActive])

  console.log(active)

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
      onClick={e => onClick(e)}
    >
      <boxBufferGeometry attach="geometry" args={[0.09, 0.3, 0.29]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.6}
        metalness={0.7}
      />
    </mesh>
  )
}
