import React from 'react';
import './albumItem.css'

const AlbumItem=({num, click})=>{
    return(
        <div className='album' onClick={click}>
        Album {num}
      </div>
    )
}

export default AlbumItem