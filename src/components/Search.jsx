import React from 'react';
import {Navigation} from './Navigation';
//import { useState } from 'react';
//import { useEffect } from 'react';

export const Search = () => {
    // const [product,setProduct] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://reqres.in/api/users`).
    //     then(x=>x.json()).
    //     then(({data})=> (setProduct(data)));
    // },[]) 

    // const getTodo = (isSort)=>{
    //     console.log("todo length",getTodo.length)
    //     if(isSort === "sorts"){
    
    //      axios.get("http://localhost:3001/google?_sort=title&_order=asc")
    //      .then((res)=>{
    //          dispatch(getTodoSuccess(res.data));
    //          console.log("sorted data",res.data);
    //          setData(res.data)
    //      })
    //     }
    //     else{
    //         dispatch(getTodoLoading())
    
    //         axios.get("http://localhost:3001/todo")
    //         .then((res)=>{
    //             dispatch(getTodoSuccess(res.data));
    //             console.log("unsorted data",res.data);
    //             setData(res.data)
    //         })     
    //     } 
    //  }
    

    return (
        <div>
            <div>
                <Navigation />
            </div>
            {/* <button id='sort-alphabetically' onClick={()=>{
                getTodo("sorts");
            }}>Sort A-Z</button> */}
            <button id='sort-alphabetically-desc'>Sort Z-A</button>
            <button id='sort-by-date '>Sort by Date (Asc)</button>
            <button id='sort-by-date-desc'>Sort by Date (Desc)</button>
            <button id='sort-by-quality'>Sort by quality (Asc)</button>
            <button id='sort-by-quality-desc'>Sort by quality (Desc)</button>
            <button id='filter-explicit'>Filter Explicit</button>
            <div id='search-result'>
        
            </div>
        </div>
    );
};
