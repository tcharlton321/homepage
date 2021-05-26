import React, { Suspense, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Box_01} from './components/Box';
import { CameraController } from './components/CameraControls';
import { Star } from './components/Star';
import { Camera, MathUtils, Object3D } from 'three';
import { Billboard, GizmoHelper, GizmoViewport, Html, Plane, Stars, Text } from '@react-three/drei';
import { Moon } from './components/Moon';
import { Box, Flex } from '@react-three/flex';
import { TextPlane } from './components/TextPlane';



export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <CameraController/>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[0, -10, 0]} />
      <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={5000} // Amount of stars (default=5000)
            factor={4} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
      
      <Moon position={[0,0,0]}/>
      </Suspense>
    </Canvas>
  )
}
