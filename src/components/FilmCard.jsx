import React from 'react'
import Films from '../data/films.json'

function FilmCard() {
    const renderFilm = Films.map((film)=> {
        const rating = (arr) => ((arr.reduce((a, b) => a + b))/arr.length).toFixed(1)
        const deleteFilm = (event) => {console.log(event.target)}

        if(rating(film.ratings) > 6.0) {
            return(
                <div className='col-4' style={{background:'yellow'}} key={film.id}>
                    <button onClick={() => deleteFilm()}>DELETE</button>
                    <img src={film.posterurl} alt='poster'/>
    
                    <div>{film.genres.map((genre, i) => {
                        if (genre === 'Drama') {
                            return (<p style={{background:'gray'}} key={i}>{genre}</p>)
                        }else if(genre === 'Action' || genre === 'Animation' || genre === 'Romance') {
                            return (<p style={{background:'red'}} key={i}>{genre}</p>)
                        }else if(genre === 'Adventure' || genre === 'Fantasy') {
                            return (<p style={{background:'green'}} key={i}>{genre}</p>)
                        }else if(genre === 'Crime' || genre === 'Horror') {
                            return (<p style={{background:'yellow'}} key={i}>{genre}</p>)
                        }else{
                            return (<p style={{background:'blue'}} key={i}>{genre}</p>)
                        }
                    })}</div>
    
                    <h1>{film.title}</h1>
                    <p>{film.storyline}</p>
                    <p>{film.year}</p>
                    <p>{rating(film.ratings)}</p>
                </div>       
            )

        }else{
            return(
                <div className='col-4' key={film.id}>
                    <button onClick={(e) => deleteFilm(e)}>DELETE</button>
                    <img src={film.posterurl} alt='poster'/>
    
                    <div>{film.genres.map((genre, i) => {
                        if (genre === 'Drama') {
                            return (<p style={{background:'gray'}} key={i}>{genre}</p>)
                        }else if(genre === 'Action' || genre === 'Animation' || genre === 'Romance') {
                            return (<p style={{background:'red'}} key={i}>{genre}</p>)
                        }else if(genre === 'Adventure' || genre === 'Fantasy') {
                            return (<p style={{background:'green'}} key={i}>{genre}</p>)
                        }else if(genre === 'Crime' || genre === 'Horror') {
                            return (<p style={{background:'yellow'}} key={i}>{genre}</p>)
                        }else{
                            return (<p style={{background:'blue'}} key={i}>{genre}</p>)
                        }
                    })}</div>
    
                    <h1>{film.title}</h1>
                    <p>{film.storyline}</p>
                    <p>{film.year}</p>
                    <p>{rating(film.ratings)}</p>
                </div>       
            )
        }
        
    })
    return (
        <div className='container'>
            <div className='row'>{renderFilm}</div>
        </div>
    )
}

export default FilmCard;