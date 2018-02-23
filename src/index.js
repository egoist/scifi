import getRandomChar from './getRandomChar'

const ATTR = 'data-scifing'

function scifi(el, { content, chars = '[en]', speed = 20, delay = 100 } = {}) {
  if (el.getAttribute(ATTR)) return

  content = content || el.textContent
  el.setAttribute(ATTR, true)
  let finishedString = ''

  const finishedTimer = setInterval(() => {
    if (finishedString.length < content.length) {
      finishedString += content[finishedString.length]
    } else {
      clearInterval(finishedTimer)
      clearInterval(randomTimer)
      el.removeAttribute(ATTR)
    }
  }, delay)

  const randomTimer = setInterval(() => {
    let randomString = ''
    for (let i = 0; i < content.length - finishedString.length; i++) {
      // Ignore space
      randomString += content[i + finishedString.length] === ' ' ? ' ' : getRandomChar(chars)
    }
    el.textContent = finishedString + randomString
  }, speed)
}

export default scifi
