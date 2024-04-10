//import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import './Hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import reviews from "../reviews/reviews";



const Hero = ({movies})=>{
    const navigate = useNavigate()
    function reviews(movieID)
    {
        navigate(`/Reviews/${movieID}`)
    }
    return(
        <div className="movie-carousel-container">
           <Carousel>
            {
                movies?.map((movie)=>
                {return(
                    <Paper>
                        <div className="movie-card-container">
                        
                            <div className="movie-card" >
                            <img src = {movie.poster} alt=""></img>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src = {movie.poster} alt=""></img>

                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>

                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                        <div className="play-button-icon-container">
                                            <FontAwesomeIcon className="play-button-icon" icon ={faCirclePlay } >
                                                
                                            </FontAwesomeIcon>
                                            
                                        </div>
                                        </Link>
                                        <div className="movie-review-button-container">
                                            <Button variant="info" onClick={()=>{ reviews(movie.imdbId)}}>Reviews</Button>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            }
                )
            }
            </Carousel>
        </div>
    )
}

export default Hero