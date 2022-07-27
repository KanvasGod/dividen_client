import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// routes
import HomePage from './Home/index.js';
import Portfolio from './Portfolio/index.js';
import Browse from './Browse/index.js';

// react app
const App = () => {
    return (
        <div>
            <h1>Header !!</h1>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/browse" component={Browse} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;