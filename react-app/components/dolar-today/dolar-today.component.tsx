import * as React from 'react'
import { IDolarTodayProps } from './props/dolar-today.component.props'
import { dateFormat, minutesAgo } from './utils/date-format.utils'
import { CurrencyComponent } from '../currency/currency.component'

import './dolar-today.scss'
import { numberFormat } from '../currency/utils/number-format.utils'

export class DolartodayComponent extends React.Component<IDolarTodayProps, {}> {
  render () {
    const {
      data: {
        timestamp,
        usd,
        eur,
        bcv,
        eurDollarRate
      }
    } = this.props
    return (
      <div>
        <div>
          <b>Date:</b> {dateFormat(timestamp)} ({minutesAgo(timestamp)} minutes ago)
          </div>
        <hr/>
        <div id='bcv'>
          <b>BCV</b> has {numberFormat(bcv.usd)} USD (reserves)
        </div>
        <hr/>
        <div id='currencies'>
          <CurrencyComponent data={usd} name='USD'/>
          <CurrencyComponent data={eur} name='EUR' rate={eurDollarRate}/>
        </div>
      </div>
    )
  }
}
