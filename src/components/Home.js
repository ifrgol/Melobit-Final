import React from 'react';
import Carousel from "./Carousel";
import Newsongs from './Newsongs';
import Topdaysong from './Topdaysong';
import Topweeksong from './Topweeksong';
import Trendingartists from './Trendingartists';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <center><Trendingartists/></center>
            <center><Topdaysong/></center>
            <center><Newsongs/></center>
            <center><Topweeksong/></center>
        </div>
    );
}

export default Home;