import React , {useState, useEffect}  from 'react';
import { getTopSongDay } from '../Service/api';
import Top from './TopSongs';

const TopSongDay = () => {
    const [topDaySong,setTopSongDay]=useState([])

    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getTopSongDay();
         setTopSongDay(data)
      }
      fetchAPI();
  },[])
    return (
        <div>
            <Top title="Top Songs Of The Day" state={topDaySong}/>
        </div>
    );
};

export default TopSongDay;