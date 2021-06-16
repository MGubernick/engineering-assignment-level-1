// import Fragment to use rather than div in return
import React, { Fragment } from 'react'
// import { Explainer } from "../components/Explainer"

// import the Landing page to display upon startup
import Landing from '../components/Landing/landing'

function Home() {
  return (
    <Fragment>
      {/* comment out the Explainer so that I can uncomment and reference as needed*/}
      {/* <Explainer /> */}
      <Landing />
    </Fragment>
  )
}

export default Home
