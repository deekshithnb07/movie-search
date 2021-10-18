import React, { Component } from "react";
import axios from "axios";
export default Search

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
