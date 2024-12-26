import { Decal, Float, OrbitControls, Text, useTexture } from '@react-three/drei'
import React from 'react'
const Languages = (props) => {
   const [decal]=useTexture([props.image])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25}></ambientLight>
        <directionalLight position={[0,0,0.05]}></directionalLight>
    <mesh scale={2.75}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <icosahedronGeometry args={[1,1]}></icosahedronGeometry>
        <meshStandardMaterial    color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading></meshStandardMaterial>
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        ></Decal>
    </mesh>
   
    </Float>
  )
}

export default Languages