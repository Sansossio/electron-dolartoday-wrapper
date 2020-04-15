import { DolarTodayDto } from '../dto/dolar-today.dto'
import { DolarTodayCurrency } from '../dto/sub-dto/dolar-today.currency.dto'
import { parseNumber } from '../utils/parse-number/parse-number.utils'

function extractConcurrency (data: any): DolarTodayCurrency {
  return {
    price: parseNumber(data.dolartoday),
    transfer: parseNumber(data.transferencia),
    cash: parseNumber(data.efectivo),
    average: parseNumber(data.promedio),
    cencoex: parseNumber(data.cencoex),
    sicad1: parseNumber(data.sicad1),
    sicad2: parseNumber(data.sicad2),
    bitcoin: parseNumber(data.bitcoin_ref)
  }
}

function parseDate (epoch: number) {
  const date = new Date(0)
  date.setUTCSeconds(epoch)
  return date
}

export function dolarTodayMapper (data: any): DolarTodayDto {
  return {
    timestamp: parseDate(+data._timestamp.epoch),
    usd: extractConcurrency(data.USD),
    eur: extractConcurrency(data.EUR),
    bcv: {
      timestamp: new Date(+data.BCV.fecha),
      usd: parseNumber(data.BCV.reservas)
    },
    eurDollarRate: parseNumber(data.EURUSD.rate)
  }
}
