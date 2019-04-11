import React from 'react'
// tell webpack that we are using this image
import burgerLogo from '../../assets/images/burger.png'

const logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo} alt="the one"/>
    </div>
);

export default logo;