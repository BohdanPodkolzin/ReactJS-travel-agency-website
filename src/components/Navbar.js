import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import $ from 'jquery';

function Navbar() {

    const scrollToTop = () => {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 1500);
    }
    const scrollToEmailForm = () => {
        $('html, body').animate({
            scrollTop: $('#email-section').offset().top
        }, 1500);
    }

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton);
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL
                        <img src='/images/dog-32-48.png' alt="Travel Logo" className="travel-logo-img" onClick={scrollToTop} />
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        <img
                            src={click ? '/images/cancel-menu-img.png' : '/images/edit-menuu.png'}
                            alt="Menu Icon"
                            className="menu-icon-img"
                        />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a
                                href='https://www.youtube.com/channel/UCgVhWRbWdlr-16i1gtm_NUQ'
                                className='nav-links'
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={closeMobileMenu}
                            >
                                YouTube
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='https://x.com/itstep'
                                className='nav-links'
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={closeMobileMenu}
                            >
                                Twitter
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='https://www.facebook.com/ITstepUkraine/?locale=ru_UA'
                                className='nav-links'
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={closeMobileMenu}
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact US!
                            </a>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' onClick={scrollToEmailForm}>CONTACT US!</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
