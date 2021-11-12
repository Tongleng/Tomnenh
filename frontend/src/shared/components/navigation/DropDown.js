import React from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition } from 'react-transition-group';

import './DropDown.css';

const DropDown = props => {
    const content = 
    <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <dive className="drop-down" onClick={props.onClick}> {props.children} </dive> 
    </CSSTransition>
    return ReactDOM.createPortal(content, 
        document.getElementById('dropdown-hook')    
    );
}
export default DropDown;