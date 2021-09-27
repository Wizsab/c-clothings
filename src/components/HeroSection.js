import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import videos from '../assets/videos/video-2.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={videos} autoPlay loop muted />
            <h1>Welcome to Comfort's Clothings</h1>
            <p>Discover and Preorder the latest from women's fashion collections,
                runway shows, lookbooks and so more in Comfort's Clothings</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    BLOG
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    MAGAZINES <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection