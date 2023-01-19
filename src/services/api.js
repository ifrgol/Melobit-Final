import axios from "axios";
const getTrendingArtists= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/artist/trending/0/7');
    return response.data.results;
}
const getTopSongDay= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/top/day/0/5');
    return response.data.results;
}
const getLatestSong= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/new/0/3');
    return response.data.results;
}
const getTopSongsOfWeek= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/top/week/0/6');
    return response.data.results;
}
const getSlider= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/slider/latest');
    return response.data.results;
}

export {getTrendingArtists,getTopSongDay, getLatestSong,getTopSongsOfWeek, getSlider }