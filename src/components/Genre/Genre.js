import React from 'react';

import './Genre.css';

const genre = ( props ) => {

    return (
        <div className="main-content">
            <div className="header">
                <h2 className="genre-logo">{ props.genreName }</h2>
                { props.genreDescriptionTitle ? (
                    <div>
                        <p><span>{ props.genreDescriptionTitle }</span>{ props.genreDescription }</p>
                    </div>
                ) : null}
                <img src={ props.imageSource } alt={ props.imageAlt }></img>
            </div>
            <hr></hr>
        </div>
        // We can only execute one line expressions within our JSX content
        // We cannot define any functions or JS classes in here.
        // Can't nest a class within the return
        // However, we can make short simple calculations or function calls in here
    );
}

export default genre;