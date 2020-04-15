import { BrowserWindow, app } from 'electron'
import * as dotenv from 'dotenv'
import { baseUrl } from './url/base-url'

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
  main.webContents.openDevTools()
})
