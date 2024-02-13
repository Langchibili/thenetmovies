'use client'

import { api_url, strapi } from "@/Constants";
import AllGenresPage from "@/components/Includes/AllGenresPage";
import React, { useEffect, useState } from "react";



export default function Genre() {
    const [loading,setLoading] = useState(true) // loading state
    const [genres,setGenres] = useState(null)

    useEffect(()=>{ // fetch movie and set it to the movie variable
        const getGenres = async () =>{
            try{
                const response = await strapi.request('get',api_url+'/genres')
                setGenres(response)
                setLoading(false)
            } catch(e){
                console.log('an error occured fetching movie',e)
                setLoading(true)
            }
            
        }
        getGenres() // because it runs on component mounting
    },[])

    return loading? <></> : <AllGenresPage genres={genres}/>
}
