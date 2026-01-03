"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function FloatingGeometry({
  position,
  color,
  speed,
}: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 50
      const z = (Math.random() - 0.5) * 50
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#63B3ED" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={0.5}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-20 opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#63B3ED" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A78BFA" />

        <ParticleField />

        <FloatingGeometry position={[-4, 3, 0]} color="#63B3ED" speed={0.5} />
        <FloatingGeometry position={[5, -2, -3]} color="#A78BFA" speed={0.7} />
        <FloatingGeometry position={[0, 4, -5]} color="#EC4899" speed={0.6} />

        <AnimatedSphere position={[6, 2, -8]} color="#4FD1C5" />
        <AnimatedSphere position={[-6, -3, -10]} color="#F59E0B" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
