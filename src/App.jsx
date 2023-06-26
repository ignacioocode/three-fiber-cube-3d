import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import Figure from './components/Figure'

function App () {
  const touchStartTimeRef = useRef(0)
  const [control, setControl] = useState(false)

  // Función de doble clic
  const handleTouchStart = () => {
    const currentTime = new Date().getTime()
    const timeSinceLastTouch = currentTime - touchStartTimeRef.current

    if (timeSinceLastTouch < 300) {
      setControl(!control)
    }
    touchStartTimeRef.current = currentTime
  }
  return (
    <>
      <div className='Canvas'>
        <h3>{control ? 'Double-tap to let control' : 'Double-tap to control'}</h3>
        <Canvas
          onDoubleClick={() => setControl(!control)}
          onTouchStart={handleTouchStart}
          camera={{ position: window.innerWidth > 700 ? [4.5, 1.5, 0] : [7, 2, 0] }}
        >
          <Figure />
          {control && <OrbitControls />}
        </Canvas>
      </div>
    </>
  )
}

export default App
