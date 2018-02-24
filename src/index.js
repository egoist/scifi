import toScifiText from './getRandomChar'

const ATTR = 'data-scifing'

function scifi(el, { content, chars = '[en]', scifiSpeed = 20, exposeDelay = 100, keepChars = [' '] } = {}) {
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
    el.textContent = content.substr(0, exposePosition)

    if (exposePosition < content.length) {
      el.textContent += toScifiText(chars, content.substr(exposePosition - content.length), keepChars)
    }

    if (el.textContent === content) {
      el.removeAttribute(ATTR)
      clearInterval(scifiTimer)
    }
  }, scifiSpeed)
}

export default scifi
