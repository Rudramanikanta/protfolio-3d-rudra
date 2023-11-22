import React, { useRef } from "react";
import { GradientTexture, useGLTF } from "@react-three/drei";
import old from './assets/dream.glb'
const Computer=(props) =>{
  const sample= useGLTF(old);
  const oldref=useRef();
  return (
   <mesh>
    <ambientLight></ambientLight>
    <pointLight  intensity={1}></pointLight>
    <hemisphereLight intensity={0.15} groundColor='black'></hemisphereLight>
    <spotLight intensity={1}></spotLight>
    <primitive scale={0.3} position={[0,2,0]} object={sample.scene}></primitive>
   </mesh>
  );
}


export default Computer;