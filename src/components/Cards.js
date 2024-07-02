import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
    return (
        <div className='cards'>
            <h1 id='cards-div' >We recommends this amazing trips!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='/images/sahara.jpg'
                            text="The Sahara Desert, a vast ocean of golden sands, stretches endlessly under the azure sky, where the sun paints the dunes with shades of amber and crimson."
                            label="Adventure"
                            path="/" />

                        <CardItem src='/images/cyprus.png'
                            text="Cyprus, an island of rich history and diverse culture, boasts stunning coastlines and charming villages, where ancient ruins meet modern luxury."
                            label="Cultural Escape"
                            path="/" />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='/images/islandia.jpg'
                            text="Iceland, the land of fire and ice, offers a surreal landscape of volcanic craters, majestic glaciers, and mesmerizing northern lights that dance across the night sky."
                            label="Natural Wonders"
                            path="/" />

                        <CardItem src='/images/panteleria.jpg'
                            text="Pantelleria, Italy's hidden gem in the Mediterranean, is a volcanic island known for its rugged beauty, thermal springs, and ancient stone dwellings called 'dammusi'."
                            label="Secluded Retreat"
                            path="/" />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='/images/amazonka.jpg'
                            text="The Amazon Rainforest, the world's largest tropical rainforest, is a vibrant ecosystem teeming with diverse wildlife, towering trees, and the life-giving Amazon River."
                            label="Eco Adventure"
                            path="/" />

                        <CardItem src='/images/bali.jpg'
                            text="Bali, the Island of the Gods, captivates with its lush landscapes, stunning beaches, and rich cultural heritage, where every corner exudes tranquility and spiritual charm."
                            label="Exotic Paradise"
                            path="/" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
