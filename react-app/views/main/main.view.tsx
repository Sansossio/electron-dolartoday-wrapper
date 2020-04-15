import * as React from 'react'
import { LoadingComponent } from '../../components/loading/loading.component'
import { IMainViewState } from './main.view.state'
import { DolartodayComponent } from '../../components/dolar-today/dolar-today.component'

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
    this.setState({ loading: true })
    ipcRenderer.send(dolarTodayEvents.DOLARTODAY_DATA)
  }

  private bindDolartodayEvents () {
    ipcRenderer.on(dolarTodayEvents.DOLARTODAY_DATA, (_, data) => {
      this.setState({ data, loading: false, error: null })
    })

    ipcRenderer.on(dolarTodayEvents.DOLARTODAY_DATA_ERROR, (_, error) => {
      this.setState({ error })
    })
  }

  private reloadButton () {
    return (
      <p>
        <a href='#' onClick={() => this.requestDolartodayData()}>Reload</a>
      </p>
    )
  }

  private renderError () {
    const { error } = this.state
    return (
      <div>
        <p><b>An error has occurred:</b> {error}</p>
        {this.reloadButton()}
      </div>
    )
  }

  render () {
    const { loading, data, error } = this.state
    if (error) {
      return this.renderError()
    }
    if (loading) {
      return <LoadingComponent/>
    }
    return (
      <div>
        {this.reloadButton()}
        <DolartodayComponent data={data} />
      </div>
    )
  }
}
