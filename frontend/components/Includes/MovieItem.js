import { api_url, getMovieDuration, strapi } from "@/Constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MovieItem({ movie }) {
    console.log(movie)
    const [genres,setGenres] = useState([])
    const [movieDuration,setMovieDuration] = useState(null)

    const listGenres = (genres)=> genres.map((genre,index)=>{
        const comma = index === genres.length-1? '' : ',' 
        return <span key={genre.id}> <Link href={"/genres/"+genre.name}>{genre.name+comma} </Link> </span>
    })

    

    useEffect(()=>{ // fetch movie and set it to the movie variable
        const getGenres= async () =>{
            try{
                const response = await strapi.request('get',api_url+'/movies/?title='+movie.title)
                setGenres(response[0].genres)
            } catch(e){
                console.log('an error occured fetching genres',e)
            }
            
        }
        const duration = async ()=>{
            if(movie.youtube_embed){
                setMovieDuration(await getMovieDuration(movie.embed_id))
            }
            else{
                setMovieDuration(null)
            }
         } 
        duration()  // to run after component mounts
        getGenres() // to run after component mounts
    },[])
    return (
       <div className="owl-item active" style={{ width: "313.327px", marginRight: 30 }}>
        <div className="item">
            <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
            <div className="gen-carousel-movies-style-2 movie-grid style-2">
                <div className="gen-movie-contain">
                <div className="gen-movie-img">
                    <img
                    src={movie.thumbnails.high.url}
                    alt="owl-carousel-video-image"
                    />
                    <div className="gen-movie-add">
                    {/* <div className="wpulike wpulike-heart">
                        <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                        <button
                            type="button"
                            className="wp_ulike_btn wp_ulike_put_image"
                        />
                        </div>
                    </div> */}
                    <ul className="menu bottomRight">
                        <li className="share top">
                        <i className="fa fa-share-alt" />
                        <ul className="submenu">
                            <li>
                                <Link href={"https://www.facebook.com/sharer/sharer.php?u="+window.location.origin+"/"+movie.title} target="_blank" rel="noopener noreferrer" className="facebook">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            {/* <li>
                            <a href="#" className="facebook">
                                <i className="fab fa-instagram" />
                            </a>
                            </li> */}
                            <li>
                                <Link href={"https://twitter.com/intent/tweet?url="+window.location.origin+"/"+movie.title} target="_blank" rel="noopener noreferrer" className="facebook">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    {/* <div className="movie-actions--link_add-to-playlist dropdown">
                        <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                        <i className="fa fa-plus" />
                        </a>
                        <div className="dropdown-menu mCustomScrollbar">
                        <div className="mCustomScrollBox">
                            <div className="mCSB_container">
                            <a className="login-link" href="register.html">
                                Sign in to add this movie to a playlist.
                            </a>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                    <div className="gen-movie-action">
                    <Link href={"/"+movie.title} className="gen-button">
                        <i className="fa fa-play" />
                    </Link>
                    </div>
                </div>
                <div className="gen-info-contain">
                    <div className="gen-movie-info">
                    <h3>
                        <Link href={"/"+movie.title} style={{textTransform:'lowercase'}}>{movie.original_title}</Link>
                    </h3>
                    </div>
                    <div className="gen-movie-meta-holder">
                    <ul>
                        {movieDuration === null? <></> : <li>
                                {movieDuration}
                        </li>}
                        <li style={{textTransform:'capitalize'}}>
                        {listGenres(genres)}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* #post-## */}
        </div>
        </div>
            )
}