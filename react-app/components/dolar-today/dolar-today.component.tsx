import * as React from 'react'
import { IDolarTodayProps } from './props/dolar-today.component.props'

export class DolartodayComponent extends React.Component<IDolarTodayProps, {}> {
  render () {
    const { data } = this.props
    return (
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    )
  }
}
