import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createBrainGeometry } from './brainGeometry';
import { createCorpusCallosumGeometry } from './corpusCallosumGeometry';
import './BrainCCScene.scss';

function Brain() {
  const geometry = useMemo(() => createBrainGeometry({ radius: 1.55, detail: 4 }), []);
  return (
    <group>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#bfe3ff"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0}
          transmission={0.6}
          thickness={1.3}
          ior={1.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#2fe0c4" wireframe transparent opacity={0.08} depthWrite={false} />
      </mesh>
    </group>
  );
}

function CorpusCallosum() {
  const geometry = useMemo(() => createCorpusCallosumGeometry({ scale: 1, depth: 0.62 }), []);
  return (
    <group position={[0, 0.1, 0]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#ff3b30"
          emissive="#ff2d3d"
          emissiveIntensity={0.4}
          roughness={0.35}
          metalness={0.05}
        />
      </mesh>
      {/* cheap additive glow shell */}
      <mesh geometry={geometry} scale={1.06}>
        <meshBasicMaterial
          color="#ff5b6a"
          transparent
          opacity={0.22}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function RotatingRig({ paused }) {
  const ref = useRef();
  const t0 = useRef(0);

  useFrame((_, delta) => {
    if (paused || !ref.current) return;
    t0.current += delta;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x = 0.08 + Math.sin(t0.current * 0.35) * 0.06;
  });

  return (
    <group ref={ref} rotation={[0.08, 0.55, 0]}>
      <Brain />
      <CorpusCallosum />
    </group>
  );
}

export default function BrainCCScene() {
  const reducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <div className="brain-cc-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.3, 4.6], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.15} />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#6c7bff" />
        <pointLight position={[0, 0, 2]} intensity={0.6} color="#ff5b6a" distance={6} />
        <Suspense fallback={null}>
          <RotatingRig paused={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
