import React,{useContext} from 'react';
import './App.css';
import {MovieContext} from "./MovieContext";

const Nav = ({name, prise}) =>{
    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className='nav_main'>
            <h3>Dev Ed</h3>
            <p>List of Movies: {movies.length} </p>
        </div>

    );
}



export default Nav;