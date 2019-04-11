import React from 'react'

// let className = 'Button'
// if (props.btnType) = "Danger"

const button = (props) => (

    // <button className="{[Button, [props.btnType]].join(' ')}"
    // <button className="Button"
    <button className={`Button ${props.btnType}`}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button