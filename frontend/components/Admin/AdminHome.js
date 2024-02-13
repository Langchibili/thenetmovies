'use client'

import { youtubeApiKey } from "@/Constants";
import React, {Component} from "react";

export default class AdminHome extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const axios = require('axios');

const apiKey = youtubeApiKey
const channelId = 'UCFBhWXxSe249zRkZFD1RdQw'; // Replace with the desired channel ID

axios.get('https://www.googleapis.com/youtube/v3/channels', {
  params: {
    part: 'contentDetails',
    id: channelId,
    key: apiKey,
  },
})
  .then(response => {
    const uploadsPlaylistId = response.data.items[0]?.contentDetails.relatedPlaylists.uploads;

    if (uploadsPlaylistId) {
      // Fetch videos from the uploads playlist
      return axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          playlistId: uploadsPlaylistId,
          maxResults: 1000, // Adjust as needed
          key: apiKey,
        },
      });
    } else {
      console.log('No uploads playlist found for the channel.');
      return null;
    }
  })
  .then(videosResponse => {
    if (videosResponse) {
      const videos = videosResponse.data.items;
      console.log(videos);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

    }
    render(){
       return (<>hello there</>)
    }
}