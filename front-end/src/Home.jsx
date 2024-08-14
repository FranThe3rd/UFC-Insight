import React from 'react';
import homePic from './assets/home-page.jpg'
import './home.css'
import Navbar from './components/navbar/Navbar';
import useIntersectionObserver from './animations/useIntersectionObserver';
import useIntersectionObserver2 from './animations/useIntersectionObserver2';
import { NavLink } from 'react-router-dom';

export const Home = () => {

    useIntersectionObserver()
    useIntersectionObserver2()
    return (
        <div className='home'>
            <Navbar />
            <img className='home-pic'src={homePic} alt="" />
            <div className='text'>
            <h3 className='hideLeft'>UFC: Insight</h3>
            <h1 className='hideRight'>BREAKDOWN</h1>
            <h5 className='hideLeft'>Get in Depth with our detailed database.</h5>
            <NavLink to='/name'>
            <button className='get-started-btn'>Get Started</button>
            </NavLink>
            </div>


        </div>

    )
}

export default Home;