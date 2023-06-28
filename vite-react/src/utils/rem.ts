import { isMobile } from 'react-device-detect'

const baseSize = isMobile ? 50 : 16
const baseWidth = isMobile ? 375 : 720
function setRem() {
  const scale = document.documentElement.clientWidth / baseWidth
  const size = baseSize * Math.min(scale, 5)
  const maxSize = 40
  document.documentElement.style.fontSize = Math.min(size, maxSize) + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}
