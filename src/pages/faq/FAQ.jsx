import './style.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import ListItem from './ListItem';
import { data } from './data.js';

const FAQ = () => {
    return (
        <main className='faq-page'>
            <Helmet>
                <title>Frequently asked questions</title>
                <meta name='description' content='Find answers to frequently asked questions about our services.' />
                <meta name='keywords' content='Contact Answers' />
            </Helmet>     

            <section>
                <div className='inner'>
                    <h1 className='font1'>Frequently asked questions</h1>
                    <ul>
                        {data.map((item, index) => (
                            <ListItem key={index} id={`question${index}`} q={item.q} a={item.a} />
                        ))}
                    </ul>
                </div>
            </section>      
        </main>


    )
}

export default FAQ;
