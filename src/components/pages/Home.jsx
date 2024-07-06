import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Features from '../Features';
import EmailForm from '../EmailForm';


function Home() {
    return (
        <>
        <HeroSection />
        <Cards />
        <Features />
        <EmailForm />
        <Footer />
        </>
    );
}

export default Home;