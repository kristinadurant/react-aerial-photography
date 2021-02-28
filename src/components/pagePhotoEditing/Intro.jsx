import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div>
            <ol className='steps'>
                <li>
                    <span>One</span>
                    <p>
                        Upload your sample images through our 
                        <Link to='/contact'> contact form </Link> 
                        or via email
                        <a href='mailto: pierre.videophotographer@gmail.com'> pierre.videophotographer@gmail.com</a>.
                    </p>
                </li>
                <li>
                    <span>Two</span>
                    <p>Receive a custom time and price quote according to editing complexity and photos quantity.</p>
                </li>
                <li>
                    <span>Three</span>
                    <p>Accept our quote and we will start editing your images right away.</p>
                </li>
                <li>
                    <span>Four</span>
                    <p>Review and approve editing. Submit a payment and receive your images.</p>
                </li>
            </ol>
        </div>
    )
}

export default Intro;
