import * as React from 'react'
import { IDolarTodayProps } from './props/dolar-today.component.props'
import { dateFormat, minutesAgo } from './utils/date-format.utils'

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
        <p><b>Date:</b> {dateFormat(timestamp)} ({minutesAgo(timestamp)} minutes ago)</p>
      </div>
    )
  }
}
