import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <header className='navHeader'>
            <nav className='navContainer'>
                <ul className='flex-row'>
                    <li>
                        <Link to='/'> J&H Trucking</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header> 
    );
}

export default Nav;