import * as React from 'react'

import logo from '../../assets/img/logo.png'
import './header.scss'

export function HeaderComponent (props: { children: any }) {
  return (
    <header>
      <div id='logo'>
        <img src={logo} />
      </div>
      <div id='reload'>
        {props.children}
      </div>
    </header>
  )
}
