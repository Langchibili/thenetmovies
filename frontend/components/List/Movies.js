import React from "react";
import MovieItem from "../Includes/MovieItem";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Movies({ movies,type }) {
    console.log(movies)
        if(type === "grid"){
            return (
                    
                    
                        movies.map((movie)=>{
                            return (
                                <Grid container spacing={2}>
                            <Grid sx={{background:'none'}} item xs={6} key={movie.id}>
                            <Item>
                             <MovieItem movie={movie}/> 
                            </Item>
                            </Grid>
                            </Grid>
                            )
                        })
                    
                    
            )
        }
        else if(type === "slider"){
            return (
                <div className="gen-style-2">
                    <div
                        className="owl-carousel owl-loaded owl-drag"
                        data-dots="false"
                        data-nav="true"
                        data-desk_num={4}
                        data-lap_num={3}
                        data-tab_num={2}
                        data-mob_num={1}
                        data-mob_sm={1}
                        data-autoplay="false"
                        data-loop="false"
                        data-margin={30}
                    >
                        <div className="owl-stage-outer">
                        <div
                            className="owl-stage"
                            style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: 1717
                            }}
                        >
                           { 
                            movies.map((movie)=>{
                             return <MovieItem movie={movie} key={movie.id}/> 
                            })
                          }
                          
                       </div>
                        </div>
                        <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev disabled">
                            <i className="ion-ios-arrow-back" />
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                        </button>
                        </div>
                        <div className="owl-dots disabled" />
                    </div>
                </div>
            )
        }
        else{
            return <></>
        }
}
