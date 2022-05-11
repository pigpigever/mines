import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Game} from './pages/game';
import {About} from './pages/about';
import {Record} from './pages/record';
import {NoFound} from './pages/404';

const App = () => (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/record" element={<Record />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
    </div>
);

export default App;
