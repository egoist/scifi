function randomFromCharCode(charCode, limit) {
  return String.fromCharCode(charCode + Math.round(Math.random() * limit))
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandom(str) {
  return str[getRandomInt(0, str.length)]
}

const az = 'abcdefghijklmnopqrstuvwxyz'
const AZ = az.toUpperCase()

function getRandomChar(chars) {
  switch (chars) {
    // English
    case '[en]':
      return randomFromCharCode(33, 99)

    // Japanese
    case '[kanji]':
      return randomFromCharCode(19968, 80)

    // Japanese hiragana
    case '[hiragana]':
      return randomFromCharCode(12352, 50)

    // Japanese katakana
    case '[katakana]':
      return randomFromCharCode(12448, 84)

    // Ukrainian
    case '[ua]':
      return randomFromCharCode(1040, 55)

    case '[a-z]':
      return getRandom(az)

    case '[A-Z]':
      return getRandom(AZ)

    case '[a-zA-Z]':
      return getRandom(az + AZ)

    case '[number]':
      return getRandom('0123456789')

    default:
      return getRandom(chars)
  }
}

export default getRandomChar
