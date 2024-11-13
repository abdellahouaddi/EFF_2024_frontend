// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulaire from './Component/Formulaire';
import Experts1 from './Component/Experts1';
import Experts2 from './Component/Experts2';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/formulaire" element={<Formulaire />} />
                <Route path="/Experts1" element={<Experts1 />} />
                <Route path="/Experts2" element={<Experts2 />} />
            </Routes>
        </Router>
    );
};

export default App;
