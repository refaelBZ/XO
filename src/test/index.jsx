// TestComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Kobi from "./Kobi"
// Components for each participant
const Ronini = () => <h2>Welcome to Ronini's Component</h2>;
const Refael = () => <h2>Welcome to Refael's Component</h2>;

const Test = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/kobi">Kobi</Link>
                    </li>
                    <li>
                        <Link to="/ronini">Ronini</Link>
                    </li>
                    <li>
                        <Link to="/refael">Refael</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/kobi" element={<Kobi />} />
                <Route path="/ronini" element={<Ronini />} />
                <Route path="/refael" element={<Refael />} />
            </Routes>
        </Router>
    );
};

export default Test;