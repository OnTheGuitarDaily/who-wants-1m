import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main className='px-5 col-12 mx-auto  d-flex align-items-center justify-content-center flex-column text-light'>
      <h1>Who Wants to Become a Millionaire</h1>
      <p>Welcome to a simplified version of the 'Who Wants to Be a Millionaire' game.</p>
      <p>Click the button below to start the game. Good luck!</p>
      <Link to={'Questions'} className='btn btn-primary' >
        Start
      </Link>
    </main>
  );
}

