import React from 'react'


// TODO: Create helper to define button className based on given prop
export default Button = (props) => <button type={props.type} className='btn btnPrimary'>{props.text}</button>