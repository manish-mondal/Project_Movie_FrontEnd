import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './component/Layout';
import axiosConfig from './api/axiosConfig';
import { Route, Routes } from 'react-router-dom';

function App() {


const [movies, setMovies] = useState();
const getMovies = async() =>{
  try {
 
    const response = await api.get("/api/v1/movies");
    setMovies(response.data);
    console.log(response.data);
  
  } catch (err) {
    console.log(err);
  }

}

  

useEffect(()=>{
  getMovies();
},[]);



  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element ={Layout}>

        </Route>
      </Routes>
       */}
    </div>
  );
}

export default App;
