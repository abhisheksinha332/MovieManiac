import React from 'react'

import "./App.css"
import Navbar from './components/Navbar'
import fire from './assets/fire.png';
import star from './assets/star.png';
import glow from './assets/glowing-star.png'
import party from './assets/partying-face.png'
import MovieList from './components/MovieList';


const App = () => {
  return (
    <div className='app'>
      <Navbar fire={fire} star={star} party={party} />
      <main>
        <MovieList fire={fire} star={star} />
      </main>
    </div>
  )
}

export default App