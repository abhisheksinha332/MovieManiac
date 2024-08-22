import React from 'react'

const MovieCard = ({star, movie}) => {

  

  
  return (
    <>

    <a href='' target="_blank" className='movie_card'>
        <img src={movie.attributes.posterImage.large} alt='movie poster'className='movie_poster'></img>
        <div className="movie_details">
            <h3 className='movie_details_heading'>{movie.attributes.slug}</h3>
            <div className="movie_date_rate">
                <p>{movie.attributes.startDate}</p>
                <p> {(movie.attributes.averageRating / 10).toFixed(1)}<img src={star} alt='' className='card_emoji'></img></p>
                </div>
                <p className="movie_descroption">
                    {movie.attributes.synopsis.slice(0,100)+"..."}
                </p>
        </div>
    </a>
    </> 
    
  )

}

export default MovieCard