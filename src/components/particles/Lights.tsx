import React from 'react'

export const Lights: React.FC = () => (
  <group>
    <pointLight intensity={0.3} />
    <ambientLight intensity={1} />
    <spotLight
      castShadow
      intensity={0.2}
      angle={Math.PI / 7}
      position={[150, 150, 250]}
      penumbra={1}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  </group>
)
