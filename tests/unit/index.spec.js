import { helloWorld, throwsError } from '../../src'

describe(`Project Root`, () => {
  describe(`helloWorld function`, () => {
    test(`Should return 'Hello, world!' with no argument`, () => {
      const result = helloWorld()

      expect(result).toBe(`Hello, world!`)
    })

    test(`Should return 'Hello, Nick!' with argument 'Nick'`, () => {
      const result = helloWorld(`Nick`)

      expect(result).toBe(`Hello, Nick!`)
    })
  })

  describe(`throwsError function`, () => {
    test(`Should throw an error`, () => {
      expect(() => throwsError()).toThrow(`We have thrown an error`)
    })
  })
})
