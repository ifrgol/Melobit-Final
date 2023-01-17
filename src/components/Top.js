import React from 'react';


const Top = ({title,state}) => {
    return (
        <div id='topComponent' className='mt-5 py-3' >
        <div className='container'>
        <div className='row'>
            <div className='col-12 py-2'>
               <h2>{title}</h2>
            </div>
            {
                state.map((song)=>(
                    <div className='col-md col-sm-12 col-12'key={song.id}>
                    <div className='container-play-icon position-relative w-100 overflow-hidden'>
                    <img src={song.album.image.cover.url} className='w-100' alt={song.album.name.replace('Single','')}/>
                    </div>
                    <h6 className='px-3 pt-2'>{song.album.name.replace('Single','')}</h6>
                    <h6 className='text-white-50 px-3'>{song.album.artists[0].fullName}</h6>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
    );
}

export default Top;