import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/UI/Card'


function About() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>Version 1.0.0</p>
      <Link to={{pathname: '/'}}>Back To Home</Link>
    </Card>
  )
}

export default About