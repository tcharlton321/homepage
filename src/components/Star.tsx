import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { start } from 'repl'
import { MathUtils, Mesh, MeshStandardMaterial, SphereGeometry } from 'three'

export const Star: React.FC<MeshProps> = (props) => {
  const mesh = useRef<THREE.Mesh>(null!)
  return (
    <mesh
    {...props}
      ref={mesh}>
      <sphereGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial color={0xaaaaaa} />
    </mesh>
  )
}