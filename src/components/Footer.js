import React from 'react'
import './Footer.css'

function footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <a>Get started</a>
                        <a>Testimonials</a>
                    </div>
                    <div className='footer-link-items2'>
                        <a>Investors</a>
                        <a>Terms of Service</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a
                            href='https://www.youtube.com/channel/UCgVhWRbWdlr-16i1gtm_NUQ'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Instagram</a>
                        <a
                            href='https://www.instagram.com/itstepukraine/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Facebook</a>
                    </div>
                    <div className='footer-link-items2'>
                        <a
                            href='https://www.youtube.com/channel/UCgVhWRbWdlr-16i1gtm_NUQ'
                            target='_blank'
                            rel='noopener noreferrer'>
                            YouTube</a>
                        <a
                            href='https://x.com/itstep'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Twitter</a>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default footer
