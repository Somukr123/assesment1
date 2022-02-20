import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
          <ul className='navigate'>
            <li className='list'>
                <NavLink to ='/' className='connectToPath'>1</NavLink>
            </li>
            <li className='list'>
                <NavLink to ='/secondpage' className='connectToPath'>2</NavLink>
            </li>
            <li className='list'>
                <NavLink to ='/thirdPage' className='connectToPath'>3</NavLink>
            </li>
          </ul>  
        </nav>
    );
}

export default Navigation;
