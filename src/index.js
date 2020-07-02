import shapes from './shapes.svg'
import style from './style.css'
import style2 from './style2.scss'

console.log('shapes', shapes)
const imageElement = document.createElement('img')
imageElement.setAttribute('src', 'build/' + shapes)
document.body.appendChild(imageElement)
