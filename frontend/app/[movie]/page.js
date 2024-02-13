'use client'

import { api_url, strapi } from "@/Constants";
import MovieSinglePage from "@/components/Includes/MovieSinglePage";
import React, { useEffect, useState } from "react";


export default function Movie({ params }) {
    const [loading,setLoading] = useState(true) // loading state
    const [movie,setMovie] = useState(null)

    useEffect(()=>{ // fetch movie and set it to the movie variable
        const getMovie = async () =>{
            try{
                const response = await strapi.request('get',api_url+'/movies/?title='+params.movie)
                setMovie(response[0])
                setLoading(false)
            } catch(e){
                console.log('an error occured fetching movie',e)
                setLoading(true)
            }
            
        }
        getMovie() // because it runs on component mounting
    },[])

    return loading? <></> : <MovieSinglePage movie={movie}/>
}
