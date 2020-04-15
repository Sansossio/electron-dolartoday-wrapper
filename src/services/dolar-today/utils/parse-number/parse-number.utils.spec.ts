import { parseNumber } from './parse-number.utils'

describe('Parse number', () => {
  it('should return-1 when the value isnt a number or a string', () => {
    const value: any = {}
    expect(parseNumber(value)).toEqual(-1)
  })

  it('should return the same number when value is a number', () => {
    const value = 1
    const response = parseNumber(value)
    expect(response).toEqual(value)
  })

  it('should remove all the points and return a number', () => {
    const value = '1.000.000'
    const response = parseNumber(value)
    expect(response).toEqual(1000000)
  })
})
