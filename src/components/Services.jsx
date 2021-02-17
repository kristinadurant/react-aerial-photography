import React from 'react';
const services = [
    { id: 1, description: 'Portraits', img: 'portrait.jpeg'},
    { id: 2, description: 'Aerial Videos of Properties', img: 'brickell.jpg'},
    { id: 3, description: 'Unique Prints', img: 'zion.jpeg'},
    { id: 4, description: 'Photoshop', img: 'brickell.jpg'}
]

const Services = () => {
    return (
        <section id='services'>
            <div className='inner'>
                <div>
                    <h2>Video and Photo Services</h2>
                    <p>Have a project in mind?</p>
                    <p>Let’s work together.</p>
                    <div>
                        <img 
                            src={require(`../assets/images/${services[0].img}`).default} 
                            alt={services.description} 
                            width='300px' height='auto'
                        />
                    </div>
                </div>
                <div>
                    <ul>
                        {services.map(service => {
                            return (
                                <li key={service.id}>                                    
                                    <i className="fas fa-check"></i>
                                    <button>{service.description}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;
