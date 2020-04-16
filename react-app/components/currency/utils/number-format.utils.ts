export function numberFormat (value: number) {
  if (typeof value !== 'number') {
    return -1
  }
  return value.toLocaleString()
}
