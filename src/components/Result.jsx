import React, { Component, useEffect } from "react";
import axios from "axios";
export default Search;
export {Trending}

function Search(props){
return (
    <React.Fragment>
    <div className="d-flex flex-row" id="results">
            <div  className="p-2">
            <img src={props.pic} className="img" /> 
            </div>
            <div  className="p-2">
            <h2> <span className="text-info"> {props.type} : </span> { " " + props.title}</h2>
            <h2> <span className="text-info"> IMDB Rating : </span> { " " + props.rating}</h2>
            <h2> <span className="text-info"> Description : </span> { " " + props.desc}</h2>
            <h2> <span className="text-info"> Released on : </span>  { " " + props.date}</h2>
            <h2> <span className="text-info"> Genre : </span> { " " + props.genre}</h2>
            <h2> <span className="text-info"> Language : </span> { " " + props.lang}</h2>
            <h2> <span className="text-info"> Country :  </span>{ " " + props.country}</h2>
            </div>
    </div>
    </React.Fragment>
)}

const URL = "http://www.omdbapi.com/?t=";
const apiKey = "&apikey=325cecc3";
const trendingMovies = "https://api.themoviedb.org/3/trending/movie/day?api_key=09fa800a7aee725c4ddeb96b30da08ad"




function Trending(props){
    const [trending, setTrending] = useEffect([]);

    
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

    useEffect(()=>{
        getTerendingMovies();
    })

    if(trending.length === 0){
        return(
            <div><h2>no data</h2></div>
        )
    }else{

    const items = trending.map((data, i) => {
        return(
    <div key={i}>
        <h2>{data.title}</h2>
        
    </div>
    
    )})
};
}
