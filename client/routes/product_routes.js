const express = require('express')
const fs = require('fs')

// creating the a router for modular code
const router = express.Router()

// data sets (hard coded in data-prices.json & data-details.json)
// const products = require('../../data-prices.json')
// const productDetails = require('../../data-details.json')

// Index All Products Route
// This will index all of the payment plans in 'data-prices.json'
router.get('/api/v1/products', (req, res) => {
  // Send back the `products` object.
  const data = JSON.parse(fs.readFileSync('data-prices.json'))
  res.send(data)
  res.end( data )
})


router.get('/api/v1/product/:id', (req, res) => {
  // Send back the `productDetails` object corresponding to
  // the passed in `id` query parameter.
  
  // Get the correct id from the params
  const id = req.params.id
  let showOne

  const data = JSON.parse(fs.readFileSync('data-details.json'))
  for (const [key, value] of Object.entries(data)) {
    if (key === id) {
      showOne = [key, value]
    }
  }
  res.send(showOne)
  res.end( data )
})


module.exports = router