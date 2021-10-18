import React, { Component } from "react";
import axios from "axios";
export default Search

function Search(props){
return (
<div id="results">
    <h2> {props.type} : {props.title}</h2>
    <img src={props.pic} />
    <p>IMDB Rating : {props.rating}</p>
    <p>Description : {props.desc}</p>
    <p>Released on : {props.date}</p>
    <p>Genre : {props.genre}</p>
    <p>Language : {props.lang}</p>
    <p>Country : {props.country}</p>
</div>)
}

const URL = "http://www.omdbapi.com/?t=";
const apiKey = "&apikey=325cecc3";
