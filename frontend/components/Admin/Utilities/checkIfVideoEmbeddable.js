const { youtubeApiKey } = require('@/Constants');
const axios = require('axios');


export default function checkIfVideoEmbeddable(videoId){
// URL for the YouTube Data API
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=status&id=${videoId}&key=${youtubeApiKey}`;

// Make a GET request to retrieve video metadata
axios.get(apiUrl)
  .then(response => {
    // Check if the video is embeddable
    const embeddable = response.data.items[0].status.embeddable;
console.log(response)
    if (embeddable) {
      console.log("The video is embeddable.");
    } else {
      console.log("The video is not embeddable or is blocked from being embedded.");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

}

