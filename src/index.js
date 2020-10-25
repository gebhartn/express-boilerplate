import { logger } from './utils'

export function helloWorld(name = `world`) {
  logger.info(`Hello, ${name}!`)
  return `Hello, ${name}!`
}

export function throwsError() {
  throw new Error(`We have thrown an error`)
}

helloWorld()
