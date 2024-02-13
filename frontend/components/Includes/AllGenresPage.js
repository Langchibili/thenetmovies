import React from "react";
import { Header } from "../Parts/Header";
import { Footer } from "../Parts/Footer";


export default function AllGenresPage({ genres }) {
    console.log(genres)
    return (<>
          <Header/>
          <br/>
          <br/>
          <br/> <br/>
             <h2>All Genres</h2>
          <Footer/>
    </>)
}
