import React from 'react';


const TopSongs = ({title,state}) => {
    return (
        <div id='topComponent' className='mt-5 py-3' >
        <div className='container'>
        <div className='row'>
            <div className='col-12 py-2'>
               <h2>{title}</h2>
            </div>
            {
                state.map((g)=>(
                    <div className='col-md col-sm-12 col-12'key={g.id}>
                    <div className='container-play-icon position-relative w-100 overflow-hidden'>
                    <img src={g.album.image.cover.url} className='w-100' alt={g.album.name.replace('Single','')}/>
                    </div>
                    <h6 className='px-3 pt-2'>{g.album.name.replace('Single','')}</h6>
                    <h6 className='text-white-50 px-3'>{g.album.artists[0].fullName}</h6>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
    );
}

export default TopSongs;