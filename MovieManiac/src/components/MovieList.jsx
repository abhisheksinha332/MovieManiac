import React,{useEffect, useState} from 'react'
import _ from 'lodash'

import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'




const MovieList = ({fire, star}) => {

    const [movieData, setMovieData] = useState([])
    const [animeData, setAnimeData] = useState([])
    const [sort, setSort] = useState({
        by : "default",
        order : "asc"
    })
    const [rating, setRating] = useState(0)
    useEffect(() => {
                
        Api()

        }, [])

    useEffect(()=> {
        if(sort.by !== "default" ){
           const sortedAnime =  _.orderBy(animeData, [sort.by] , [sort.order])
           setAnimeData(sortedAnime)

          console.log(animeData) 
        }
    },[sort])
        
        const Api = async()=>{
        const url= 'https://kitsu.io/api/edge/anime'
        // const url= 'http://www.omdbapi.com/?s=fast&apikey=147e2360'
        
        try {
          const response = await fetch(url);
          const result = await response.json();
          setMovieData(result.data)
          setAnimeData(result.data)
        
        } catch (error) {
          console.error(error);
        }
      }

     const handleRating = (rate) => {

        if(rate === rating){
            setRating(0)
            setAnimeData(movieData)
        }
        else{
            setRating(rate)
            const filtered = movieData.filter(movies => (movies.attributes.averageRating / 10).toFixed(1) >= rate)
            setAnimeData(filtered)   
        }
     }
      
    const handleSort = (e) => {
        const {name, value} = e.target
        
        setSort(prev=> {
            return {...prev,[name]: value}
        })
    }

  return (
    <section className='movie_list'>
        <header className='movie_list_header'>
            <h2 className='movie_list_heading'>Popular 
                <img src={fire} alt='popular'
                className='navbar_emoji' />
            </h2>

            <div className="movie_list_fs">
               <FilterGroup handleRating={handleRating} rating={rating} ratings={[8,7,6]}/>

                <select name="by" id="" className="movie_list_sorting" onChange={handleSort} value={sort.by}>
                    <option value="default">Sort By</option>
                    <option value="startDate">Date</option>
                    <option value="averageRating">Rating</option>
                </select>
                <select name="order" id="" className="movie_list_sorting" onChange={handleSort} value={sort.order}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </header>

        <div className="movie_cards">

       {
            animeData.map(anime=> <MovieCard key={anime.id} anime={anime} star={star}/>)
            } 

          
            
        </div>
    </section>
  )
}

export default MovieList