import React from "react";
export default Search

function Search(props){
return 
<div>
    <h2>{props.type} : {props.title}</h2>
    <img src={props.pic} />
    <p>IMDB Rating : {props.rating}</p>
    <p>Description : {props.desc}</p>
    <p>Released on : {props.date}</p>
    <p>Genre : {props.genre}</p>
    <p>Language : {props.lang}</p>
    <p>Country : {props.country}</p>
</div>
}