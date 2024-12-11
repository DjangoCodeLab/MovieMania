import React from 'react'
import Popular from '../Popular/Popular'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieList() {
    const [movieList, setMovieList] = useState([])
    const [page, setPageNumber] = useState(1)
    const { type } = useParams()
    useEffect(() => {
        getData()
    }, [type, page])

    
    const getData = () => {
        let Api_Key = "c45a857c193f6302f2b5061c3b85e743"

        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${Api_Key}&language=en-US&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Hi beta:", data)
                setMovieList(data.results)
            })
    }
    return (

        <>
            {
                <> 
              
                
                <div class="container my-5 p-3 d-flex align-item-center">
                    <div id="card-container" class="row row-cols-1 row-cols-md-4 g-5 ">
                        
                        {movieList.map((movie) => (
                            <Popular movie={movie} />
                        ))}
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><button className="page-link" onClick={() => setPageNumber(page > 1 ? page - 1 : 1)}>Previous</button></li>
                                <li class="page-item"><button className="page-link" onClick={() => setPageNumber(page + 1)}>Next</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </>
            }



        </>

    )
}
