import React , {useState, useEffect}  from 'react';
import { getLatestSong } from '../Service/api';
import Top from './TopSongs';


const Newsongs = () => {

    const [newSongs,setNewSongs]=useState([])
        
    
   
    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getLatestSong();
         setNewSongs(data)
      }
      fetchAPI();
  },[])

    return (
       <div>
        <Top title="New Songs" state={newSongs}/>
        </div>
    );
}

export default Newsongs;