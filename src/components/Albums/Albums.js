import React from 'react';
import styled from 'styled-components';

import './Albums.css';

const AlbumName = styled.h2`
    color: ${props => props.color || "blue"};
    background-color: ${props => props.bgColor};
    font-size: 1.2em;
    font-weight: 400;
    margin-top: 0.5em
`;
const ArtistName = styled.h3`
    color: ${props => props.artistColor || "#FF10F0"};
    text-transform: uppercase;
    font-weight: 400;
    font-style: italic;
`

const albums = ( props ) => {
    return (
        <div className="mainContent">
            <img src={ props.albumSrc }/>
            <AlbumName color={ props.color } bgColor={ props.bgColor }>{ props.albumName }</AlbumName>
            <ArtistName className="artist" color={ props.artistColor }>{ props.albumArtist }</ArtistName>
            <p>{ props.albumDesc }</p>
        </div>
    );
}

export default albums;