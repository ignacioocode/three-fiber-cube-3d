import { imgGlass } from './images.js'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const glassTexture = new TextureLoader().load(imgGlass)

glassTexture.wrapS = RepeatWrapping

glassTexture.wrapT = RepeatWrapping

glassTexture.magFilter = NearestFilter

export { glassTexture }
