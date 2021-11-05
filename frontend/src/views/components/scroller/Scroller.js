import React from 'react';
import { CgCornerRightUp } from "react-icons/cg";
import './Scroller.css';

const Scroller = props => {
    return (
        <button className="scroller-btn" id="scroller-to-top" >
            <CgCornerRightUp />
        </button>
    );
}
export default Scroller;