import { Canvas, MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from "three";
import { TextureLoader } from 'three';
import moontexturejpg from '../assets/moon.jpg';
import moonnormaljpg from '../assets/normal.jpg';

export const Moon: React.FC<MeshProps> = (props) => {
  
  
  
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const texture = useLoader(TextureLoader, moontexturejpg)
  const normalMap = useLoader(TextureLoader, moonnormaljpg)

  useFrame(() => {
    mesh.current.rotation.y += 0.01;})

  return (
    <mesh
    {...props}
      ref={mesh}>
      <sphereGeometry attach="geometry" args={[2,32,32]}/>
      <meshStandardMaterial attach="material" map={texture} normalMap={normalMap}/>
    </mesh>
  )
}