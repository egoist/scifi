import getRandomChar from './getRandomChar'

const ATTR = 'data-scifing'

function scifi(el, { content, chars = '[en]', speed = 20, delay = 100 } = {}) {
  if (el.getAttribute(ATTR)) return

  content = content || el.textContent
  el.setAttribute(ATTR, true)
  let finished = 0
  let finishedString = ''

  const finishedTimer = setInterval(() => {
    finishedString += content[finished++]
  }, delay)

  const randomTimer = setInterval(() => {
    let randomString = ''
    for (let i = 0; i < content.length - finished; i++) {
      // Ignore space
      randomString += content[i + finished] === ' ' ? ' ' : getRandomChar(chars)
    }
    el.textContent = finishedString + randomString

    if (finished === content.length) {
      clearInterval(finishedTimer)
      clearInterval(randomTimer)
      el.removeAttribute(ATTR)
    }
  }, speed)
}

export default scifi
