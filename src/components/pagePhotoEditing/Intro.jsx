import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div>
            <ol className='steps'>
                <li>
                    <span>
                        Upload your sample images through our 
                        <Link to='/contact'> contact form </Link> 
                        or via email
                        <a href='mailto: pierre.videophotographer@gmail.com'> pierre.videophotographer@gmail.com</a>.
                    </span>
                </li>
                <li>
                    <span>Receive a custom time and price quote according to editing complexity and photos quantity.</span>
                </li>
                <li>
                    <span>Accept our quote and we will start editing your images right away.</span>
                </li>
                <li>
                    <span>Review and approve editing. Submit a payment and receive your images.</span>
                </li>
            </ol>
        </div>
    )
}

export default Intro;
