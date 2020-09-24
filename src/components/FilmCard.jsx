import React, {useState} from 'react'
import data from '../data/films.json'

const FilmCard = () => {

    const getRates = (arr) => {
        return (arr.reduce((a, b) => a + b) / arr.length).toFixed(1)
    }

    const [dataInfo, setData] = useState(data)

    const removeCard = (id) => {
        console.log(id)
        setData(dataInfo.filter(el => el.id !== id))
    }

    const renderCards = dataInfo.map((movie) => {

        if (getRates(movie.ratings) > 6.0) {
            return (
                <div className="card col-11 p-0 good" key={movie.id}>
                    <button className="delete-card" onClick={() => removeCard(movie.id)}>remove film</button>
                    <div className="card-header" style={{background: `url(${movie.posterurl}) #333 no-repeat center center / cover`}}></div>
                    <div className="card-body">
                        <span className="rates">{getRates(movie.ratings)}<span className="star">★</span></span>
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                            <small>{movie.year}</small>
                            <small>{movie.duration ? movie.duration.replace("PT", "").replace("H", "").replace("M", "M").replace("S", "") : 'N/P'}</small>
                        </p>
                        <p className="card-text">
                            <small>{movie.genres.map((genre, i) => {
                                if (genre === 'Drama') {
                                    return (<span className="label gray" key={i}>{genre}</span>)
                                } else if (genre === 'Action' || genre === 'Animation' || genre === 'Romance') {
                                    return (<span className="label red" key={i}>{genre}</span>)
                                } else if (genre === 'Adventure' || genre === 'Fantasy') {
                                    return (<span className="label green" key={i}>{genre}</span>)
                                } else if (genre === 'Crime' || genre === 'Horror') {
                                    return (<span className="label yellow" key={i}>{genre}</span>)
                                } else {
                                    return (<span className="label blue" key={i}>{genre}</span>)
                                }
                            })}</small></p>
                        <p className="card-text">{movie.storyline}</p>
                        <hr />
                        <p className="card-text actors">
                            <small>{movie.actors.map((actor, i) => {
                                return (
                                    <span key={i}>
                                        {actor}
                                    </span>
                                )
                            })}</small></p>
                    </div>
                </div>)
        } else {
            return (
                <div className="card col-12 p-0" key={movie.id} >
                    <button className="delete-card" onClick={() => removeCard(movie.id)}>remove film</button>
                    <div className="card-header" style={{background: `url(${movie.posterurl}) #333 no-repeat center center / cover`}}></div>
                    <div className="card-body">
                        <span className="rates">{getRates(movie.ratings)}<span className="star">★</span></span>
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                            <small>{movie.year}</small>
                            <small>{movie.duration ? movie.duration.replace("PT", "").replace("H", "").replace("M", "M").replace("S", "") : 'N/P'}</small>
                        </p>
                        <p className="card-text">
                            <small>{movie.genres.map((genre, i) => {
                                if (genre === 'Drama') {
                                    return (<span className="label gray" key={i}>{genre}</span>)
                                } else if (genre === 'Action' || genre === 'Animation' || genre === 'Romance') {
                                    return (<span className="label red" key={i}>{genre}</span>)
                                } else if (genre === 'Adventure' || genre === 'Fantasy') {
                                    return (<span className="label green" key={i}>{genre}</span>)
                                } else if (genre === 'Crime' || genre === 'Horror') {
                                    return (<span className="label yellow" key={i}>{genre}</span>)
                                } else {
                                    return (<span className="label blue" key={i}>{genre}</span>)
                                }
                            })}</small></p>
                        <p className="card-text">{movie.storyline}</p>
                        <hr />
                        <p className="card-text actors">
                            <small>{movie.actors.map((actor, i) => {
                                return (
                                    <span key={i}>
                                        {actor}
                                    </span>
                                )
                            })}</small></p>
                    </div>
                </div>)
        }
    })

    return (
        <div className="card-columns">{renderCards}</div>
    )

}

export default FilmCard

// export default class FilmCard extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             data: data
//         }
//     }

//     delete(item) {
//         console.log(item)
//         const data = this.state.data.filter(i => i.id !== item.id)
//         this.setState(data)
//     }

//     render() {

//         const getRates = (arr) => {
//             return (arr.reduce((a, b) => a + b) / arr.length).toFixed(1)
//         }

//         const renderCards = data.map((movie, i) =>
//             <div className="card col-11 p-0" key={movie.id}>
//                 <button className="delete-card" onClick={this.delete.bind(this, movie)}>remove film</button>
//                 <div className="card-header" style={{background: `url(${movie.posterurl}) #333 no-repeat center center / cover`}}></div>
//                 <div className="card-body">
//                     <span className="rates">{getRates(movie.ratings)}<span className="star">★</span></span>
//                     <h5 className="card-title">{movie.title}</h5>
//                     <p className="card-text">
//                         <small>{movie.year}</small>
//                         <small>{movie.duration ? movie.duration.replace("PT", "").replace("H", "").replace("M", "M").replace("S", "") : 'N/P'}</small>
//                         <small>{movie.genres.map((genre, i) => {
//                             return (
//                                 <span className="label" key={i}>
//                                     {genre}
//                                 </span>
//                             )
//                         })}</small>
//                     </p>
//                     <p className="card-text">{movie.storyline}</p>
//                     <hr />
//                     <p className="card-text">
//                         <small>{movie.actors.map((actor, i) => {
//                             return (
//                                 <span className="label" key={i}>
//                                     {actor}
//                                 </span>
//                             )
//                         })}</small></p>
//                 </div>
//             </div>)


//         return (
//             <div className="card-columns">{renderCards}</div>
//         )
//     }

// }
