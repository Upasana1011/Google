import React from 'react';
import { Navigation } from './Navigation';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import "./styles.css";

export const Search = () => {
     const [data,setData] = useState([]);
    const {q}=useParams();
    let queryis=q.substring(2,q.length);

//     useEffect(()=>{
//         console.log(queryis);
//         axios.get(`https://fast-reef-22226.herokuapp.com/data?title_like=${queryis}`)
//         .then((res)=>{
//             console.log(res.data);
//             setData(res.data)
//         })
//     },"") 
     
     useEffect(()=>{
       getData()
   },[data])
   
   function getData(){
 
       axios.get(`https://fast-reef-22226.herokuapp.com/data?title_like=${queryis}`)
       .then((res)=>{
        console.log(res.data)
         setData(res.data)
       })

   }


    const ascSort=()=>{
        var newd= data.sort((a,b)=>a.title-b.title)
          setData(newd);
          console.log("asc",newd);
      }
    
      const desSort=()=>{
        var newdt=data.sort((a,b)=> b.title-a.title)
         setData(newdt);
         console.log("desc");
      }
     const numberSort=()=>{
        var newdt=data.sort((a,b)=> (a.creation_date-b.creation_date))
         setData(newdt);
         console.log("number sort")
     }
     const numberSortd=()=>{
        var newdt=data.sort((a,b)=> (b.creation_date-a.creation_date))
         setData(newdt);
         console.log("number desc")
     }
     const qualitys=()=>{
        var newdt=data.sort((a,b)=> (a.quality-b.quality))
         setData(newdt)
         console.log("quality asc")
     }
     const qualityd=()=>{
        var newdt=data.sort((a,b)=> (b.quality-a.quality))
         setData(newdt)
         console.log("quality desc")
     }

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <button id='sort-alphabetically' onClick={
                ascSort
            }>Sort A-Z</button>
            <button id='sort-alphabetically-desc' onClick={
                desSort}>Sort Z-A</button>
            <button id='sort-by-date' onClick={
                 numberSort
            }>Sort by Date (Asc)</button>
            <button id='sort-by-date-desc' onClick={ numberSortd }>Sort by Date (Desc)</button>
            <button id='sort-by-quality' onClick={ qualitys}>Sort by quality (Asc)</button>
            <button id='sort-by-quality-desc' onClick={qualityd}>Sort by quality (Desc)</button>
            <button id='filter-explicit'>Filter Explicit</button>
            

            <div id="search-result">
            {data.map((item,value)=>{
                return (
                   <div id="detailed-result" key ={value} >
                       <div>{item.url}</div>
                       <div id="oneline">
                       <div className="title">{item.title}</div>
                       <div className="author">{item.author}</div>
                       </div>
                       <div className="desc">{item.description}</div>
                       <div className="creation-date">Creation Date : {item.creation_date}</div>
                       <div className="explicit">Explicit : {item.explicit ? "True" : "False"}</div>
                       <div className="quality">Quality % {item.quality}</div>
                       <hr></hr>
                   </div>
                )
            })}
            </div>
        </div>
    );
};
