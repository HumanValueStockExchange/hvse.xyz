// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to the HVSE foundation website!</h1>
      <Link to="/about">About</Link>
      <p>The site is actually under construction.</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
