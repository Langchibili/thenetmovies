import Strapi from "strapi-sdk-javascript";
const axios = require('axios');
export const fakeStr1 = 'kahs3lahebblo2uwb00an~va5lwi_ad_fgaljdj'; // security stuff
export const fakeStr2 ='klahewi_ad_fgalloanv;;aitalkjfajhsbbluwba==hn3vajd5j=+;'
export const youtubeApiKey = 'AIzaSyCpjeIW-IKAUQSZuc5bb0Ncx1ksxEB5J_8'

 /*localhost: */ export const environment = 'local'
 ///*liveserver: */ export const environment = 'live'
 // /*testserver: */ export const environment = 'test'

 let apiurl, backendUrl, clienturl
 if(environment === 'local'){
   /*localhost: */  apiurl = 'http://localhost:1337'
 }
 else if(environment === 'live'){
   /*liveserver: */ apiurl = 'https://movies.thenetworkzambia.com' // for production's sake
 }
 else if(environment === 'test'){
  /*testserver: */  apiurl = 'https://moviestest.thenetworkzambia.com' // the api to be used when deployed to the test site
 }
 else{
    /*liveserver: */ apiurl = 'https://moviesapi.thenetworkzambia.com' // for production's sake
 }


//  // for removing the api part when handling /uploads and the like
//  if(environment === 'local'){
//   /*localhost: */  backendUrl = apiurl.replace('http://localhost:1338/api','http://localhost:1338')
//  }
//  else if(environment === 'live'){
//   /*liveserver: */ backendUrl =  apiurl.replace('jobbase.app/api','jobbase.app') // for production's sake
//  }
//  else if(environment === 'test'){
//   /*testserver: */ backendUrl =  apiurl.replace('testapi.jobbase.app/api','testapi.jobbase.app') // the api to be used when deployed to the test site
//  }
//  else{
//   /*liveserver: */ backendUrl =  apiurl.replace('jobbase.app/api','jobbase.app') // for production's sake
//  }


// if(environment === 'local'){
//   /*localhost: */  clienturl = 'http://localhost:3001'
// }
// else if(environment === 'live'){
//   /*liveserver: */ clienturl = 'https://movies.thenetworkzambia.com' // for production's sake
// }
// else if(environment === 'test'){
//  /*testserver: */  clienturl = 'https://moviestest.thenetworkzambia.com' // the api to be used when deployed to the test site
// }
// else{
//    /*liveserver: */ clienturl = 'https://movies.thenetworkzambia.com' // for production's sake
// }


// export the urls
export let api_url = apiurl
// export let backEndUrl = backendUrl
// export let clientUrl = clienturl


export const strapi = new Strapi(api_url)

export function getJwt(customjwt=null){
    userHasConnection() // check the internet connection
    if(customjwt === null || customjwt === undefined){
      let jwt = localStorage.getItem('jwt')
      if(jwt === undefined || jwt === null){
          localStorage.setItem('jwt','o')
          return null
      }
      else{
          if(jwt === 'o'){
            return null
          }
          jwt = localStorage.jwt.split(fakeStr1)[1]
          if(jwt === undefined){
            return null
          }
          return jwt.split(fakeStr2)[0]
      }
    }
    else{
      let jwt = customjwt.split(fakeStr1)[1]
      return jwt.split(fakeStr2)[0]
    }
} 

async function userHasConnection(){
  const checkConnection = await fetch(api_url+'/movies',{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(!checkConnection.ok){
     alert('You seem to have an internet connection problem, this app requires an internet connection. So this screen shall continue reloading until an active connection is set.')
     window.location = ''
    return
  }
}

export const getMovieDuration = async (embed_id) =>{
        // URL for the YouTube Data API
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${embed_id}&key=${youtubeApiKey}`;  
        // Make a GET request to retrieve video metadata
        return axios.get(apiUrl)
        .then(response => {
             return parseDuration(response.data.items[0].contentDetails.duration)
        })
        .catch(error => {
            console.error("Error fetching video metadata:", error)
            return null
        })
}

export const parseDuration = (durationString)=> {
    // Check if the duration string starts with 'PT'
    if (!durationString.startsWith('PT')) {
      throw new Error('Invalid duration string format');
    }
  
    // Remove 'PT' from the beginning of the string
    const durationWithoutPrefix = durationString.slice(2);
  
    // Regular expressions to extract hours, minutes, and seconds
    const regexHours = /(\d+)H/;
    const regexMinutes = /(\d+)M/;
    const regexSeconds = /(\d+)S/;
  
    // Extract hours, minutes, and seconds from the string using regular expressions
    const hours = regexHours.exec(durationWithoutPrefix);
    const minutes = regexMinutes.exec(durationWithoutPrefix);
    const seconds = regexSeconds.exec(durationWithoutPrefix);
  
    // Parse the extracted values or default to 0 if not found
    const parsedHours = hours ? parseInt(hours[1], 10) : 0;
    const parsedMinutes = minutes ? parseInt(minutes[1], 10) : 0;
    const parsedSeconds = seconds ? parseInt(seconds[1], 10) : 0;
  
    // Calculate the total duration in seconds
    const totalSeconds = parsedHours * 3600 + parsedMinutes * 60 + parsedSeconds;
  
    
    if(parsedHours > 0){
        return <span>{parsedHours}hr {parsedMinutes} mins</span>
    }
    else{
        return <span>{parsedMinutes} mins</span>
    }
  }

//   export const imageUrlFormat = (image,formatWanted)=>{
//     if(image === undefined || image === null) return '/uploads/default-profile.png' 
    
//     if(formatWanted === 'original'){
//       return image.url
//     }
//     if(image.hasOwnProperty('formats')){
//        if(image.formats.hasOwnProperty(formatWanted)){
//         return image.formats[formatWanted].url
//        }
//     }
//     if(!image.url){
//         if(formatWanted === 'cover'){
//           return '/uploads/no-cover-photo.jpg'
//         }
//         return '/uploads/default-profile.png' 
//     }
//     return image.url
//   }

  export const textHasPhoneNumber = (text)=>{
    // Regular expression to match sequences of digits that are 8 characters or longer
    const phoneNumberRegex = /[0-9]{8,}/;
    // Use the test method to check if the text contains a phone number
    return phoneNumberRegex.test(text);
  }

  export const textHasEmailAddress = (text)=> {
    // Regular expression to match email addresses
    const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    // Use the test method to check if the text contains an email address
    return emailRegex.test(text);
  }

