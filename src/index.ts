import { BrowserWindow, app } from 'electron'
import * as dotenv from 'dotenv'
import { baseUrl } from './url/base-url'

dotenv.config()

app.on('ready', () => {
  const main = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  main.loadURL(baseUrl())
  main.webContents.openDevTools()
})
