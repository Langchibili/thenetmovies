import React from "react";
import { Header } from "../Parts/Header";
import { Footer } from "../Parts/Footer";
import Movies from "../List/Movies";


export default function GenreSinglePage({ genre }) {
    console.log(genre)
    return (<>
          <Header/>
             <h2 style={{color:'white'}}>{genre.name}</h2>
             <Movies movies={genre.movies} type='slider'/>
             <br/>
          <Footer/>
    </>)
}
