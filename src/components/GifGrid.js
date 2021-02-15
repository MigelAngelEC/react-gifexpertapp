/* import React, { useState, useEffect } from 'react' */
import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    /*
     useEffect(() => [
         getGifs(category)
             .then(setImages)
     ], [category]); */
    //getGifs();
    const { data: images, loading } = useFetchGif(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <div className="card-grid animate__animated animate__fadeIn">
                {loading && <p className="animate__animated animate__flash">Loading....</p>}
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}
