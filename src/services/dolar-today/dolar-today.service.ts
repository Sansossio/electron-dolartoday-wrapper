import axios from 'axios'
import { DolarTodayDto } from './dto/dolar-today.dto'
import { dolarTodayMapper } from './mapper/dolar-today.mapper'

const DATA_URL = 'https://s3.amazonaws.com/dolartoday/data.json'

export class DolarTodayService {
  static async getData (): Promise<DolarTodayDto> {
    const { data } = await axios({
      url: DATA_URL,
      method: 'GET'
    })
    return dolarTodayMapper(data)
  }
}
