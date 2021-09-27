import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <h1>Why You Should Choose Us</h1>
                <div className='cards__wrapper'>
                    <div class="container">
                        <div ><i class="fas fa-star"></i>
                            <h2>Satisfaction</h2>
                            <p>We always think about our customer satisfaction first, We always work towards their happiness.</p>
                        </div>
                        <div ><i class="fas fa-grin-beam-sweat"></i>
                            <h2>Beauty &amp; Elegance</h2>
                            <p>Our customers beauty and elegance, Let us worry about your beauty and you being elegant in all your outings.</p>
                        </div>
                        <div ><i class="fas fa-bus"></i>
                            <h2>Quick Delivery</h2>
                            <p>We always take our customers seriously, we don't break deadlines and take our deliveries fast. We do worldwide delivery&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards
