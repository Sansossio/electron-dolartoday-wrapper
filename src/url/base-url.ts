import * as isDev from 'electron-is-dev'
import { format } from 'url'
import { join } from 'path'

export function baseUrl () {
  if (isDev) {
    return 'http://localhost:3000'
  }
  return format({
    pathname: (join(__dirname, '..', '..', 'build', 'index.html')),
    protocol: 'file',
    slashes: true
  })
}
