import * as React from 'react'
import { LoadingComponent } from '../../components/loading/loading.component'
import { IMainViewState } from './main.view.state'

export class MainView extends React.Component<{}, IMainViewState> {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      data: null
    }
  }

  render () {
    const { loading, data } = this.state
    if (loading) {
      return <LoadingComponent/>
    }
    return (
      <div>
        Main view
      </div>
    )
  }
}
