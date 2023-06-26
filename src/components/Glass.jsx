import { glassTexture } from '../images/textures'

const Glass = ({ args, position, transparent }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry args={args} />
      <meshMatcapMaterial transparent={transparent} opacity={0.5} matcap={glassTexture} />
    </mesh>
  )
}

export default Glass
