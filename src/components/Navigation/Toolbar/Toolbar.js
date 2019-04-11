import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className="Toolbar">
        <div>
            Menu
        </div>
        <div>
            <Logo />
        </div>
        <div>
            Logo
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar