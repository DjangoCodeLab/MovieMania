import React from 'react'
import { useState, useEffect } from 'react'
import './MovieDetail.css'
import { Link, useParams } from 'react-router-dom'
import MovieList from '../MovieList/MovieList'

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState()
  const [movieCast, setMovieCast] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getData()
    castData()
    window.scrollTo(0, 0)
  }, [])

  const getData = () => {
    let Api_key = "c45a857c193f6302f2b5061c3b85e743"
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data))
  }


  const castData = () => {
    let Api_key = "c45a857c193f6302f2b5061c3b85e743"
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setMovieCast(data.cast)
      })
  }
  return (
    <>
      <div class="mx-auto px-3 ">
        <div class="row featurette mx-auto">
          <div class="col-md-7  ">
            <div class="d-flex" >
              <img src={`https://image.tmdb.org/t/p/w500${movieDetail ? movieDetail.poster_path : ""}`} style={{ width: "18rem" }} class="card-img-top" alt="..." />
              <div class="d-flex flex-column mx-5">
                <h3>
                  {movieDetail
                    ? (movieDetail.belongs_to_collection && movieDetail.belongs_to_collection.name
                      ? movieDetail.belongs_to_collection.name
                      : movieDetail.original_title)
                    : ""}
                </h3>


                <p>Rating:{movieDetail ? movieDetail.vote_average : ""}</p>
                <div className="d-flex">
                  <p>{movieDetail?.runtime || null} min</p>
                  <p class="mx-5 text-primary">
                    {
                      movieDetail && movieDetail.genres
                        ?
                        movieDetail.genres.map(genre => (
                          <>
                            <span className="text-primary" id={genre.id}>{`${genre.name},`}</span>
                          </>
                        ))
                        :
                        null
                    }


                  </p>
                </div>
                <p>Released Date : {movieDetail ? movieDetail.release_date : ""}</p>
              </div>

            </div>
            <h3>Overview</h3>
            <p>{movieDetail ? movieDetail.overview : ""}</p>
          </div>
          <div class="col-md-3  ">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail ? movieDetail.backdrop_path : ""}`} alt="Description of image" width="150%" height="100%" />

          </div>
        </div>
      </div>


      <h1>Cast</h1>
      <div class="container my-5 p-3 d-flex align-item-center">
        <div id="card-container" class="row row-cols-1 row-cols-md-4 g-5 ">
          {
            movieCast ? (
              movieCast.map((data) => (
                <>
                  <div className="bg-gray" style={{ width: "18rem" }}>
                    <div className="text-white">
                      <img src={data.profile_path == null ? "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=" : `https://image.tmdb.org/t/p/w500${data.profile_path}`} className="card-img-top" alt="..." />

                      <h5>{data.original_name}</h5>
                      <p>Charecter Name:{data.character}</p>
                    </div>
                  </div>
                </>
              ))
            ) : ""
          }
        </div>
      </div>

      <Link to="/" element={<MovieList />}>
        <button class='btn btn-primary' >Back</button>
      </Link>

    </>
  )
}
