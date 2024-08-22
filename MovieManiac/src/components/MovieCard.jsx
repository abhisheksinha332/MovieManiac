import React from 'react'

const MovieCard = ({star, anime}) => {

  

  
  return (
    <>

    <a href='' target="_blank" className='movie_card'>
        <img src={anime.attributes.posterImage.large} alt='movie poster'className='movie_poster'></img>
        <div className="movie_details">
            <h3 className='movie_details_heading'>{anime.attributes.slug}</h3>
            <div className="movie_date_rate">
                <p>{anime.attributes.startDate}</p>
                <p> {(anime.attributes.averageRating / 10).toFixed(1)}<img src={star} alt='' className='card_emoji'></img></p>
                </div>
                <p className="movie_descroption">
                    {anime.attributes.synopsis.slice(0,100)+"..."}
                </p>
        </div>
    </a>
    </> 
    
  )

}

export default MovieCard