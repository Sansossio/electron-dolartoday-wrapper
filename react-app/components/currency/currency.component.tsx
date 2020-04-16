import * as React from 'react'
import { ICurrency } from './currency.component.props'
import { numberFormat } from './utils/number-format.utils'

import './currency.scss'

export function CurrencyComponent ({ data, name, rate }: ICurrency) {
  return (
    <div className='currency'>
      <div id='title'>{name}</div>
      <p>Price: <b>{numberFormat(data.price)} Bs</b> {rate && `(x ${numberFormat(rate)} USD)`}</p>
      <hr />
      <p>Transfer: {numberFormat(data.transfer)} Bs</p>
      <p>Cash: {numberFormat(data.cash)} Bs</p>
    </div>
  )
}
