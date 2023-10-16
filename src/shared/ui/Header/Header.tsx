import * as React from 'react';
import { Left } from './components';
import { Right } from './components/Right';

export const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <Left/>
                <Right/>
            </nav>
        </header>
    );
};
