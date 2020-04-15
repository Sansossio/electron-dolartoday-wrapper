import * as React from 'react'

const isDev = window.require('electron-is-dev')

export const HelloComponent = () => {
  return (
    <div>
      <h2>
        Electron, typescript and react!
      </h2>
      <p>
        Is dev: {isDev.toString()}
      </p>
    </div>
  )
}
