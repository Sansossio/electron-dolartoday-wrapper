import { DolarTodayCurrency } from './sub-dto/dolar-today.currency.dto'
import { DolarTodayBCV } from './sub-dto/dolar-today.bcv.dto'

export class DolarTodayDto {
  timestamp!: Date
  usd!: DolarTodayCurrency
  eur!: DolarTodayCurrency
  bcv!: DolarTodayBCV
  eurDollarRate!: number
}
