import React from 'react'
import FilmCard from './components/FilmCard'

const App = () => (
  <div className="App">
    <div className="container-fluid banner">
      <div className="container">
        <div className="col-12">
          <h1>Iron<strong>Films</strong></h1>
        </div>
      </div>
    </div>
    <div className="container movies-info">
        <FilmCard />
    </div>
  </div>
)

export default App
