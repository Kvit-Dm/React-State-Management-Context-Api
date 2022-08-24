import React from 'react';

const Movie = ({name, prise}) =>{


    return(
        <div>
            <h3>{name}</h3>
            <p>{prise}</p>
        </div>

    );
}



export default Movie;