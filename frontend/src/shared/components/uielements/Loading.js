import React from 'react';

import './Loading.css';

const Loading = props => {
    return (
        <div id="spinner" class="container">
            <div class="loading"></div>
            <h1>Loading</h1>
        </div>
    );
}

export default Loading;