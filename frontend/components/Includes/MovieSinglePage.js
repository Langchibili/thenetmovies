import React, { useEffect, useState } from "react";
import { Header } from "../Parts/Header";
import { Footer } from "../Parts/Footer";
import checkIfVideoEmbeddable from "../Admin/Utilities/checkIfVideoEmbeddable";
import Link from "next/link";
import { getMovieDuration } from "@/Constants";
import RootLayout from "@/app/layout";


export default function MovieSinglePage({ movie }) {
    console.log(movie)
    const removeHashtags = (text)=> text.replace(/#[^\s]+/g, '') // remove hashtags from text
    const listGenres = (genres,index)=> genres.map((genre)=>{
        const comma = index === genres.length-1? '' : ',' 
        return <span key={genre.id}> <Link href={"/genres/"+genre.name}>{genre.name+comma} </Link> </span>
    })
    
    const [movieDuration,setMovieDuration] = useState(null)
    useEffect(()=>{ // fetch movie and set it to the movie variable
        const duration = async ()=>{
           if(movie.youtube_embed){
               setMovieDuration(await getMovieDuration(movie.embed_id))
           }
           else{
               setMovieDuration(null)
           }
        } 
       duration()
    },[])

    return (<RootLayout
                title={'TheNetMovies | '+movie.original_title}
                image={movie.thumbnails.standard}
                description={movie.about}
             >
          <Header/>
          <section className="gen-section-padding-3 gen-single-movie">
            <div className="container">
                <div className="row no-gutters">
                <div className="col-lg-12">
                    <div className="gen-single-movie-wrapper style-1">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="gen-video-holder">
                            <iframe
                            width="100%"
                            height="550px"
                            // src="https://www.youtube.com/embed/ZKkB7y0iF8o"
                            src={movie.embed_link}
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                            />
                        </div>
                        <div className="gen-single-movie-info">
                            <h2 className="gen-title">{movie.original_title}</h2>
                            <div className="gen-single-meta-holder">
                            <ul>
                                <li className="gen-sen-rating">TV-PG</li>
                                <li>
                                <i className="fas fa-eye"></i>
                                <span>237 Views</span>
                                </li>
                            </ul>
                            </div>
                            <p>
                            {removeHashtags(movie.about)}
                            </p>
                            <div className="gen-after-excerpt">
                            <div className="gen-extra-data">
                                <ul>
                                <li>
                                    <span>Language :</span>
                                    <span>English</span>
                                </li>
                                <li>
                                    <span>Subtitles :</span>
                                    <span>English</span>
                                </li>
                                <li>
                                    <span>Audio Languages :</span>
                                    <span>English</span>
                                </li>
                                <li>
                                    <span>Genre :</span>
                                    {listGenres(movie.genres)}
                                </li>
                                {movieDuration === null? <></> :<li>
                                    <span>Run Time :</span>
                                     {movieDuration}
                                </li>}
                                {/* <li>
                                    <span>Release Date :</span>
                                    <span>14 Aug,2018</span>
                                </li> */}
                                </ul>
                            </div>
                            <div className="gen-socail-share">
                                <h4 className="align-self-center">Share Post On:</h4>
                                <ul className="social-inner">
                                <li>
                                    <Link href={"https://www.facebook.com/sharer/sharer.php?u="+window.location.href} target="_blank" rel="noopener noreferrer" className="facebook">
                                     <i className="fab fa-facebook-f" />
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="facebook">
                                    <i className="fab fa-instagram" />
                                    </a>
                                </li> */}
                                <li>
                                    <Link href={"https://twitter.com/intent/tweet?url="+window.location.href} target="_blank" rel="noopener noreferrer" className="facebook">
                                     <i className="fab fa-twitter" />
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

          <Footer/>
    </RootLayout>)
}
