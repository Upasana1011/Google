import React, { useState } from 'react';

export const Navigation = () => {
   const [title,setTitle]=useState("");

  
    return (
        <div>
            <input type="text"  />
            <button className='search' onChange={((e)=>{
                setTitle(e.target.value)})}>Search</button>
        </div>
    );
};
