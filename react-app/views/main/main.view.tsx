import * as React from 'react'
import { LoadingComponent } from '../../components/loading/loading.component'
import { IMainViewState } from './main.view.state'
import { DolartodayComponent } from '../../components/dolar-today/dolar-today.component'

import './main.view.scss'
import { HeaderComponent } from '../../components/header/header'

const { ipcRenderer } = window.require('electron')

const dolarTodayEvents = {
  DOLARTODAY_DATA: 'DOLARTODAY_DATA',
  DOLARTODAY_DATA_ERROR: 'DOLARTODAY_DATA_ERROR'
}

export class MainView extends React.Component<{}, IMainViewState> {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      data: null,
      error: null
    }
  }

  componentDidMount () {
    this.requestDolartodayData()
    this.bindDolartodayEvents()
  }

  private requestDolartodayData () {
    this.setState({ loading: true, error: null })
    ipcRenderer.send(dolarTodayEvents.DOLARTODAY_DATA)
  }

  private bindDolartodayEvents () {
    ipcRenderer.on(dolarTodayEvents.DOLARTODAY_DATA, (_, data) => {
      this.setState({ data, loading: false })
    })

    ipcRenderer.on(dolarTodayEvents.DOLARTODAY_DATA_ERROR, (_, error) => {
      this.setState({ error })
    })
  }

  private renderData () {
    const { error, loading, data } = this.state
    if (error) {
      return (
        <div>
          <p><b>An error has occurred:</b> {error}</p>
        </div>
      )
    }
    if (loading) {
      return <LoadingComponent/>
    }
    return <DolartodayComponent data={data} />
  }

  render () {
    const { loading } = this.state
    return (
      <>
        <HeaderComponent>
          {!loading && (
            <p>
              <button onClick={() => this.requestDolartodayData()}>Reload</button>
            </p>
          )}
        </HeaderComponent>
        {this.renderData()}
      </>
    )
  }
}
