import React, { useState } from 'react'
import Button from "./Button";
import Task from "./Tasks";

import PropTypes from 'prop-types';

const Header = ({title, onButtonClick,formstate}) => {
    

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={formstate?'red':'green'} text={formstate?'Close':'Add'}  onClick={onButtonClick}/>
            
        </header>
    )
}
Header.defaultProps={
    title:"Task Tracker"
}
Header.propTypes={

    title: PropTypes.string,

}

export default Header

