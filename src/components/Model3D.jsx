import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const ModelThee = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 10 }}
      className='w-full h-full'
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.7, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelThee;
