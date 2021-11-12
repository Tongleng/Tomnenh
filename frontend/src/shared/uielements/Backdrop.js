import React from 'react';
import ReactDom from 'react-dom';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';

import './Backdrop.css';

const Backdrop = props => {
    return ReactDom.createPortal(
        <div className="backdrop" onClick={props.onClick}>
        </div>, 
        document.getElementById('bakcdrop-hook')
    )
}

export default Backdrop;