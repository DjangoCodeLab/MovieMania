import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import MovieSearch from '../MovieSearch/MovieSearch';
export default function Navbar() {
    return (
        <>
           <header className="d-flex flex-wrap justify-content-center py-1 mb-4 border border-dark rounded">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4 mx-5">MovieDb</span>
    </a>
    <ul className="nav nav-pills mx-2 px-5">
        <li className="nav-item header__list">
            <Link 
                to="/popular" 
                className="nav-link text-secondary hover:text-white"
                activeClassName="text-white"
            >
                Popular
            </Link>
        </li>
        <li className="nav-item header__list">
            <Link 
                to="/top_rated" 
                className="nav-link text-secondary hover:text-white"
                activeClassName="text-white"
            >
                Top Rated
            </Link>
        </li>
        <li className="nav-item header__list">
            <Link 
                to="/upcoming" 
                className="nav-link text-secondary hover:text-white"
                activeClassName="text-white"
            >
                Upcoming
            </Link>
        </li>

        <MovieSearch />
    </ul>
</header>

        </>
    )
}
