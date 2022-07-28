import React , { useRef } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "../css/styles.css"

// routes
import Nav from './Nav';
import HomePage from './Home/index.js';
import Portfolio from './Portfolio/index.js';
import Browse from './Browse/index.js';

// react app
const App = () => {
    const elementRef = useRef(null);
    console.log(elementRef);
    return (
        <div ref={elementRef}>
            <div className='container'>
                <div className='HpNoteTop'></div>
                <div className='HpNoteSide'></div>
                <div className='HpNoteLine'></div>
            </div>
            <Nav />
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