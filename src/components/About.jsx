import React from 'react';

const About = () => {
    return (
        <section id='about'>
            <div className='inner'>
                <div>
                    <span>Enterpreneur, Parent & World Traveler</span>
                    <h2>Pierre the Photographer</h2>
                    <p>My name is Pierre, and I decided to change my occupation after five years of working in sales. 
                    I still like communicating with people and work in a team. I want to alter the accents a bit and switch to .....</p>
                    <p> As a server, I learned what makes a product valuable and easy to sell besides promotion and persuasiveness. 
                    I have become interested in Photography recently.</p>
                    <p>Being open-minded allows me to feed off of other ideas while having a solid direction in mind.</p>
                </div>
                <div>
                    <img src={require('../assets/images/IMG_7582.jpg').default} alt='Portrait of Pierre the Photographer'/>
                </div>
            </div>
        </section>
    )
}

export default About;
