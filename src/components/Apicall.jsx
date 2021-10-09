import React, { useEffect, useState } from 'react';
// import useFetch from "react-fetch-hook"
import axios from 'axios';
import Search from './Result';
export default Apicall;

// const apikeyV4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWZhODAwYTdhZWU3MjVjNGRkZWI5NmIzMGRhMDhhZCIsInN1YiI6IjYxM2Y3MWVhMGNkMzJhMDAyNzNhZjVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9TlDI6bfa1ZwvGNT_PIRpwnNd7UD1N3EIQvbcfutTR4";
// const apiKeyV3 = "09fa800a7aee725c4ddeb96b30da08ad";
const URL = "http://www.omdbapi.com/?t=";
const apiKey = "&apikey=325cecc3";

function Apicall(){
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [isSearching, setIssearching] = useState(false);
    if(results.Response === "False"){
        console.log("looding...");
    }   

    function handleChange(e){
        const searchText = e.target.value;
        setSearch(searchText);
        console.log(searchText);
    }

    async function handleSubmit(e){
        console.log("searching for " + search);
        setIssearching(true);
        await axios.get(`${URL}${search}${apiKey}`)
            .then((response) => {         
            setResults(response); 
            console.log(results) ;
            })
            .catch((error)=>{
                console.error("Error fetching data: ", error);
            })
        setSearch("");
    }
  

    return(
        <div id="bgImage" className="bg-image">

            {/* input of movie search text */}
            <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="enter a movie or tv shows name to search"
            value={search}
            autoComplete="off"
            onChange={handleChange}
            className="search-bar"
            required
            />

            <button 
            id="submit" 
            className="search-bar" 
            value="search" onClick={handleSubmit}>
             search </button>            
        {results.data.Response === "True" & isSearching === true ? 
        <Search 
        type={results.data.Title} 
        title={results.data.Title}
        /> : null }
        </div>
    )};