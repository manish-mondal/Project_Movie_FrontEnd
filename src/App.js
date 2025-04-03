import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './component/Layout';
import axiosConfig from './api/axiosConfig';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/header';
import Trailer from './component/trailer/trailer';
import Reviews from './component/reviews/reviews';
function App() {


const [movies, setMovies] = useState();
const [movie, setMovie] = useState();
const [allReviews, setReview] = useState();

const getMovies = async() =>{
  try {
 
    const response = await api.get("/api/v1/movies",{
      auth: {
        username: "manish",
        password: "password"
      }
    });
    setMovies(response.data);
   //console.log(movies);
  
  } catch (err) {
    console.log(err);
  }

}
const getMovie = async(movieID) =>{
  try {
 
    const response = await api.get(`/api/v1/movies/${movieID}`);
    const singleMovie = response.data;
    setMovie(singleMovie);
    setReview(singleMovie.reviewIds);
   //console.log(movies);
  
  } catch (err) {
    console.log(err);
  }

}



// const setReviews = async() =>{
//   try {
 
//     const response = await api.post("/api/v1/reviews");
//     setReview(response.data);
//    //console.log(movies);
  
//   } catch (err) {
//     console.log(err);
//   }

// }

  

useEffect(()=>{
  getMovies();
},[]);



  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element ={<Layout></Layout>}>
          <Route path='/' element = {<Home movies={movies}/>}></Route>
          
          <Route path='/Trailer/:ytTrailerId' element = {<Trailer></Trailer>}></Route>

         
          <Route path='/Reviews/:movieID' element = {<Reviews  getMovieData = {getMovie} movie = {movie} reviews ={allReviews} setReviews = {setReview}></Reviews>}></Route>
        </Route>
       
      </Routes>
      
    </div>
  );
}

export default App;
