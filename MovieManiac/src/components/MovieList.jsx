import React,{useEffect, useState} from 'react'
import MovieCard from './MovieCard'



const MovieList = ({fire, star}) => {

    const [movieData, setMovieData] = useState([])
    useEffect(() => {
                
        Api()

        }, [])
        
        const Api = async()=>{
        const url= 'http://www.omdbapi.com/?s=fast&apikey=147e2360'
        
        try {
          const response = await fetch(url);
          const result = await response.json();
          console.log(result);
          setMovieData(result.Search)
        } catch (error) {
          console.error(error);
        }
      }

      console.log('MovideData',movieData);
      

  return (
    <section className='movie_list'>
        <header className='movie_list_header'>
            <h2 className='movie_list_heading'>Popular 
                <img src={fire} alt='popular'
                className='navbar_emoji' />
            </h2>

            <div className="movie_list_fs">
                <ul className="movie_filter">
                    <li className="movie_filter_item active" >8+ Star</li>
                    <li className="movie_filter_item">7+ Star</li>
                    <li className="movie_filter_item">6+ Star</li>
                </ul>

                <select name="" id="" className="movie_list_sorting">
                    <option value="">Sort By</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie_list_sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>

        <div className="movie_cards">

        {
            movieData.map(movie=> <MovieCard key={movie.imdbID} movie={movie}/>)
            }
            
        </div>
    </section>
  )
}

export default MovieList