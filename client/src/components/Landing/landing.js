import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

import { indexProducts } from './../../api/products'

class LandingPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  handleSearchOne = (id, event) => {
    const { history } = this.props

    history.push(`/api/v1/product/${id}`)
  }

  componentDidMount () {
    // const { products } = this.state

    indexProducts()
      .then(res => {
        // console.log('this is res:', res)
        this.setState({ products: res.data })
      })
      .catch(error => {
        console.error('Something went wrong:', error.message)
      })
  }

  render () {
    let productJsx

    const { products } = this.state
    // console.log('this is products at render:', products)

    if (!products) {
      return (
        <div>
          <h2 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Loading...</h2>
        </div>
      )
    }

    productJsx = products.map(plan => (
      <Card key={plan.id}
        onClick={(event) => {
          this.handleSearchOne(plan.id, event)
        }}
        border="primary"
        className='index-bg style-card' style={{ alignItems: 'center', backgroundColor: '#f6f6f6', border: '1px solid black', borderRadius: '5px', boxShadow: '10px 11px 8px -5px #414141', display: 'flex', height: '250px', margin: '30px', padding: '80px', width: '300px' }}>
        <Card.Body>
          <Card.Title style={{ alignItems: 'center', display: 'flex', fontSize: '30px', fontFamily: 'cursive', justifyContent: 'center', textTransform: 'capitalize' }}>{plan.id}</Card.Title>
          {plan.id === 'basic' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '90px', width: '150px' }} src={'https://imgur.com/k085ej4.png'} /> : null}
          {plan.id === 'intermediate' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '90px', width: '150px' }} src={'https://imgur.com/YlMbzRd.png'} /> : null}
          {plan.id === 'enterprise' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '90px', width: '150px' }} src={'https://imgur.com/iyql7MJ.png'} /> : null}
          <Card.Subtitle className="mb-2 text-muted">{plan.label}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"><strong>${plan.price}</strong></Card.Subtitle>
        </Card.Body>
      </Card>
    ))

    return (
      <div style={{ alignContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div className='plans-display' style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: 'cursive', fontSize: '60px', marginBottom: '0px'}}>Pick Your Plan!</h2>
          <p style={{ marginTop: '0px' }}>(click on a plan to see full details)</p>
        </div>
        <ul>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', whiteSpace: 'pre-wrap' }}>
            {productJsx}
          </div>
        </ul>
      </div>
    )
  }
}

export default withRouter(LandingPage)
// export default LandingPage
