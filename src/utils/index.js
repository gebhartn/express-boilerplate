import winston from 'winston'
import makeLogger from './logger'

export const logger = makeLogger({ winston })
export { logger as log }
