import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* The Canvas is your window into the 3D world */}
      <Canvas>
        {/* Lights to see the object */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />

        {/* A 3D Sphere */}
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>

        {/* Allows you to rotate the object with your mouse */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default App