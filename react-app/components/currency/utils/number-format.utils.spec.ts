import { numberFormat } from './number-format.utils'

describe('Concurrency number format', () => {
  it('should return -1 when value isnt a number', () => {
    const value: any = ''
    expect(numberFormat(value)).toEqual(-1)
  })

  it('should return a number formatted', () => {
    expect(numberFormat(1)).toEqual('1')
  })
})
