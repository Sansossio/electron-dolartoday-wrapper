export function parseNumber (value: string | number) {
  if (typeof value === 'number') {
    return value
  }
  if (typeof value === 'string') {
    return +value.replace(/\./g, '')
  }
  return -1
}
