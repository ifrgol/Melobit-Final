import React ,{useState} from 'react';
import axios from "axios";
import search from "../images/search.svg";

const Search=()=>{

  const[searchInput,setSearch]=useState("");
  const[searchResult,setsearchResult]=useState([]) 

  const saveSearchHandeler= event=>{
      setSearch(event.target.value)
  
  }

 const searchHandler=async ()=>{
      console.log("Search: " + searchInput) 

      await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/6`)
      .then (response => {
          console.log(response.data.results)
          setsearchResult(response.data.results)
   })}
    return (

      
      <div className='container-fluid'>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-6 col-sm-11 col-11'>
          <div id='Searchbox' className='w-100 d-flex justify-content-between align-items-center'>
                       <input type="text" className='px-3' placeholder='Search ... ' value={searchInput} 
                      
                      onChange={saveSearchHandeler} 

                      onKeyPress={event => {
                        if (event.key === "Enter") {
                          searchHandler()
                        }
                      }}
                       />
                       <img src={search} alt="search icon" className='mx-3' onClick={searchHandler} />
                    </div>
          </div>
        </div>
        <div className='row justify-content-center mt-3' >

      {
       searchResult.map((a)=>(
          
            a.type==="song" && 
          
               <div className='col-md-5 col-sm-11 col-11 text-center mt-4' key={a.position}>
                <div id='divCartSearch' className='w-100 d-flex align-items-center justify-content-evenly'>
                    <img src={a.song.album.image.cover.url} alt={a.song.album.name.replace('Single' , '')}/>
                   <div>
                     <h6>
                      {a.song.album.name.replace('Single' , '')}
                     
                     </h6>
                    <p>{a.song.album.artists[0].fullName}</p>
                   </div> 
                </div>

               </div>
            
        ))
      }
              </div>

      </div>
        
    
    );
}

export default Search;