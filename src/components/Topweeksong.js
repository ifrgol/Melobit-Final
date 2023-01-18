import React , {useState, useEffect}  from 'react';
import { getTopSongsOfWeek } from '../Service/api';
import Top from './TopSongs';

const TopSongsOfWeek = () => {
    const [topWeekSong,setTopSongsOfWeek]=useState([])

    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getTopSongsOfWeek();
         setTopSongsOfWeek(data)
      }
      fetchAPI();
  },[])
    return (
        <div>
            <Top  title="Top Songs Of The Week"  state={topWeekSong}/>
        </div>
    );
};

export default TopSongsOfWeek;