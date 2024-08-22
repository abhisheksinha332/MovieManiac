import React from 'react'

const FilterGroup = ({handleRating, rating, ratings}) => {

  return (
    <ul className="movie_filter">
        {
            ratings.map((rate, index)=> {
                return(
                    <li key={index} className={rating===rate ? 'movie_filter_item active' : 'movie_filter_item'} onClick={()=> handleRating(rate)} >{rate}+ Star</li>
                )
                
            })
        }
</ul>
  )
}

export default FilterGroup