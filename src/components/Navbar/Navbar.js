import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import MovieSearch from '../MovieSearch/MovieSearch';
export default function Navbar() {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-1 mb-4 border border-dark rounded">
                <a href="/" className="  d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4 mx-5">MovieDb</span>
                </a>
                <ul className="nav nav-pills mx-2 px-5">
                    <Link to="/popular" className="nav-item header__list"><li className=" nav-link text-secondary nav-itme">Popular</li></Link>
                    <Link to="/top_rated" className="nav-item header__list"><li className=" nav-link text-secondary">Top Rated</li></Link>
                    <Link to="/upcoming" className="nav-item header__list"><li className=" nav-link text-secondary">Upcoming</li></Link>

                    <MovieSearch />
                 
                </ul>
            </header>

        </>
    )
}
