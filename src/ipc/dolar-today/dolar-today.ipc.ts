import { ipcMain } from 'electron'
import { DolarTodayService } from '../../services/dolar-today/dolar-today.service'

export const dolarTodayEvents = {
  DOLARTODAY_DATA: 'DOLARTODAY_DATA',
  DOLARTODAY_DATA_ERROR: 'DOLARTODAY_DATA_ERROR'
}

export function DolarTodayIpc () {
  ipcMain.on(dolarTodayEvents.DOLARTODAY_DATA, async (event) => {
    try {
      const data = await DolarTodayService.getData()
      event.reply(dolarTodayEvents.DOLARTODAY_DATA, data)
    } catch (e) {
      event.reply(dolarTodayEvents.DOLARTODAY_DATA_ERROR, e.message)
    }
  })
}
