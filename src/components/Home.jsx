import React from 'react';
import "./styles.css"
//import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <br /><br />
        <img width="300px"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="google"></img>
        <br />
        <input className='search-box' placeholder="search google" type="text" />  
        </div>
    );
};

