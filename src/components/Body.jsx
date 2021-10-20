import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trending } from "./Result";
export default Trend;

const trendingMovies = "https://api.themoviedb.org/3/trending/movie/day?api_key=09fa800a7aee725c4ddeb96b30da08ad"

function Trend(e){
    const [trending, setTrending] = useState([]);

    useEffect(()=>{
        getTerendingMovies();
    })

    async function getTerendingMovies(){
        await axios.get(trendingMovies)
        .then((response) => {
            const res = response;
            // console.log(response.status);
        setTrending(res);
        // console.log(trending)
        })
        .catch((error)=>{
            console.error("Error fetching data: ", error);
        });
    }

    return(

    <div className="flex-column">
        <h2 className="p-2">trending movies : </h2>
        <button onMouseEnter={getTerendingMovies} className="p-2">get</button>
        {trending.status === 200 ?  
        <Trending 
        arr={trending} 
        title={trending.data.results[7].original_title}
         />
         : null}
    </div>
 )};