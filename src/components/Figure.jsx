import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Glass from './Glass'

const Figure = () => {
  const groupRef = useRef()

  // rotación de la figura
  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta
    groupRef.current.position.y = 0.5
  })

  return (
    <>
      <group ref={groupRef}>
        <Glass args={[1, 1, 1]} position={[0, 0, 0]} />
        <Glass args={[1.5, 1.5, 1.5]} position={[0, 0, 0]} transparent />
        <Glass args={[2.4, 0.05, 2.4]} position={[0, -1.1, 0]} transparent />
        <Glass args={[2, 0.05, 2]} position={[0, -0.9, 0]} transparent />
        <Glass args={[2.6, 0.05, 2.6]} position={[0, -1.3, 0]} transparent />
      </group>
    </>
  )
}

export default Figure
