import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { useSpring, useSprings, animated } from 'react-spring'

import IndexLayout from '../layouts'

import { Controls } from '../components/controls'
import { Swarm, Lights } from '../components/particles'

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sprites.html
export default () => {

  const [toggle, setToggle] = useState(false)
  const number = 10

  const data = new Array(number).fill().map((o, i) => {
    return (
      <h1 key={i}>i</h1>
    )
  })

  const [springs, set, stop] = useSprings(number, index => ({ opacity: 0.1 * index }))

  const handleClick = () => {
    // Update springs with new props
    setToggle(!toggle)
    set(index => (toggle ? { opacity: (1 - (0.1 * index)) } : { opacity: 0.1 * index }))
  }

  // Stop all springs
  stop()

  console.log('render+++')

  return (
    <IndexLayout>

      {/* {springs.map((props, i) => <animated.div key={i} style={props}>{data[i]}</animated.div>)} */}

      <button type='default' onClick={handleClick}>Toggle</button>
      <Canvas
        camera={{ fov: 75, near: 1, far: 5000, position: [600, 400, 5000] }}>
        <Controls type='trackball' />
        <Swarm />
        <Lights />
      </Canvas>
    </IndexLayout>
  )
}
