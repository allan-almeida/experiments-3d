const randomize = () => {
  console.log('randomize')
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

const cube = (i: number) => {
  console.log('cube')
  // Cube
  const amount = 8
  const separation = 150
  const offset = ((amount - 1) * separation) / 2

  const x = (i % amount) * separation
  const y = Math.floor((i / amount) % amount) * separation
  const z = Math.floor(i / (amount * amount)) * separation

  return {
    position: [x - offset, y - offset, z - offset]
  }
}

const sphere = (i: number, count: number) => {
  console.log('sphere')
  // Sphere
  var radius = 750

  var phi = Math.acos(- 1 + (2 * i) / count)
  var theta = Math.sqrt(count * Math.PI) * phi

  return {
    position: [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    ]
  }
}

export {
  randomize,
  plane,
  cube,
  sphere
}
