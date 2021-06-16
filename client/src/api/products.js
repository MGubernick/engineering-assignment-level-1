// import axios
import axios from 'axios'

// declare the apiUrl
const apiUrl = 'http://localhost:5000'

// Index Products
export const indexProducts = async ()  => {
  return axios({
    url: apiUrl + '/api/v1/products',
    method: 'GET'
  })
}

// Show One Product
export const showProduct = async (id) => {
  return axios({
    url: apiUrl + '/api/v1/product/' + id,
    method: 'GET'
  })
}
