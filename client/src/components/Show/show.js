import React, { Component } from 'react'

// import Redirect to utilize 'back' button
// import withRouter to have access to the match.params for the id query
import { Redirect, withRouter } from 'react-router-dom'

// import both of the API calls for the details and the price accordingly
import { showProduct, indexProducts } from './../../api/products.js'

// import components from react-bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class OnePlan extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: null,
      price: null,
      back: false,
      showModal: true
    }
  }

  // function to return to the landing page once the back button is clicked
  backToMain = event => {
    this.setState({ back: true })
  }

  // write the componentDidMount as an asynchronous function so that both API routes can
  // be hit at the same time without timing getting in the way - allowing both states (plan & price) to be set
  // before anything is displayed
  async componentDidMount () {
    // deconstruct match from props to get the id query form the url
    const { match } = this.props

    try {
      const planRes = await showProduct(match.params.id)
      this.setState({ plan: planRes.data })
      const priceRes = await indexProducts()
      if (this.state.plan[0] === 'basic') {
        this.setState({ price: priceRes.data[0].price })
      } else if (this.state.plan[0] === 'intermediate') {
        this.setState({ price: priceRes.data[1].price })
      } else if (this.state.plan[0] === 'enterprise') {
        this.setState({ price: priceRes.data[2].price })
      }
    } catch (err) {
      // log the error message if anything goes wrong
      console.error('Something went wrong: ', err.message)
    }
  }

  render () {
    const { plan, back, price, showModal } = this.state

    // test to see what the states are (plan & price)
    // console.log('this is plan', plan)
    // console.log('this is price:', price)

    // if back button is clicked and state is set to 'true' return to the landing page
    if (back) {
      return (
        <Redirect to={'/api/v1/products'} />
      )
    }

    // if there is no plan after the API call -> display 'Loading...'
    if (!plan) {
      return (
        <div>
          <h2 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Loading...</h2>
        </div>
      )
    }

    return (
      <Modal
            show={showModal}
            backdrop="static"
            keyboard={false}
            style={{ }}
          >
          <Card key={plan[1].id}
            className="show-plan"
            style={{ backgroundColor: '#f6f6f6', border: '1px solid', borderRadius: '4px', boxShadow: '10px 11px 8px -5px #414141', display: 'flex', padding: '10px', width: '620px' }} >
            <Card.Body className="card-body" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
              <div>
              <Button onClick={this.backToMain} style={{  alignItems: 'center', backgroundColor: '#f6f6f6', borderColor: '#000', color: '#000', display: 'flex', fontSize: '20px', height: '30px', width: '45px' }}><strong>&#x2190;</strong></Button>
                <div style={{ width: '200px' }}>
                  {/* card titles will need individual styling to look consistent based on length of words, using a ternary operator will help */}
                  {plan[1].id === 'basic' ? <Card.Title style={{ fontFamily: 'cursive', fontSize: '50px', textTransform: 'capitalize', paddingLeft: '220px', width: '425px' }}>{plan[1].id}</Card.Title> : null}
                  {plan[1].id === 'intermediate' ? <Card.Title style={{ fontFamily: 'cursive', fontSize: '50px', textTransform: 'capitalize', paddingLeft: '150px', width: '425px' }}>{plan[1].id}</Card.Title> : null}
                  {plan[1].id === 'enterprise' ? <Card.Title style={{ fontFamily: 'cursive', fontSize: '50px', textTransform: 'capitalize', paddingLeft: '170px', width: '425px' }}>{plan[1].id}</Card.Title> : null}
                  {/* determine which plan the user is looking at and apply the correct image */}
                  {plan[1].id === 'basic' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '200px', marginLeft: '140px', width: '300px' }} src={'https://imgur.com/k085ej4.png'} /> : null}
                  {plan[1].id === 'intermediate' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '200px', marginLeft: '140px', width: '300px' }} src={'https://imgur.com/YlMbzRd.png'} /> : null}
                  {plan[1].id === 'enterprise' ? <Card.Img variant="top" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '200px', marginLeft: '140px', width: '300px' }} src={'https://imgur.com/iyql7MJ.png'} /> : null}
                  <Card.Subtitle style={{ fontSize: '15px', margin: '13px 0px 13px 0px', paddingLeft: '20px' }}>{plan[1].label}: <strong>${price}</strong></Card.Subtitle>
                </div>
                  <Card.Text style={{ paddingLeft: '20px' }}><strong>Features Include: </strong></Card.Text>
                <div style={{ border: '1px solid black', borderRadius: '9px', margin: '0px 20px 20px 20px', width: '510px' }}>
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
      </Modal>
    )
  }
}

export default withRouter(OnePlan)