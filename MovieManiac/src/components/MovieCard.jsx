import React from 'react'

const MovieCard = ({star, movie}) => {
  return (
    <>

    <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" className='movie_card'>
        <img src={movie.Poster} alt='movie poster'className='movie_poster'></img>
        <div className="movie_details">
            <h3 className='movie_details_heading'>{movie.Title}</h3>
            <div className="movie_date_rate">
                <p>{movie.Year}</p>
                {/* <p>8.0 <img src={star} alt='' className='card_emoji'></img></p> */}
                </div>
                {/* <p className="movie_descroption">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia maiores accusamus optio est at blanditiis!
                </p> */}
        </div>
    </a>
    </> 
    
  )

}

export default MovieCard