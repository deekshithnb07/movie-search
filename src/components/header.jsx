import React from "react";
import Apicall from "./Apicall";
import logo from "F:/react/movie-search/src/img/apple-icon.png";
export default Header;
function Header(){
return(
    <div id="header" className="container-fluid sticky-top">
        <nav className="navbar">
            <ul className="menu">
                <li>
                    <a className="navbar-brand nav-link" href="#">
                    <img src={logo} alt="Movie" width="80px" height="100%" />
                    </a>
                </li>
                <li id="movie">
                    <a id="linkT"className="nav-link text Movie" onMouseEnter={Movielist} href="#">Movie</a>
                    <ul className="nav-link List MList">
                        <a className="listicon" href="#"><li>Trending</li> </a>
                        <a className="listicon" href="#"><li>New-release</li></a>
                        <a className="listicon" href="#"><li>Upcomming</li></a>
                        <a className="listicon" href="#"><li>Top-rated</li></a>
                    </ul>
                </li>
                <li id="TV">
                    <a className="nav-link text TV" href="#">TV shows</a>
                    <ul className="nav-link List TList">
                        <a className="listicon" href="#"><li>Trending</li> </a>
                        <a className="listicon" href="#"><li>New-release</li></a>
                        <a className="listicon" href="#"><li>Upcomming</li></a>
                        <a className="listicon" href="#"><li>Top-rated</li></a>
                    </ul>
                </li>
                <li id="rightSide" >
                    <a href="#" id="add"> 
                        <i className="fas fa-plus" />
                    </a>
                    <a href="#" id="profile">
                    <i className="fas fa-user-circle" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
)};

function Movielist(){
    return(
    <div>
        <ul className="nav-link List MovieList">
        <a className="listicon"><li>trending</li> </a>
        <a className="listicon"><li>new-release</li></a>
        <a className="listicon"><li>upcomming</li></a>
        <a className="listicon"><li>top-ated</li></a>
        </ul>
    </div>
    )
}