

const Movie = (props) => {
  return (
    <div className='movie'>
    <img src=/*{props.Poster}*/"https://ia.media-imdb.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="" />
    <p>{props.Title}</p>
    <p>{props.Year}</p>
    </div>
  )
}

export default Movie