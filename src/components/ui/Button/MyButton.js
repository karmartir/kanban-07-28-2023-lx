import React from 'react';
import classes from './MyButton.module.css'
const MyButton = ({children, onClick, disabled}) => {
    return (
        <button style={{backgroundColor: "rgb(201,35,35)", color: 'white'}} disabled={disabled} onClick={onClick}
        className={classes.myButton}
        >
            {children}
        </button>
    );
};

export default MyButton;