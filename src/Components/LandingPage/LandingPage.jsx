import React from 'react'
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <div>
      <h1>Who Wants To Become A MILIONARE</h1>
      <p>TO start The game simply click the button</p>
      <Link to={'Questions'}>Start</Link>
    </div>
  )
}
