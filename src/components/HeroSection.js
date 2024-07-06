import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import $ from 'jquery';

function HeroSection() {
    const scrollToEmailForm = () => {
        $('html, body').animate({
            scrollTop: $('#email-section').offset().top
        }, 1500);
    }

    const scrollToCards = () => {
        $('html, body').animate({
            scrollTop: $('#cards-div').offset().top
        }, 1000);
    }

    return (
        <div id='top' className='hero-container'>
            <video src='videos/video-2.mp4' autoPlay loop muted />
            <h1>Travel with us!</h1>
            <p>Choose the best only</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={scrollToEmailForm}>
                    EMAIL
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={scrollToCards}>
                    View
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
