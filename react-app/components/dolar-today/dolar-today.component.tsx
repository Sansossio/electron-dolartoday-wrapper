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
    const date = dateFormat(timestamp)
    const minutesDiff = minutesAgo(timestamp)
    return (
      <div>
        <p><b>Date:</b> {date} ({minutesDiff} minutes ago)</p>
      </div>
    )
  }
}
