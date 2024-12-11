import { useEffect, useState } from 'react';
import './Popular.css'
import { Link } from 'react-router-dom';

export default function Popular({ movie }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)

        }, 500);
    }, [])
    return (
        <>
            {
                isLoading
                    ?
                    ""
                    :
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie?movie.backdrop_path:""}`} className="card-img-top" alt="..."/>
                                <div className="card-body text-white text-center">
                                    <h6>{movie?movie.original_title:""}</h6>
                                    <h6>Rating:{movie?movie.vote_average.toFixed():""}</h6>
                                </div>
                        </div>
                    </Link>
            }
        </>

    )
}
