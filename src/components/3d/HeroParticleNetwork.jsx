import React, { useRef, useMemo, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL / Three.js fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      );
    }
    return this.props.children;
  }
}

function ParticleNodes({ count = 50 }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 11;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  const linePositions = useMemo(() => {
    return new Float32Array(count * count * 6);
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const array = positionsAttr.array;

    const mouseX = (state.pointer.x * 2);
    const mouseY = (state.pointer.y * 2);

    for (let i = 0; i < count; i++) {
      array[i * 3] += velocities[i * 3];
      array[i * 3 + 1] += velocities[i * 3 + 1];
      array[i * 3 + 2] += velocities[i * 3 + 2];

      if (Math.abs(array[i * 3]) > 8) velocities[i * 3] *= -1;
      if (Math.abs(array[i * 3 + 1]) > 5.5) velocities[i * 3 + 1] *= -1;
      if (Math.abs(array[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1;
    }
    positionsAttr.needsUpdate = true;

    if (linesRef.current) {
      let vertexIdx = 0;
      const maxDistance = 3.2;

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = array[i * 3] - array[j * 3];
          const dy = array[i * 3 + 1] - array[j * 3 + 1];
          const dz = array[i * 3 + 2] - array[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            linePositions[vertexIdx++] = array[i * 3];
            linePositions[vertexIdx++] = array[i * 3 + 1];
            linePositions[vertexIdx++] = array[i * 3 + 2];

            linePositions[vertexIdx++] = array[j * 3];
            linePositions[vertexIdx++] = array[j * 3 + 1];
            linePositions[vertexIdx++] = array[j * 3 + 2];
          }
        }
      }

      const lineGeo = linesRef.current.geometry;
      lineGeo.attributes.position.array.set(linePositions);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, vertexIdx / 3);
    }

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX * 0.3, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouseY * 0.3, 0.04);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.10}
          color="#00C2CB"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00C2CB"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroParticleNetwork() {
  return (
    <ThreeErrorBoundary>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.4} />
          <ParticleNodes count={50} />
        </Canvas>
      </div>
    </ThreeErrorBoundary>
  );
}
