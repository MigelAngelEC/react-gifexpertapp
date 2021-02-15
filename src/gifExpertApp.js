import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['JK Bitch']);
  /*   const handleAdd = () => {
        // setCategories( [...categories,'HunterxHunter'] );
        // setCategories(cats=>[...categories,'HunterXHunter']);
    } */
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category, index) => (<GifGrid
                        key={category}
                        category={category} />))
                }
            </ol>
        </div>
    )
}
export default GifExpertApp;
