// import react along with Component and Fragment 
// using Fragment as a cleaner display than a div in the return
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

// import Home
import Home from './pages/Home'

// import plan components
import Show from './components/Show/show'

// import Layout component for consistency
import { Layout } from './components/Layout'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Fragment>
        <Layout>
          <main className="container">
            <Route exact path='/api/v1/products' render={() => (
              <Home />
            )} />
            <Route exact path='/api/v1/product/:id' render={() => (
              <Show />
            )} />
          </main>
        </Layout>
      </Fragment>
    )
  }
}

export default App
