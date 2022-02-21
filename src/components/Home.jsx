import React from 'react';
//import { useEffect } from 'react';
import { useState } from 'react';
import "./styles.css";
//import axios from "axios";
//import { Link } from 'react-router-dom';

export const Home = () => {
    const [text,setText]=useState("")
//     const [dt,setData]=useState([])
    
//     useEffect(()=>{
//         axios.get("http://localhost:3000/google")
//         .then((data)=>{
//             setData(data.data)
//         })
//     },[])
    return (
        <div>
        <img width="300px"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="google"></img>
        <br />
        <input className='search-box' placeholder="search google" type="text" onChange={(e)=>{
            setText(e.target.value)
        }} /> 
        <button onClick={()=>{
            window.location.href=`/search/q=${text}`
        }}>Search</button> 
        </div>
    );
};
