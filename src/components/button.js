import React from 'react'


// TODO: Create helper to define button className based on given prop
export default Button = (props) => {
    return (
        <button
            type={props.type}
            className='btn btnPrimary'
            onClick={props.handleClick}>
        {props.text}
        </button>)
}