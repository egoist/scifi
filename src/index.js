import getRandomChar from './getRandomChar'

const ATTR = 'data-scifing'

function scifi(el, { content, chars = '[en]', speed = 20, delay = 100 } = {}) {
  if (el.getAttribute(ATTR)) return

  content = content || el.textContent
  el.setAttribute(ATTR, true)
  let finishedString = ''

  const finishedTimer = setInterval(() => {
    finishedString += content[finishedString.length]
  }, delay)

  const randomTimer = setInterval(() => {
    let randomString = ''
    for (let i = 0; i < content.length - finishedString.length; i++) {
      const char = content[i + finishedString.length]
      // Ignore space
      randomString += char === ' ' ? ' ' : getRandomChar(chars)
    }
    el.textContent = finishedString + randomString

    if (finishedString.length === content.length) {
      clearInterval(finishedTimer)
      clearInterval(randomTimer)
      el.removeAttribute(ATTR)
    }
  }, speed)
}

export default scifi
