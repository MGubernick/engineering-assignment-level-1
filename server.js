// require express
const express = require("express")
// require cors
const cors = require("cors")

// require route file
const productRoutes = require('./client/routes/product_routes.js')

// require middleware
const requestLogger = require('./lib/requestLogger')

// define the port
const serverDevPort = 5000
const clientDevPort = 3000

const app = express()

// set CORS headers
app.use(cors({ origin: `http://localhost:${clientDevPort}` }))

const port = serverDevPort

// // 'express.json' middleware to parse JSON requests into JS objects
app.use(express.json())

// use request logger to log each request as it comes in (for debugging purposes )
app.use(requestLogger)

// register route files
app.use(productRoutes)

// run API on port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = app
