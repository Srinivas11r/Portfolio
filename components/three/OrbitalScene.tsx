"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying float vRipple;

  uniform float uTime;
  uniform float uDensity;
  uniform float uStrength;
  uniform float uSpeed;
  uniform float uAmplitude;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float wave1 = sin((pos.x * uDensity) + (uTime * uSpeed));
    float wave2 = cos((pos.y * (uDensity + 0.6)) - (uTime * (uSpeed * 0.75)));
    float fold = sin((pos.x + pos.y) * 0.35 + uTime * 0.15);

    float ripple = (wave1 * wave2) + fold;
    pos.z += (ripple * uStrength * 0.2) + uAmplitude;

    vRipple = ripple;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying float vRipple;

  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uBrightness;
  uniform float uReflection;
  uniform float uTime;

  float grain(vec2 uv) {
    return fract(sin(dot(uv, vec2(127.1, 311.7)) + uTime * 0.5) * 43758.5453123);
  }

  void main() {
    float horizon = smoothstep(0.0, 0.7, vUv.y + (vRipple * 0.05));
    vec3 base = mix(uColor3, uColor1, horizon);
    float accent = smoothstep(0.25, 1.0, vUv.y + (vRipple * 0.08));
    vec3 color = mix(base, uColor2, accent);

    float sheen = smoothstep(0.8, 1.0, vUv.y + vRipple * 0.02) * uReflection;
    color += sheen;

    float noise = (grain(vUv * vec2(640.0, 360.0)) - 0.5) * 0.08;
    color += noise;

    color *= uBrightness;
    gl_FragColor = vec4(color, 1.0);
  }
`;

function WaterPlane() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 8 },
      uDensity: { value: 1.5 },
      uStrength: { value: 1.5 },
      uSpeed: { value: 0.3 },
      uAmplitude: { value: 0 },
      uColor1: { value: new THREE.Color("#606080") },
      uColor2: { value: new THREE.Color("#8d7dca") },
      uColor3: { value: new THREE.Color("#212121") },
      uBrightness: { value: 1 },
      uReflection: { value: 0.1 }
    }),
    []
  );

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.rotation.x = 0.95;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      <mesh scale={6.5} rotation={[-Math.PI / 2, 0, Math.PI / 6]}>
        <planeGeometry args={[6, 6, 256, 256]} />
        <shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() * 3) + 0.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#cfd9ff" size={0.045} sizeAttenuation depthWrite={false} transparent opacity={0.45} />
    </points>
  );
}

function HorizonGlow() {
  return (
    <mesh position={[0, -1.2, -2]} rotation={[-0.2, 0, 0]}>
      <planeGeometry args={[8, 6]} />
      <meshBasicMaterial color="#2f1b40" transparent opacity={0.6} />
    </mesh>
  );
}

export function OrbitalScene() {
  return (
    <Canvas camera={{ position: [0, 0, 9.1], fov: 45 }} dpr={[1, 1.6]}>
      <color attach="background" args={["#03030a"]} />
      <fog attach="fog" args={["#03030a", 4, 14]} />
      <WaterPlane />
      <ParticleField />
      <HorizonGlow />
    </Canvas>
  );
}
