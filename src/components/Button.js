import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className='btn' style={{backgroundColor:props.color}} onClick={props.onClick}>{props.text}</button>
    )
}

Button.defaultProps={
    color:"yellow",
    text:'Button'
}
Button.propTypes={
    color : PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}


export default Button
