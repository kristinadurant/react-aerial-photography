import React from 'react';
import { Link } from 'react-router-dom'
import { Section1 } from '../../components';
import { Helmet } from 'react-helmet';
import Instagram from '../../components/instagram/Instagram';

const About = () => {
    return (
        <main>
            
            <Helmet>
                <title>About Pierre the Photographer</title>
                <meta name='description' content='Being open-minded allows me to feed off of other ideas while having a solid direction in mind.' />
                <meta name='keywords' content='Aerial Photographer Drone Miami' />
            </Helmet>

            <section 
                className='background-image'
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1496089479256-16374dc12c9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1714&q=80`}}
            >
                <div className='inner '>
                    <h1 className='font1'>About</h1>
                </div>   
            </section>
            
            <div className='inner'>
                
                <Section1
                    name='about'
                    url={require('../../assets/images/Pierre_Photographer.jpg').default} 
                    alt='Portrait of Pierre the Photographer'
                >
                    <span className='font2'>Enterpreneur, Parent & World Traveler</span>
                    <h2 className='font1'>Pierre the Photographer</h2>
                    <p>My name is Pierre, and I decided to change my occupation after five years of working in sales. 
                    I still like communicating with people and work in a team. I want to alter the accents a bit and switch to .....</p>
                    <p> As a server, I learned what makes a product valuable and easy to sell besides promotion and persuasiveness. 
                    I have become interested in Photography recently.</p>
                    <p>Being open-minded allows me to feed off of other ideas while having a solid direction in mind.</p>
                    <Link to='/contact' className='link'>Have a question?</Link>
                </Section1>

            </div>

            <Instagram />
            

        </main>
    )
}

export default About;
