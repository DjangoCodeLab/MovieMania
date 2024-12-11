import React, { useState } from 'react'

export default function MovieSearch() {
    const [searchTerm,setSearchTerm] = useState('')
    const [result, setResult] =  useState('')
    const handleChnge = (event) => {
        setSearchTerm(event.target.value);

    }
    const resultData = () => {
        if (searchTerm) {
            setResult(searchTerm)
        }
        else {
            setResult("Get error")
        }
    }


    return (
        <>
        <h1>{result}</h1>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 " role="search">
                <input type="search" value={searchTerm} onChange={handleChnge} className="form-control form-control-white bg-white text-dark" placeholder="Movie Name" aria-label="Search" />
            </form>
            <div class="text-end">
                <button type="button" onClick={resultData} class="btn btn-secondary">Search</button>
            </div>
        </>
    )
}
