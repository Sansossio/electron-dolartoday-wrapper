import { BrowserWindow, app } from 'electron'
import * as isDev from 'electron-is-dev'
import * as dotenv from 'dotenv'
import { baseUrl } from './url/base-url'
import { initIpc } from './ipc'

dotenv.config()

const APP_TITLE = 'Dolartoday - Loading'

app.on('ready', () => {
  const main = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  main.loadURL(baseUrl())
  main.setTitle(APP_TITLE)
  main.removeMenu()
  if (isDev) {
    main.webContents.openDevTools()
  }
  initIpc()
})
