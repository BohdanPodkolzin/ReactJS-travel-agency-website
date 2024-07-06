import React from 'react'
import './Features.css'

function Features() {
    return (
        <section className="features-container">
            <h2>Features</h2>
            <div className="features-grid">
                <div className="feature-item">
                    <img className='icon' src='./images/face-48.png' alt='Face Icon' />
                    <h3>Personalized Profiles</h3>
                    <p>Create and customize your own profile to connect with friends and share your experiences.</p>
                </div>
                <div className="feature-item">
                    <img className='icon' src='./images/movie-48.png' alt='Movie Icon' />
                    <h3>Media Streaming</h3>
                    <p>Enjoy seamless streaming of your favorite movies and shows with our integrated media player.</p>
                </div>
                <div className="feature-item">
                    <img className='icon' src='./images/map_marker-48.png' alt='Map Icon' />
                    <h3>Location Services</h3>
                    <p>Utilize our advanced location services to discover new places and experiences around you.</p>
                </div>
                <div className="feature-item">
                    <img className='icon' src='./images/genius-48.png' alt='Genius Icon' />
                    <h3>Smart Recommendations</h3>
                    <p>Get personalized suggestions based on your interests and activity with our AI-driven algorithms.</p>
                </div>
                <div className="feature-item">
                    <img className='icon' src='./images/alarm_clock-48.png' alt='Alarm Icon' />
                    <h3>Event Reminders</h3>
                    <p>Never miss an important event or deadline with our easy-to-use alarm and reminder system.</p>
                </div>
                <div className="feature-item">
                    <img className='icon' src='./images/airplane-48.png' alt='Airplane Icon' />
                    <h3>Travel Planning</h3>
                    <p>Plan your next adventure with our comprehensive travel tools and resources.</p>
                </div>
            </div>
        </section>
    )
}

export default Features
