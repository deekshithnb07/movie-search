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

    
    async function omdbApi(){
        await axios.get(URL + search + apiKey)
           .then((response) => {
               const res = response.data;
           setResults(res);
           })
           .catch((error)=>{
               console.error("Error fetching data: ", error);
           });
    }

    function handleChange(e){
        const searchText = e.target.value;
        setSearch(searchText);
        console.log(searchText);
    }

        

    function handleSubmit(e){
        omdbApi();
        console.log("searching for " + search);
        setIssearching(true);
        setSearch("");
        console.log(results);
    }

    useEffect((ev)=>{
        omdbApi();
    },[])
  

    return(
        <React.Fragment>
        <div>
        <div id="bgImage" className="bg-image">

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
            </div> 
        </div>

        
        <div>
        {isSearching === true ? 
        <Search 
        title={results.Title} 
        type={results.Type} 
        pic={results.Poster}
        rating={results.imdbRating}
        desc={results.Plot}
        date={results.Released}
        genre={results.Genre}
        lang={results.Language}
        country={results.Country}
        />  : null} 
        </div>
        </React.Fragment>
    )};