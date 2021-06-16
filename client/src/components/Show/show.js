import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showProduct, indexProducts } from './../../api/products.js'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class OnePlan extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: null,
      price: null,
      back: false
    }
  }

  backToMain = event => {
    this.setState({ back: true })
  }

  async componentDidMount () {
    const { match } = this.props

    try {
      const planRes = await showProduct(match.params.id)
      await this.setState({ plan: planRes.data })
      const priceRes = await indexProducts()
      if (this.state.plan[0] === 'basic') {
        this.setState({ price: priceRes.data[0].price })
      } else if (this.state.plan[0] === 'intermediate') {
        this.setState({ price: priceRes.data[1].price })
      } else if (this.state.plan[0] === 'enterprise') {
        this.setState({ price: priceRes.data[2].price })
      }
    } catch (err) {
      console.error('Something went wrong: ', err.message)
    }
  }

  render () {
    // const { plan, back } = this.state
    const { plan, back, price } = this.state

    // console.log('this is plan', plan)
    // console.log('this is price:', price)

    if (back) {
      return (
        <Redirect to={'/api/v1/products'} />
      )
    }

    if (!plan) {
      return (
        <div>
          <h2 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Loading...</h2>
        </div>
      )
    }

    const planDisplay = (
      <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
          <Card key={plan[1].id}
            className="show-plan"
            style={{ backgroundColor: '#f6f6f6', border: '1px solid', borderRadius: '12px', boxShadow: '10px 11px 8px -5px #414141', display: 'flex', marginLeft: '5px', marginRight: '5px', marginBottom: '20px', marginTop: '20px', padding: '10px', width: '570px' }} >
            <Card.Body className="card-body" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
              <div>
              <Button onClick={this.backToMain} style={{ fontSize: '20px', height: '30px', marginLeft: '20px', paddingBottom: '5px' }}><strong>&#x2190;</strong></Button>
                <div style={{ width: '200px' }}>
                  {plan[1].id === 'basic' ? <Card.Title style={{ fontFamily: 'cursive', fontSize: '80px', textTransform: 'capitalize', paddingLeft: '200px' }}>{plan[1].id}</Card.Title> : null}
                  {plan[1].id === 'intermediate' ? <Card.Title style={{ fontFamily: 'cursive', fontSize: '80px', textTransform: 'capitalize', paddingLeft: '70px' }}>{plan[1].id}</Card.Title> : null}
                  {plan[1].id === 'enterprise' ? <Card.Title style={{ fontFamily: 'cursive', fontSize: '80px', textTransform: 'capitalize', paddingLeft: '120px' }}>{plan[1].id}</Card.Title> : null}
                  {plan[1].id === 'basic' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '200px', marginLeft: '140px', width: '300px' }} src={'https://imgur.com/k085ej4.png'} /> : null}
                  {plan[1].id === 'intermediate' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '200px', marginLeft: '140px', width: '300px' }} src={'https://imgur.com/YlMbzRd.png'} /> : null}
                  {plan[1].id === 'enterprise' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '200px', marginLeft: '140px', width: '300px' }} src={'https://imgur.com/iyql7MJ.png'} /> : null}
                  <Card.Subtitle style={{ fontSize: '15px', margin: '13px 0px 13px 0px', paddingLeft: '20px' }}>{plan[1].label}: <strong>${price}</strong></Card.Subtitle>
                </div>
                  <Card.Text style={{ paddingLeft: '20px' }}><strong>Features Include: </strong></Card.Text>
                <div style={{ border: '1px solid black', borderRadius: '9px', margin: '0px 20px 20px 20px', width: '500px' }}>
                  <Card.Text style={{ fontSize: '13px', whiteSpace: 'pre' }}>
                  {plan[1].features.map(feature => {
                    return (
                    `
                    - ${feature}
                    `
                    ) 
                  })}
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
    )

    return (
      <div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        </div>
        <div>
          {planDisplay}
        </div>
      </div>
    )
  }
}

export default withRouter(OnePlan)