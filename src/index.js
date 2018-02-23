import getRandomChars from './getRandomChar'

const ATTR = 'data-scifing'

function scifi(el, { content, chars = '[en]', scifiSpeed = 20, exposeDelay = 100 } = {}) {
  if (el.getAttribute(ATTR)) return

  content = content || el.textContent
  el.setAttribute(ATTR, true)

  let exposePosition = 0
  const exposeTimer = setInterval(() => {
    if (exposePosition < content.length) {
      exposePosition++
    } else {
      exposePosition = content.length
      clearInterval(exposeTimer)
    }
  }, exposeDelay)

  const scifiTimer = setInterval(() => {
    el.textContent = content.substring(0, exposePosition) + getRandomChars(chars, content.length - exposePosition)
    if (el.textContent === content) {
      el.removeAttribute(ATTR)
      clearInterval(scifiTimer)
    }
  }, scifiSpeed)
}

export default scifi
