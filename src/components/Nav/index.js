import React from 'react';

function Nav() {
    return(
        <header className='navHeader'>
            <nav className='navTitle'>
                <a href='/'>
                    J&H Trucking
                </a>
                <ul className='navBar'>
                    <li>
                        <a href='#about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header> 
    );
}

export default Nav;