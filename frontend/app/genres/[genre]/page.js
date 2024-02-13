'use client'

import { api_url, strapi } from "@/Constants";
import GenreSinglePage from "@/components/Includes/GenreSinglePage";
import React, { useEffect, useState } from "react";



export default function Genre({ params }) {
    const [loading,setLoading] = useState(true) // loading state
    const [genre,setGenre] = useState(null)

    useEffect(()=>{ // fetch movie and set it to the movie variable
        const getGenre = async () =>{
            try{
                const response = await strapi.request('get',api_url+'/genres/?name='+params.genre)
                setGenre(response[0])
                setLoading(false)
            } catch(e){
                console.log('an error occured fetching genre',e)
                setLoading(true)
            }
            
        }
        getGenre() // because it runs on component mounting
    },[])

    return loading? <></> : <GenreSinglePage genre={genre}/>
}
