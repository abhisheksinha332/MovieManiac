import React from 'react'

const MovieCard = ({star}) => {
  return (
    <a href='' className='movie_card'>
        <img src='https://c8.alamy.com/comp/F762XE/film-movie-poster-of-titanic-F762XE.jpg' alt='movie poster'
         className='movie_poster'></img>
        <div className="movie_details">
            <h3 className='movie_details_heading'>Movie Name</h3>
            <div className="movie_date_rate">
                <p>31-10-1999</p>
                <p>8.0 <img src={star} alt='' className='card_emoji'></img></p>
                </div>
                <p className="movie_descroption">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia maiores accusamus optio est at blanditiis!
                </p>
        </div>
    </a>
  )
}

export default MovieCard