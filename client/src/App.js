import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

// import Home
import Home from './pages/Home'

// import plan components
import Show from './components/Show/show'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Fragment>
        <main className="container">
          <Route exact path='/api/v1/products' render={() => (
            <Home />
          )} />
          <Route exact path='/api/v1/product/:id' render={() => (
            <Show />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
