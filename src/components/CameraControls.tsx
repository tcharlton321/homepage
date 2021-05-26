import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, MeshProps, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

// extend({ OrbitControls });

export const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      // controls.enablePan = false;
      // controls.enableRotate = false;
      // controls.enableZoom = false;
      controls.minDistance = 3;
      controls.maxDistance = 100;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};