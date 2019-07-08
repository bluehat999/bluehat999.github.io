const path = require('path')
console.log(path)
const base = '/src/assets/images/gallery/fulls/'
let bgImage = [
]
for (let i = 1; i < 10; i++) {
  bgImage.push(`url(${base}0${i}.jpg)`)
}
export default bgImage
