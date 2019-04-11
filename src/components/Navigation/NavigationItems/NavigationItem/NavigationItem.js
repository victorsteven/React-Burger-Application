import React from 'react'

const navigationItem = (props) => (
    <li className="NavigationItem">
        <a
            href={props.link}
            className={props.active}   
            // className={`Button ${props.btnType}`} 
        > 
            {props.children}  
        </a>
    </li>
);

export default navigationItem;