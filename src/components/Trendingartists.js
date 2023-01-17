import React , {useState, useEffect}  from 'react';
import { getTrendingArtists } from '../services/api';


const Trendingartists = () => {

    const [trendingArtists,setTrendingArtists]=useState([])
        
    
   
    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getTrendingArtists();
         setTrendingArtists(data)
      }
      fetchAPI();
  },[])

    return (
        <div>
             <div  className='mt-5 py-3 trendingA' >
        <div className='container'>
        <div className='row'>
            <div className='col-12 py-2'>
               <h2>Trending Artists</h2>
            </div>
            {
                trendingArtists.map((a)=>(
                    <div className='col-md-3 col-sm-6 col-6' key={a.id}>
                        <br></br>
                    <img src={a.image.cover.url} alt={a.fullName} className='w-100'/>
                    </div>
                ))
            } 
            </div>
        </div>
    </div>
            
        </div>
    );
};

export default Trendingartists;