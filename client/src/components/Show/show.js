import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showProduct } from './../../api/products.js'

import Card from 'react-bootstrap/Card'

class OnePlan extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: null
    }
  }

  render () {
    return (
      <div>
        
      </div>
    )
  }
}

export default withRouter(OnePlan)