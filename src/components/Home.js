import React from 'react';
import Slider from "./Slider";
import Newsongs from './Newsongs';
import TopSongDay from './TopSongDay';
import Topweeksong from './Topweeksong';
import Trendingartists from './Trendingartists';

const Home = () => {
    return (
        <div>
            <Slider/>
            <center><Trendingartists/></center>
            <center><TopSongDay/></center>
            <center><Newsongs/></center>
            <center><Topweeksong/></center>
        </div>
    );
}

export default Home;