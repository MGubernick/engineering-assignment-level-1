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

  componentDidMount () {
    const { match } = this.props

    showProduct(match.params.id)
      .then(res => {
        // console.log('this is res', res)
        this.setState({ plan: res.data })
      })
      .catch(err => {
        console.error('Something went wrong: ', err.message)
      })

      indexProducts()
      .then(res => {
        this.setState({ price: res.data })
      })
      .catch(error => {
        console.error('Something went wrong:', error.message)
      })
  }

  render () {
    const { plan, back } = this.state

    // console.log('this is plan', plan)
    // console.log('this is price:', price)

    if (back) {
      return (
        <Redirect to={'/api/v1/products'} />
      )
    }

    if (!plan) {
      return 'Loading...'
    }

    const planDisplay = (
      <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
          <Card key={plan[1].id}
            className="show-plan"
            style={{ backgroundColor: '#f6f6f6', border: '1px solid', borderRadius: '12px', display: 'flex', marginLeft: '5px', marginRight: '5px', marginBottom: '20px', marginTop: '20px', padding: '10px', width: '550px' }} >
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
                  <Card.Subtitle style={{ fontSize: '15px', margin: '13px 0px 13px 0px', paddingLeft: '20px' }}>{plan[1].label}</Card.Subtitle>
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