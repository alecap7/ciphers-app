import { alphabetKeys } from '@alecap7/ciphers-js'

// max excluded
export const randomInteger = (max: number = 10): number => {
  return Math.floor(Math.random() * max)
}

export const randomString = (length: number = 1000, charset: string[] = alphabetKeys): string => {
  let result = ''

  for (let index = 0; index < length; index++) {
    const randomIndex = randomInteger(charset.length)
    result += charset[randomIndex]
  }

  return result
}
