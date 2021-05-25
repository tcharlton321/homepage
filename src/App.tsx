import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Box } from './components/Box';
import { CameraController } from './components/CameraControls';
import { Star } from './components/Star';
import { MathUtils } from 'three';



function App() {

  
  const moveCamera = () => {
    const t:number = document.body.getBoundingClientRect().top;
  }
  document.body.onscroll = moveCamera;

  return (
    <Canvas>
      <CameraController />
      
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, 0, -3]} />
      <Box position={[3, 0, -3]} />
      <Star position={[MathUtils.randFloatSpread(100),MathUtils.randFloatSpread(100),MathUtils.randFloatSpread(100)]}/>
    </Canvas>
  );
}

export default App;
